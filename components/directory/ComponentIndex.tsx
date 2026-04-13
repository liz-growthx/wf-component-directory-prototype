import Link from 'next/link';
import { categories } from '@/lib/components-data';
import ComponentTile from './ComponentTile';

export default function ComponentIndex() {
  return (
    <div className="space-y-10">
      {Object.values(categories).map(cat => (
        <section key={cat.slug}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span style={{ fontSize: 18 }}>{cat.emoji}</span>
              <h2 style={{ fontSize: 18, fontWeight: 700, color: '#111827', margin: 0 }}>{cat.name}</h2>
              <span style={{ fontSize: 13, color: '#9ca3af' }}>({cat.components.length})</span>
            </div>
            <Link
              href={`/components/${cat.slug}`}
              style={{ fontSize: 13, color: '#4353FF', textDecoration: 'none', fontWeight: 500 }}
            >
              View all →
            </Link>
          </div>
          <p style={{ fontSize: 13, color: '#6b7280', marginBottom: 16 }}>{cat.desc}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
            {cat.components.slice(0, 4).map(comp => (
              <ComponentTile key={comp.id} component={comp} categorySlug={cat.slug} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
