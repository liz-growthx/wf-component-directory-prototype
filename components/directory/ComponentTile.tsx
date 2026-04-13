import Link from 'next/link';
import { Component } from '@/lib/components-data';
import { tierColor } from '@/lib/utils';

interface Props {
  component: Component;
  categorySlug: string;
}

export default function ComponentTile({ component, categorySlug }: Props) {
  const tc = tierColor(component.tier);
  return (
    <Link
      href={`/components/${categorySlug}/${component.id}`}
      className="group block"
      style={{
        border: '1px solid #e5e7eb',
        borderRadius: 8,
        padding: '12px 14px',
        textDecoration: 'none',
        background: '#fff',
        transition: 'border-color 0.15s',
        cursor: 'pointer',
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = '#4353FF')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = '#e5e7eb')}
    >
      <div className="flex items-start justify-between gap-2 mb-1">
        <span style={{ fontSize: 14, fontWeight: 600, color: '#111827' }}>{component.emoji} {component.name}</span>
        <span style={{ background: tc.bg, color: tc.text, fontSize: 10, fontWeight: 600, borderRadius: 4, padding: '2px 6px', flexShrink: 0 }}>{component.tier}</span>
      </div>
      <p style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.4, margin: 0 }}>{component.desc}</p>
    </Link>
  );
}
