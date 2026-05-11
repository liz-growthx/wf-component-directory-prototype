'use client';
import Link from 'next/link';
import { Component } from '@/lib/components-data';

interface Props {
  component: Component;
  categorySlug: string;
}

export default function ComponentTile({ component, categorySlug }: Props) {
  return (
    <Link
      href={`/components/${categorySlug}/${component.id}`}
      style={{
        border: '1px solid #e2e8f0', borderRadius: 10,
        padding: '14px 16px', textDecoration: 'none',
        background: '#fff', transition: 'all 0.15s', cursor: 'pointer', display: 'block',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = '#4353FF'; e.currentTarget.style.background = '#f8faff'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.background = '#fff'; }}
    >
      <div style={{ marginBottom: 4 }}>
        <span style={{ fontSize: 14, fontWeight: 600, color: '#0f172a' }}>
          <span style={{ marginRight: 6 }}>{component.emoji}</span>{component.name}
        </span>
      </div>
      <p style={{ fontSize: 12, color: '#64748b', lineHeight: 1.5, margin: 0 }}>{component.desc}</p>
    </Link>
  );
}
