'use client';
import { useState } from 'react';

interface Props {
  componentId: string;
  componentName: string;
  emoji: string;
}

const demos: Record<string, () => JSX.Element> = {
  'accordion': () => {
    const [open, setOpen] = useState<number | null>(0);
    const items = [
      { q: 'What are Code Components?', a: 'Code Components are production-ready React components you can install directly into your Webflow project.' },
      { q: 'How do I install a component?', a: 'Run npx webflow-cli add [component-id] in your terminal, then import and use it in your project.' },
      { q: 'Are components customizable?', a: 'Yes — every component accepts className props and follows your design system tokens.' },
    ];
    return (
      <div style={{ maxWidth: 480 }}>
        {items.map((item, i) => (
          <div key={i} style={{ borderBottom: '1px solid #374151', overflow: 'hidden' }}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              style={{
                width: '100%', textAlign: 'left', padding: '12px 0',
                background: 'none', border: 'none', color: '#f9fafb',
                fontSize: 14, fontWeight: 500, cursor: 'pointer',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}
            >
              {item.q}
              <span style={{ color: '#6b7280', fontSize: 18 }}>{open === i ? '\u2212' : '+'}</span>
            </button>
            {open === i && (
              <p style={{ fontSize: 13, color: '#9ca3af', margin: '0 0 12px', lineHeight: 1.6 }}>{item.a}</p>
            )}
          </div>
        ))}
      </div>
    );
  },
  'modal-dialog': () => {
    const [open, setOpen] = useState(false);
    return (
      <div>
        <button
          onClick={() => setOpen(true)}
          style={{
            background: '#4353FF', color: '#fff', border: 'none',
            borderRadius: 8, padding: '10px 20px', fontSize: 14,
            fontWeight: 600, cursor: 'pointer',
          }}
        >
          Open Modal
        </button>
        {open && (
          <div
            style={{
              position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000,
            }}
            onClick={() => setOpen(false)}
          >
            <div
              style={{
                background: '#1f1f23', borderRadius: 12, padding: 28,
                width: 400, border: '1px solid #3f3f46',
              }}
              onClick={e => e.stopPropagation()}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <h3 style={{ color: '#f9fafb', margin: 0, fontSize: 18, fontWeight: 700 }}>Confirm Action</h3>
                <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', color: '#6b7280', fontSize: 20, cursor: 'pointer' }}>×</button>
              </div>
              <p style={{ color: '#9ca3af', fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>This is a modal dialog component. Click outside or press the × button to close.</p>
              <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
                <button onClick={() => setOpen(false)} style={{ background: '#374151', color: '#f9fafb', border: 'none', borderRadius: 8, padding: '8px 16px', cursor: 'pointer', fontSize: 14 }}>Cancel</button>
                <button onClick={() => setOpen(false)} style={{ background: '#4353FF', color: '#fff', border: 'none', borderRadius: 8, padding: '8px 16px', cursor: 'pointer', fontSize: 14, fontWeight: 600 }}>Confirm</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  },
  'date-picker': () => {
    const [selected, setSelected] = useState('');
    const today = new Date();
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    return (
      <div>
        <div style={{ marginBottom: 12 }}>
          <input
            type="text"
            readOnly
            value={selected || 'Select a date'}
            style={{
              background: '#1f1f23', border: '1px solid #3f3f46',
              borderRadius: 8, padding: '8px 12px', color: selected ? '#f9fafb' : '#6b7280',
              fontSize: 14, width: 200, cursor: 'pointer',
            }}
          />
        </div>
        <div style={{ background: '#1f1f23', border: '1px solid #3f3f46', borderRadius: 10, padding: 16, width: 224 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
            <button style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer', fontSize: 16 }}>‹</button>
            <span style={{ color: '#f9fafb', fontSize: 14, fontWeight: 600 }}>
              {today.toLocaleString('default', { month: 'long' })} {today.getFullYear()}
            </span>
            <button style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer', fontSize: 16 }}>›</button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 2 }}>
            {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => (
              <div key={d} style={{ textAlign: 'center', fontSize: 10, color: '#6b7280', padding: '4px 0' }}>{d}</div>
            ))}
            {Array.from({ length: new Date(today.getFullYear(), today.getMonth(), 1).getDay() }).map((_, i) => (
              <div key={`e-${i}`} />
            ))}
            {days.map(d => {
              const dateStr = `${today.getMonth() + 1}/${d}/${today.getFullYear()}`;
              const isToday = d === today.getDate();
              const isSel = selected === dateStr;
              return (
                <button
                  key={d}
                  onClick={() => setSelected(dateStr)}
                  style={{
                    background: isSel ? '#4353FF' : isToday ? '#374151' : 'none',
                    border: 'none', borderRadius: 6, color: isSel ? '#fff' : isToday ? '#f9fafb' : '#9ca3af',
                    fontSize: 12, padding: '4px 0', cursor: 'pointer', textAlign: 'center',
                  }}
                >
                  {d}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  },
};

function getImportSnippet(id: string, name: string): string {
  const pascalName = name.replace(/\s*\/\s*/g, '').replace(/[\s-]+(\w)/g, (_, c) => c.toUpperCase()).replace(/^\w/, c => c.toUpperCase());
  return `import { ${pascalName} } from '@webflow/components/${id}'\n\nexport default function MyPage() {\n  return (\n    <div>\n      <${pascalName}\n        className="my-component"\n        onInteract={() => console.log('interacted')}\n      />\n    </div>\n  )\n}`;
}

function colorLine(line: string): React.ReactNode {
  const importMatch = line.match(/^(import)\s+(\{[^}]+\})\s+(from)\s+('[^']+')(.*)$/);
  if (importMatch) return <>
    <span style={{ color: '#c678dd' }}>import</span>
    {' '}
    <span style={{ color: '#61afef' }}>{importMatch[2]}</span>
    {' '}
    <span style={{ color: '#c678dd' }}>from</span>
    {' '}
    <span style={{ color: '#98c379' }}>{importMatch[4]}</span>
    {importMatch[5]}
  </>;

  const exportMatch = line.match(/^(export default function)\s+(\w+)(.*)$/);
  if (exportMatch) return <>
    <span style={{ color: '#c678dd' }}>export default function</span>
    {' '}
    <span style={{ color: '#61afef' }}>{exportMatch[2]}</span>
    <span style={{ color: '#abb2bf' }}>{exportMatch[3]}</span>
  </>;

  if (/^\s*return\s*\(/.test(line)) return <span>
    {line.match(/^(\s*)/)?.[1]}
    <span style={{ color: '#c678dd' }}>return</span>
    <span style={{ color: '#abb2bf' }}>{line.replace(/^\s*return/, '')}</span>
  </span>;

  const jsxMatch = line.match(/^(\s*)(<\/?)(\w+)([\s\S]*)$/);
  if (jsxMatch) return <span>
    {jsxMatch[1]}
    <span style={{ color: '#e06c75' }}>{jsxMatch[2]}{jsxMatch[3]}</span>
    {jsxMatch[4].split(/(\w+=\{[^}]+\}|\w+="[^"]*")/).map((part, i) => {
      if (/^\w+=/.test(part)) {
        const [k, ...v] = part.split('=');
        return <span key={i}> <span style={{ color: '#d19a66' }}>{k}</span><span style={{ color: '#abb2bf' }}>={v.join('=')}</span></span>;
      }
      return <span key={i} style={{ color: '#abb2bf' }}>{part}</span>;
    })}
  </span>;

  if (/^\s*[{})]+\s*$/.test(line)) return <span style={{ color: '#abb2bf' }}>{line}</span>;

  return <span style={{ color: '#abb2bf' }}>{line}</span>;
}

function syntaxHighlight(code: string): React.ReactNode {
  return code.split('\n').map((line, i) => (
    <div key={i}>{colorLine(line)}</div>
  ));
}

export default function DemoArea({ componentId, componentName, emoji }: Props) {
  const [tab, setTab] = useState<'preview' | 'code'>('preview');
  const DemoComponent = demos[componentId];
  const snippet = getImportSnippet(componentId, componentName);

  return (
    <div style={{ background: '#141417', borderRadius: 12, border: '1px solid #2d2d35', marginBottom: 32, overflow: 'hidden' }}>
      <div style={{ background: '#1a1a1f', borderBottom: '1px solid #2d2d35', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ display: 'flex', gap: 6 }}>
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e' }} />
          <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }} />
        </div>
        <div style={{ display: 'flex', gap: 2, marginLeft: 8 }}>
          {(['preview', 'code'] as const).map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: '4px 12px', borderRadius: 6, border: 'none', cursor: 'pointer',
                fontSize: 13, fontWeight: 500, textTransform: 'capitalize',
                background: tab === t ? '#2d2d35' : 'none',
                color: tab === t ? '#f9fafb' : '#6b7280',
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      <div style={{ padding: 32, minHeight: 200, display: 'flex', alignItems: 'center', justifyContent: tab === 'preview' ? 'center' : 'flex-start' }}>
        {tab === 'preview' ? (
          DemoComponent ? <DemoComponent /> : (
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 64, marginBottom: 12 }}>{emoji}</div>
              <p style={{ color: '#6b7280', fontSize: 14 }}>Interactive demo for {componentName}</p>
            </div>
          )
        ) : (
          <pre style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 13, lineHeight: 1.7,
            color: '#abb2bf', margin: 0, overflowX: 'auto', width: '100%',
          }}>
            {syntaxHighlight(snippet)}
          </pre>
        )}
      </div>
    </div>
  );
}
