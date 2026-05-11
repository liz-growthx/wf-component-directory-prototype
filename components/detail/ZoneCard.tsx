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
  if (props.type === 'buildWith') {
    const all = props.buildWith;
    const live = all.filter(i => !!i.url);
    const pending = all.length - live.length;
    return (
      <div style={{ border: '1px solid #e2e8f0', borderRadius: 12, overflow: 'hidden', marginBottom: 16, background: '#fff' }}>
        <div style={{ padding: '14px 18px', borderBottom: live.length ? '1px solid #f1f5f9' : 'none' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 15 }}>📚</span>
            <span style={{ fontSize: 14, fontWeight: 600, color: '#0f172a' }}>Build with this</span>
          </div>
          <p style={{ fontSize: 12, color: '#94a3b8', margin: '4px 0 0' }}>
            Tutorials that use this component
          </p>
        </div>
        {live.length > 0 ? (
          <div style={{ padding: '4px 8px' }}>
            {live.map(item => (
              <a
                key={item.id}
                href={item.url!}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block', padding: '10px 10px', borderRadius: 8,
                  textDecoration: 'none', color: '#1e293b', fontSize: 13,
                  lineHeight: 1.45, fontWeight: 500,
                  transition: 'background 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#f8fafc'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
              >
                <span style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
                  <span>{item.title}</span>
                  <span style={{ color: '#4353FF', fontSize: 14, flexShrink: 0, lineHeight: 1.45 }}>↗</span>
                </span>
              </a>
            ))}
          </div>
        ) : (
          <div style={{ padding: '20px 18px', fontSize: 13, color: '#94a3b8' }}>
            New tutorials coming soon.
          </div>
        )}
        {pending > 0 && (
          <div style={{
            padding: '10px 18px', borderTop: '1px solid #f1f5f9',
            background: '#f8fafc', fontSize: 12, color: '#64748b',
          }}>
            <span style={{ fontWeight: 500 }}>{pending}</span> more in production · check back soon
          </div>
        )}
      </div>
    );
  }

  // Works with — default open, live-only, "more coming" footer
  const all = props.worksWith;
  const live = all.filter(i => !!i.url && i.published);
  const pending = all.length - live.length;
  const [open, setOpen] = useState(true); // default open per spec

  return (
    <div style={{ border: '1px solid #e2e8f0', borderRadius: 12, overflow: 'hidden', marginBottom: 16, background: '#fff' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', textAlign: 'left', padding: '14px 18px',
          background: '#fff', border: 'none', cursor: 'pointer',
          borderBottom: open ? '1px solid #f1f5f9' : 'none',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 15 }}>🔗</span>
            <span style={{ fontSize: 14, fontWeight: 600, color: '#0f172a' }}>Works with</span>
          </div>
          <p style={{ fontSize: 12, color: '#94a3b8', margin: '4px 0 0' }}>
            Integrations you can pair this component with
          </p>
        </div>
        <span style={{ color: '#94a3b8', fontSize: 18, lineHeight: 1 }}>{open ? '−' : '+'}</span>
      </button>
      {open && (
        live.length > 0 ? (
          <div style={{ padding: '4px 8px' }}>
            {live.map(item => (
              <a
                key={item.id}
                href={item.url!}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '10px 10px', borderRadius: 8, gap: 8,
                  textDecoration: 'none', color: '#1e293b', fontSize: 13,
                  fontWeight: 500, transition: 'background 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = '#f8fafc'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
              >
                <span>{item.name}</span>
                <span style={{ color: '#4353FF', fontSize: 14, lineHeight: 1.45 }}>↗</span>
              </a>
            ))}
          </div>
        ) : (
          <div style={{ padding: '20px 18px', fontSize: 13, color: '#94a3b8' }}>
            Integration pages coming soon.
          </div>
        )
      )}
      {open && pending > 0 && (
        <div style={{
          padding: '10px 18px', borderTop: '1px solid #f1f5f9',
          background: '#f8fafc', fontSize: 12, color: '#64748b',
        }}>
          <span style={{ fontWeight: 500 }}>{pending}</span> more integrations coming soon
        </div>
      )}
    </div>
  );
}
