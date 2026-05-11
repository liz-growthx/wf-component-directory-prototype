'use client';
import Link from 'next/link';

export default function Topbar() {
  return (
    <header
      style={{ height: 56, background: '#0e0e10', borderBottom: '1px solid #1f1f23' }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center px-5 gap-3"
    >
      <Link href="/components" className="flex items-center gap-2 flex-shrink-0" style={{ textDecoration: 'none' }}>
        <div
          style={{ background: '#4353FF', borderRadius: 6, width: 28, height: 28 }}
          className="flex items-center justify-center"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M11.5 4L8.5 12L6.5 7.5L4.5 9.5L2 4H4.5L6.5 8L8.5 4H11.5Z" fill="white"/>
          </svg>
        </div>
        <span style={{ color: '#ffffff', fontSize: 14, fontWeight: 600 }}>Developers</span>
      </Link>
      <span style={{ color: '#3f3f46', fontSize: 16 }}>/</span>
      <Link href="/components" style={{ color: '#a0a0b0', fontSize: 14, textDecoration: 'none' }}>
        Code Components
      </Link>
      <div className="flex-1" />
      <button
        style={{
          background: '#1f1f23', border: '1px solid #3f3f46', borderRadius: 8,
          color: '#9ca3af', fontSize: 13,
          display: 'flex', alignItems: 'center', gap: 8, padding: '6px 12px', cursor: 'pointer',
        }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <circle cx="6" cy="6" r="4.5" stroke="#6b7280" strokeWidth="1.5"/>
          <path d="M9.5 9.5L12 12" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <span>Search components…</span>
        <span style={{ background: '#374151', borderRadius: 4, padding: '1px 5px', fontSize: 11, color: '#9ca3af', fontFamily: 'ui-monospace, SFMono-Regular, monospace' }}>⌘K</span>
      </button>
    </header>
  );
}
