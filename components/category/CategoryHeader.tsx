import { Category } from '@/lib/components-data';

interface Props {
  category: Category;
}

export default function CategoryHeader({ category }: Props) {
  return (
    <div style={{ marginBottom: 32 }}>
      <div className="flex items-center gap-3 mb-3">
        <div style={{
          width: 48, height: 48, borderRadius: 10,
          background: 'linear-gradient(135deg, #EEF0FF 0%, #dde0ff 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 24,
        }}>
          {category.emoji}
        </div>
        <div>
          <h1 style={{ fontSize: 28, fontWeight: 800, color: '#111827', margin: 0 }}>{category.name}</h1>
          <p style={{ fontSize: 14, color: '#6b7280', margin: 0 }}>{category.desc}</p>
        </div>
      </div>
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        background: '#f9fafb', border: '1px solid #e5e7eb',
        borderRadius: 20, padding: '4px 12px', fontSize: 13, color: '#6b7280',
      }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4353FF', display: 'inline-block' }} />
        {category.components.length} components
      </div>
    </div>
  );
}
