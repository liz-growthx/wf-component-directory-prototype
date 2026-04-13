'use client';
import Link from 'next/link';
import { Component } from '@/lib/components-data';
import { tierColor, icpColor } from '@/lib/utils';

interface Props {
  component: Component;
  categorySlug: string;
}

export default function ComponentCard({ component, categorySlug }: Props) {
  const tc = tierColor(component.tier);
  return (
    <Link
      href={`/components/${categorySlug}/${component.id}`}
      style={{ textDecoration: 'none', display: 'block' }}
    >
      <div
        style={{ border: '1px solid #e5e7eb', borderRadius: 10, overflow: 'hidden', cursor: 'pointer', background: '#fff' }}
        onMouseEnter={e => (e.currentTarget.style.borderColor = '#4353FF')}
        onMouseLeave={e => (e.currentTarget.style.borderColor = '#e5e7eb')}
      >
        {/* Preview area */}
        <div style={{
          height: 120,
          background: 'linear-gradient(135deg, #f9fafb 0%, #EEF0FF 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 42,
        }}>
          {component.emoji}
        </div>
        {/* Info */}
        <div style={{ padding: '12px 14px' }}>
          <div className="flex items-center justify-between mb-1">
            <span style={{ fontSize: 14, fontWeight: 700, color: '#111827' }}>{component.name}</span>
            <span style={{ background: tc.bg, color: tc.text, fontSize: 10, fontWeight: 600, borderRadius: 4, padding: '2px 6px' }}>{component.tier}</span>
          </div>
          <p style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.4, margin: '0 0 10px' }}>{component.desc}</p>
          <div className="flex flex-wrap gap-1">
            {component.icp.map(i => {
              const ic = icpColor(i);
              return (
                <span key={i} style={{ background: ic.bg, color: ic.text, fontSize: 10, fontWeight: 500, borderRadius: 4, padding: '2px 6px' }}>
                  {i}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </Link>
  );
}
