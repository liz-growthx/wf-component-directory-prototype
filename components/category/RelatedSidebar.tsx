'use client';
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
      maxHeight: 'calc(100vh - 120px)', overflowY: 'auto',
    }}>
      <h3 style={{ fontSize: 13, fontWeight: 700, color: '#374151', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
        Related Components
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {components.map(comp => (
          <Link
            key={comp.id}
            href={`/components/${comp.categorySlug}/${comp.id}`}
            style={{ display: 'block', textDecoration: 'none' }}
          >
            <div
              style={{ padding: '6px 8px', borderRadius: 6, fontSize: 13, color: '#374151', fontWeight: 500 }}
              onMouseEnter={e => (e.currentTarget.style.background = '#EEF0FF')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              {comp.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
