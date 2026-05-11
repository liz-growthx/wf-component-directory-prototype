// scripts/sync-airtable.mjs
// Pulls Code Components + linked JTBDs + linked Integration Pages from Airtable
// and writes a static JSON file consumed by the Next.js app.
//
// Run: node scripts/sync-airtable.mjs

import Airtable from 'airtable';
import 'dotenv/config';
import fs from 'fs';
import path from 'path';

const apiKey = process.env.AIRTABLE_API_KEY;
const baseId = process.env.AIRTABLE_BASE_ID;
if (!apiKey || !baseId) {
  console.error('Missing AIRTABLE_API_KEY or AIRTABLE_BASE_ID in env');
  process.exit(1);
}

const base = new Airtable({ apiKey }).base(baseId);
const TABLES = {
  components: 'tblGpao9dYs6pyOco',
  jtbds: 'tblJPPXF0zUpftg70',
  integrations: 'tblHXgRWLhMskylKB',
};

async function fetchAll(tableId, opts = {}) {
  const records = [];
  await new Promise((resolve, reject) => {
    base(tableId).select(opts).eachPage(
      (page, next) => {
        records.push(...page.map(r => ({ id: r.id, fields: r.fields })));
        next();
      },
      err => (err ? reject(err) : resolve())
    );
  });
  return records;
}

console.log('Fetching Code Components…');
const components = await fetchAll(TABLES.components);
console.log(`  → ${components.length} components`);

console.log('Fetching JTBD Topics…');
const jtbds = await fetchAll(TABLES.jtbds, {
  fields: ['Topic', 'Status', 'Priority Tier', 'Target ICP', 'Intent', 'Published URL', 'Related Integration Pages', 'Related Code Components', 'Search Volume', 'AppGen Category'],
});
console.log(`  → ${jtbds.length} JTBDs`);

console.log('Fetching Integration Pages…');
const integrations = await fetchAll(TABLES.integrations, {
  fields: ['Name', 'Integration Name', 'Slug', 'Tier', 'Status', 'GSC Clicks', 'GSC CTR', 'GSC Position'],
});
console.log(`  → ${integrations.length} integration pages`);

const jtbdById = Object.fromEntries(jtbds.map(j => [j.id, j]));
const integrationById = Object.fromEntries(integrations.map(i => [i.id, i]));

const publishedStatuses = new Set(['07 - Published', '08 - Refreshing', '10 - Refreshed']);

function integrationUrl(intRec) {
  const slug = intRec.fields['Slug'];
  return slug ? `https://webflow.com/integrations/${slug}` : null;
}

function bestName(rec) {
  return rec.fields['Name'] || rec.fields['Integration Name'] || rec.fields['Component Name'] || '(untitled)';
}

const out = components.map(c => {
  const linkedJtbdIds = c.fields['JTBD Topics'] || [];
  const linkedJtbds = linkedJtbdIds.map(id => jtbdById[id]).filter(Boolean);

  const buildWith = linkedJtbds
    .map(j => ({
      id: j.id,
      title: j.fields['Topic'],
      url: j.fields['Published URL'] || null,
      status: j.fields['Status'] || null,
      tier: j.fields['Priority Tier'] || null,
      icp: j.fields['Target ICP'] || null,
      intent: j.fields['Intent'] || null,
      searchVolume: j.fields['Search Volume'] || 0,
    }))
    .sort((a, b) => {
      const aLive = !!a.url, bLive = !!b.url;
      if (aLive !== bLive) return aLive ? -1 : 1;
      return (b.searchVolume || 0) - (a.searchVolume || 0);
    });

  const intMap = new Map();
  linkedJtbds.forEach(j => {
    (j.fields['Related Integration Pages'] || []).forEach(id => {
      if (intMap.has(id)) return;
      const i = integrationById[id];
      if (!i) return;
      const isPublished = publishedStatuses.has(i.fields['Status']);
      intMap.set(id, {
        id: i.id,
        name: bestName(i),
        slug: i.fields['Slug'] || null,
        url: integrationUrl(i),
        tier: i.fields['Tier'] || null,
        published: isPublished,
        clicks: i.fields['GSC Clicks'] || 0,
        ctr: i.fields['GSC CTR'] || 0,
        position: i.fields['GSC Position'] || null,
      });
    });
  });
  const worksWith = Array.from(intMap.values())
    .sort((a, b) => {
      if (a.published !== b.published) return a.published ? -1 : 1;
      return (b.clicks || 0) - (a.clicks || 0);
    });

  return {
    id: c.id,
    key: c.fields['Component Key'] || null,
    name: c.fields['Component Name'] || '(unnamed)',
    tier: c.fields['Tier'] || null,
    status: c.fields['Status'] || null,
    showcaseReadiness: c.fields['Showcase Readiness'] || null,
    appGenCategory: c.fields['AppGen Category'] || null,
    appGenDemand: c.fields['AppGen Demand'] || 0,
    githubUrl: c.fields['GitHub URL'] || null,
    landingPageUrl: c.fields['Landing Page URL'] || null,
    notes: c.fields['Notes'] || null,
    buildWith,
    worksWith,
    buildWithCount: buildWith.length,
    worksWithCount: worksWith.length,
  };
});

out.sort((a, b) => {
  const tierRank = { T1: 0, T2: 1 };
  const at = tierRank[a.tier] ?? 99, bt = tierRank[b.tier] ?? 99;
  if (at !== bt) return at - bt;
  return (b.appGenDemand || 0) - (a.appGenDemand || 0);
});

const outDir = path.join(process.cwd(), 'lib');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
const outPath = path.join(outDir, 'airtable-data.json');
fs.writeFileSync(outPath, JSON.stringify(out, null, 2));

const buildWithTotal = out.reduce((s, c) => s + c.buildWithCount, 0);
const worksWithTotal = out.reduce((s, c) => s + c.worksWithCount, 0);

console.log('\n✓ Wrote', outPath);
console.log(`  ${out.length} components | ${buildWithTotal} JTBD links | ${worksWithTotal} integration links`);
console.log(`  Top components by JTBD link count:`);
out.slice(0, 10).forEach(c => {
  console.log(`    ${c.name.padEnd(28)} | ${c.tier} | ${c.buildWithCount} JTBD | ${c.worksWithCount} integrations`);
});
