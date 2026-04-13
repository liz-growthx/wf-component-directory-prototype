'use client';
import { useState } from 'react';

export default function Topbar() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header
      style={{ height: 56, background: '#0e0e10', borderBottom: '1px solid #1f1f23' }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center px-4 gap-3"
    >
      {/* Webflow Logo */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <div
          style={{ background: '#4353FF', borderRadius: 6, width: 28, height: 28 }}
          className="flex items-center justify-center"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M11.5 4L8.5 12L6.5 7.5L4.5 9.5L2 4H4.5L6.5 8L8.5 4H11.5Z" fill="white"/>
          </svg>
        </div>
        <span style={{ color: '#ffffff', fontSize: 14, fontWeight: 500 }}>Developers</span>
      </div>

      <div style={{ color: '#3f3f46', fontSize: 18, lineHeight: 1 }}>{'/'}</div>

      <span style={{ color: '#a0a0b0', fontSize: 14 }}>Code Components</span>

      <div
        style={{ background: '#4353FF', color: '#fff', fontSize: 10, fontWeight: 700, letterSpacing: '0.05em', borderRadius: 4, padding: '2px 6px' }}
        className="uppercase"
      >
        MOCKUP
      </div>

      <div className="flex-1" />

      {/* Search */}
      <button
        onClick={() => setSearchOpen(!searchOpen)}
        style={{
          background: '#1f1f23',
          border: '1px solid #3f3f46',
          borderRadius: 8,
          color: '#6b7280',
          fontSize: 13,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '6px 12px',
          cursor: 'pointer',
        }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <circle cx="6" cy="6" r="4.5" stroke="#6b7280" strokeWidth="1.5"/>
          <path d="M9.5 9.5L12 12" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <span>Search components…</span>
        <span style={{ background: '#374151', borderRadius: 4, padding: '1px 5px', fontSize: 11, color: '#9ca3af', fontFamily: 'monospace' }}>⌘K</span>
      </button>
    </header>
  );
}
