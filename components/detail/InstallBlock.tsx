'use client';
import { useState } from 'react';

interface Props {
  componentId: string;
}

export default function InstallBlock({ componentId }: Props) {
  const [copied, setCopied] = useState(false);
  const cmd = `npx webflow-cli add ${componentId}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ marginBottom: 24 }}>
      <h3 style={{ fontSize: 14, fontWeight: 700, color: '#111827', marginBottom: 10 }}>Installation</h3>
      <div style={{
        background: '#0e0e10', borderRadius: 8, padding: '12px 16px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        border: '1px solid #2d2d35',
      }}>
        <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: '#98c379' }}>
          {cmd}
        </code>
        <button
          onClick={handleCopy}
          style={{
            background: copied ? '#14532D' : '#1f1f23',
            border: '1px solid #3f3f46', borderRadius: 6,
            color: copied ? '#86efac' : '#9ca3af',
            fontSize: 12, padding: '4px 10px', cursor: 'pointer',
            flexShrink: 0, marginLeft: 12,
          }}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
}
