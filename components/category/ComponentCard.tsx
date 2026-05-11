'use client';
import Link from 'next/link';
import { Component } from '@/lib/components-data';

interface Props {
  component: Component;
  categorySlug: string;
}

export default function ComponentCard({ component, categorySlug }: Props) {
  return (
    <Link
      href={`/components/${categorySlug}/${component.id}`}
      style={{ textDecoration: 'none', display: 'block' }}
    >
      <div
        style={{
          border: '1px solid #e2e8f0', borderRadius: 12, overflow: 'hidden',
          cursor: 'pointer', background: '#fff', transition: 'all 0.15s',
        }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = '#4353FF'; e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(67,83,255,0.08)'; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
      >
        <div style={{
          height: 132,
          background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 48, borderBottom: '1px solid #f1f5f9',
        }}>
          {component.emoji}
        </div>
        <div style={{ padding: '16px 18px' }}>
          <h3 style={{ fontSize: 15, fontWeight: 600, color: '#0f172a', margin: '0 0 6px' }}>{component.name}</h3>
          <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.5, margin: 0 }}>{component.desc}</p>
        </div>
      </div>
    </Link>
  );
}
