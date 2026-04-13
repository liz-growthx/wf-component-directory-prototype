'use client';
import { useState } from 'react';

interface Props {
  type: 'buildWith' | 'worksWith';
  buildWith?: { title: string; topics: number }[];
  worksWith?: { name: string; meta: string }[];
}

export default function ZoneCard({ type, buildWith, worksWith }: Props) {
  const [open, setOpen] = useState(type === 'buildWith');

  if (type === 'buildWith') {
    return (
      <div style={{ border: '1px solid #e5e7eb', borderRadius: 10, overflow: 'hidden', marginBottom: 16 }}>
        <div style={{ padding: '14px 16px', borderBottom: open ? '1px solid #e5e7eb' : 'none', background: '#f9fafb' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span>📚</span>
            <span style={{ fontSize: 14, fontWeight: 700, color: '#111827' }}>Build with this</span>
          </div>
          <p style={{ fontSize: 12, color: '#9ca3af', margin: '4px 0 0' }}>JTBD tutorials using this component</p>
        </div>
        <div style={{ padding: '12px 16px' }}>
          {buildWith?.map((item, i) => (
            <a
              key={i}
              href="#"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '8px 0', borderBottom: i < (buildWith.length - 1) ? '1px solid #f3f4f6' : 'none',
                textDecoration: 'none',
              }}
            >
              <span style={{ fontSize: 13, color: '#374151', fontWeight: 500 }}>{item.title}</span>
              <span style={{
                background: '#EEF0FF', color: '#4353FF',
                fontSize: 11, fontWeight: 600, borderRadius: 10, padding: '2px 8px',
              }}>{item.topics} topics</span>
            </a>
          ))}
        </div>
      </div>
    );
  }

  // Works with — collapsible
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
            {!open && (
              <span style={{ background: '#f3f4f6', color: '#6b7280', fontSize: 11, borderRadius: 10, padding: '1px 8px' }}>
                {worksWith?.length} integrations
              </span>
            )}
          </div>
          {!open && <p style={{ fontSize: 12, color: '#9ca3af', margin: '4px 0 0' }}>Click to see integrations</p>}
        </div>
        <span style={{ color: '#9ca3af', fontSize: 18 }}>{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div style={{ padding: '12px 16px' }}>
          {worksWith?.map((item, i) => (
            <a
              key={i}
              href="#"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '8px 0', borderBottom: i < (worksWith.length - 1) ? '1px solid #f3f4f6' : 'none',
                textDecoration: 'none',
              }}
            >
              <span style={{ fontSize: 13, color: '#374151', fontWeight: 500 }}>{item.name}</span>
              <span style={{ fontSize: 12, color: '#9ca3af' }}>{item.meta}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
