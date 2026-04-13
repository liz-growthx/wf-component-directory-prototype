import Topbar from '@/components/layout/Topbar';
import Sidebar from '@/components/layout/Sidebar';
import ComponentIndex from '@/components/directory/ComponentIndex';

export default function DirectoryPage() {
  return (
    <div style={{ background: '#fff' }}>
      <Topbar />
      <div style={{ display: 'flex', paddingTop: 56 }}>
        <Sidebar />
        <main style={{ marginLeft: 260, flex: 1, padding: '40px 48px', minHeight: 'calc(100vh - 56px)' }}>
          {/* Header */}
          <div style={{ marginBottom: 40 }}>
            <h1 style={{ fontSize: 36, fontWeight: 800, color: '#111827', margin: '0 0 8px' }}>
              Code Component Library
            </h1>
            <p style={{ fontSize: 16, color: '#6b7280', marginBottom: 20 }}>
              25 production-ready React components for Webflow developers. Browse by category or search by use case.
            </p>
            {/* Meta pills */}
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {[
                { label: '25 components', color: '#EEF0FF', text: '#4353FF' },
                { label: '4 categories', color: '#f3f4f6', text: '#6b7280' },
                { label: 'React + TypeScript', color: '#f3f4f6', text: '#6b7280' },
                { label: 'WCAG 2.1 AA', color: '#DCFCE7', text: '#14532D' },
              ].map(p => (
                <span key={p.label} style={{
                  background: p.color, color: p.text,
                  borderRadius: 20, padding: '4px 12px', fontSize: 13, fontWeight: 500,
                }}>{p.label}</span>
              ))}
            </div>
          </div>

          {/* Search bar */}
          <div style={{ marginBottom: 40 }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10,
              border: '1px solid #e5e7eb', borderRadius: 10,
              padding: '10px 16px', background: '#f9fafb', maxWidth: 480,
            }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="7" cy="7" r="5" stroke="#9ca3af" strokeWidth="1.5"/>
                <path d="M11 11L14 14" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span style={{ fontSize: 14, color: '#9ca3af' }}>Search components by name or use case…</span>
            </div>
          </div>

          <ComponentIndex />
        </main>
      </div>
    </div>
  );
}
