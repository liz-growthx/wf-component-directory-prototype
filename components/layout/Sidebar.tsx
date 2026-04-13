'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { categories } from '@/lib/components-data';

export default function Sidebar() {
  const pathname = usePathname();

  const isActive = (slug?: string) => {
    if (!slug) return pathname === '/components';
    return pathname.startsWith(`/components/${slug}`);
  };

  return (
    <nav
      style={{
        width: 260,
        background: '#0e0e10',
        borderRight: '1px solid #1f1f23',
        position: 'fixed',
        top: 56,
        bottom: 0,
        left: 0,
        overflowY: 'auto',
        zIndex: 40,
      }}
    >
      <div className="p-4">
        {/* All Components */}
        <Link
          href="/components"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '6px 10px',
            borderRadius: 6,
            fontSize: 14,
            fontWeight: 500,
            textDecoration: 'none',
            color: isActive() ? '#fff' : '#a0a0b0',
            background: isActive() ? 'rgba(67,83,255,0.12)' : 'transparent',
            borderLeft: isActive() ? '2px solid #4353FF' : '2px solid transparent',
            marginBottom: 2,
          }}
        >
          <span>All Components</span>
          <span style={{
            background: '#1f1f23',
            color: '#6b7280',
            borderRadius: 10,
            fontSize: 11,
            padding: '1px 7px',
          }}>25</span>
        </Link>

        {/* Categories */}
        <div style={{ marginTop: 8, marginBottom: 16 }}>
          {Object.values(categories).map(cat => {
            const active = isActive(cat.slug);
            return (
              <Link
                key={cat.slug}
                href={`/components/${cat.slug}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '6px 10px',
                  borderRadius: 6,
                  fontSize: 13,
                  textDecoration: 'none',
                  color: active ? '#fff' : '#a0a0b0',
                  background: active ? 'rgba(67,83,255,0.12)' : 'transparent',
                  borderLeft: active ? '2px solid #4353FF' : '2px solid transparent',
                  marginBottom: 2,
                }}
              >
                <span>{cat.emoji} {cat.name}</span>
                <span style={{
                  background: '#1f1f23',
                  color: '#6b7280',
                  borderRadius: 10,
                  fontSize: 11,
                  padding: '1px 7px',
                }}>{cat.components.length}</span>
              </Link>
            );
          })}
        </div>

        {/* Resources */}
        <div style={{ borderTop: '1px solid #1f1f23', paddingTop: 16 }}>
          <p style={{ color: '#3f3f46', fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8, padding: '0 10px' }}>Resources</p>
          {['Documentation', 'GitHub Repository', 'CLI Reference', 'Changelog'].map(item => (
            <Link
              key={item}
              href="#"
              style={{
                display: 'block',
                padding: '5px 10px',
                fontSize: 13,
                color: '#a0a0b0',
                textDecoration: 'none',
                borderRadius: 6,
                marginBottom: 2,
              }}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
