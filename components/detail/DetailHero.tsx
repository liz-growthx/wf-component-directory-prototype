import { Component } from '@/lib/components-data';
import { icpColor, tierColor } from '@/lib/utils';

interface Props {
  component: Component;
  categoryName: string;
}

export default function DetailHero({ component, categoryName }: Props) {
  const tc = tierColor(component.tier);
  return (
    <div style={{ marginBottom: 32 }}>
      {/* ICP badges */}
      <div className="flex flex-wrap gap-2 mb-3">
        {component.icp.map(i => {
          const ic = icpColor(i);
          return (
            <span key={i} style={{ background: ic.bg, color: ic.text, fontSize: 12, fontWeight: 600, borderRadius: 6, padding: '3px 10px' }}>
              {i}
            </span>
          );
        })}
        <span style={{ background: tc.bg, color: tc.text, fontSize: 12, fontWeight: 600, borderRadius: 6, padding: '3px 10px' }}>
          {component.tier}
        </span>
      </div>

      {/* Name */}
      <div className="flex items-center gap-3 mb-2">
        <span style={{ fontSize: 36 }}>{component.emoji}</span>
        <h1 style={{ fontSize: 32, fontWeight: 800, color: '#111827', margin: 0 }}>{component.name}</h1>
      </div>

      {/* Description */}
      <p style={{ fontSize: 16, color: '#6b7280', marginBottom: 20, maxWidth: 600 }}>{component.desc}</p>

      {/* Actions */}
      <div className="flex gap-3">
        <a
          href="#"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            border: '1px solid #e5e7eb', borderRadius: 8,
            padding: '8px 16px', fontSize: 14, fontWeight: 500,
            color: '#374151', textDecoration: 'none', background: '#fff',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          GitHub
        </a>
        <button
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: '#4353FF', borderRadius: 8,
            padding: '8px 20px', fontSize: 14, fontWeight: 600,
            color: '#fff', border: 'none', cursor: 'pointer',
          }}
        >
          Install component ↓
        </button>
      </div>
    </div>
  );
}
