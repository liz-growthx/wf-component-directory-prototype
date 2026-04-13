import Link from 'next/link';
import { Component } from '@/lib/components-data';

interface Props {
  components: (Component & { categorySlug: string; categoryName: string })[];
}

export default function RelatedSidebar({ components }: Props) {
  return (
    <div style={{
      position: 'sticky', top: 80,
      background: '#f9fafb', border: '1px solid #e5e7eb',
      borderRadius: 10, padding: 20,
    }}>
      <h3 style={{ fontSize: 13, fontWeight: 700, color: '#374151', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
        Related Components
      </h3>
      <div className="space-y-2">
        {components.map(comp => (
          <Link
            key={comp.id}
            href={`/components/${comp.categorySlug}/${comp.id}`}
            style={{ display: 'block', textDecoration: 'none' }}
          >
            <div style={{ padding: '6px 8px', borderRadius: 6 }}
              onMouseEnter={e => (e.currentTarget.style.background = '#EEF0FF')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              <div style={{ fontSize: 13, color: '#111827', fontWeight: 500 }}>{comp.emoji} {comp.name}</div>
              <div style={{ fontSize: 11, color: '#9ca3af' }}>{comp.categoryName}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
