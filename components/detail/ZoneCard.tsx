'use client';
import { useState } from 'react';
import type { BuildWithItem, WorksWithItem } from '@/lib/components-data';

interface BuildProps {
  type: 'buildWith';
  buildWith: BuildWithItem[];
}
interface WorksProps {
  type: 'worksWith';
  worksWith: WorksWithItem[];
}
type Props = BuildProps | WorksProps;

export default function ZoneCard(props: Props) {
  const [open, setOpen] = useState(props.type === 'buildWith');

  if (props.type === 'buildWith') {
    const items = props.buildWith;
    const liveCount = items.filter(i => !!i.url).length;
    return (
      <div style={{ border: '1px solid #e5e7eb', borderRadius: 10, overflow: 'hidden', marginBottom: 16 }}>
        <div style={{ padding: '14px 16px', borderBottom: items.length ? '1px solid #e5e7eb' : 'none', background: '#f9fafb' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span>📚</span>
            <span style={{ fontSize: 14, fontWeight: 700, color: '#111827' }}>Build with this</span>
            <span style={{ background: '#EEF0FF', color: '#4353FF', fontSize: 11, fontWeight: 600, borderRadius: 10, padding: '1px 8px' }}>
              {items.length} {items.length === 1 ? 'topic' : 'topics'}
            </span>
          </div>
          <p style={{ fontSize: 12, color: '#9ca3af', margin: '4px 0 0' }}>
            {liveCount > 0
              ? `${liveCount} live · linked JTBD tutorials in the Webflow content ecosystem`
              : 'JTBD tutorials in production'}
          </p>
        </div>
        {items.length === 0 ? (
          <div style={{ padding: '16px', fontSize: 12, color: '#9ca3af' }}>No JTBD tutorials linked yet.</div>
        ) : (
          <div style={{ padding: '12px 16px' }}>
            {items.map((item, i) => {
              const isLive = !!item.url;
              const inner = (
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
                  padding: '10px 0', borderBottom: i < (items.length - 1) ? '1px solid #f3f4f6' : 'none',
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 3, flex: 1, minWidth: 0 }}>
                    <span style={{ fontSize: 13, color: isLive ? '#374151' : '#9ca3af', fontWeight: 500, lineHeight: 1.4 }}>
                      {item.title}
                    </span>
                    <div style={{ display: 'flex', gap: 8, fontSize: 11, color: '#9ca3af' }}>
                      {item.tier && <span>{item.tier}</span>}
                      {item.icp && <span>· {item.icp}</span>}
                      {item.intent && <span>· {item.intent}</span>}
                    </div>
                  </div>
                  {isLive ? (
                    <span style={{ background: '#DCFCE7', color: '#14532D', fontSize: 10, fontWeight: 600, borderRadius: 10, padding: '2px 8px', flexShrink: 0 }}>Live</span>
                  ) : (
                    <span style={{ background: '#f3f4f6', color: '#9ca3af', fontSize: 10, fontWeight: 600, borderRadius: 10, padding: '2px 8px', flexShrink: 0 }}>
                      {item.status || 'Planned'}
                    </span>
                  )}
                </div>
              );
              return isLive ? (
                <a key={item.id} href={item.url!} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
                  {inner}
                </a>
              ) : (
                <div key={item.id} style={{ display: 'block', opacity: 0.85 }}>{inner}</div>
              );
            })}
          </div>
        )}
      </div>
    );
  }

  // Works with — collapsible
  const items = props.worksWith;
  return (
    <div style={{ border: '1px solid #e5e7eb', borderRadius: 10, overflow: 'hidden', marginBottom: 16 }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', textAlign: 'left', padding: '14px 16px',
          background: '#f9fafb', border: 'none', cursor: 'pointer',
          borderBottom: open ? '1px solid #e5e7eb' : 'none',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span>🔗</span>
            <span style={{ fontSize: 14, fontWeight: 700, color: '#111827' }}>Works with</span>
            <span style={{ background: '#f3f4f6', color: '#6b7280', fontSize: 11, borderRadius: 10, padding: '1px 8px' }}>
              {items.length} {items.length === 1 ? 'integration' : 'integrations'}
            </span>
          </div>
          {!open && <p style={{ fontSize: 12, color: '#9ca3af', margin: '4px 0 0' }}>Click to see integrations</p>}
        </div>
        <span style={{ color: '#9ca3af', fontSize: 18 }}>{open ? '−' : '+'}</span>
      </button>
      {open && (
        items.length === 0 ? (
          <div style={{ padding: '16px', fontSize: 12, color: '#9ca3af' }}>No integration pages linked via JTBDs yet.</div>
        ) : (
          <div style={{ padding: '12px 16px' }}>
            {items.map((item, i) => {
              const inner = (
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '8px 0', borderBottom: i < (items.length - 1) ? '1px solid #f3f4f6' : 'none',
                }}>
                  <span style={{ fontSize: 13, color: '#374151', fontWeight: 500 }}>{item.name}</span>
                  <span style={{ fontSize: 11, color: '#9ca3af' }}>
                    {item.tier ? item.tier : ''}
                    {item.published ? ' · Live' : ' · Pending'}
                  </span>
                </div>
              );
              return item.url ? (
                <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
                  {inner}
                </a>
              ) : (
                <div key={item.id} style={{ display: 'block' }}>{inner}</div>
              );
            })}
          </div>
        )
      )}
    </div>
  );
}
