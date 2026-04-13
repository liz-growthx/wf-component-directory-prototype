import { notFound } from 'next/navigation';
import Topbar from '@/components/layout/Topbar';
import Sidebar from '@/components/layout/Sidebar';
import CategoryHeader from '@/components/category/CategoryHeader';
import ComponentCard from '@/components/category/ComponentCard';
import RelatedSidebar from '@/components/category/RelatedSidebar';
import { getCategoryBySlug, getRelatedComponents } from '@/lib/components-data';
import Link from 'next/link';

interface Props {
  params: { category: string };
}

export default function CategoryPage({ params }: Props) {
  const category = getCategoryBySlug(params.category);
  if (!category) notFound();

  const related = getRelatedComponents(params.category);

  return (
    <div style={{ background: '#fff' }}>
      <Topbar />
      <div style={{ display: 'flex', paddingTop: 56 }}>
        <Sidebar />
        <main style={{ marginLeft: 260, flex: 1, padding: '40px 48px', minHeight: 'calc(100vh - 56px)' }}>
          {/* Breadcrumb */}
          <div style={{ fontSize: 13, color: '#9ca3af', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 6 }}>
            <Link href="/components" style={{ color: '#4353FF', textDecoration: 'none' }}>Code Components</Link>
            <span>/</span>
            <span style={{ color: '#6b7280' }}>{category.name}</span>
          </div>

          <CategoryHeader category={category} />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 240px', gap: 40, alignItems: 'start' }}>
            {/* Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              {category.components.map(comp => (
                <ComponentCard key={comp.id} component={comp} categorySlug={params.category} />
              ))}
            </div>

            {/* Related sidebar */}
            <RelatedSidebar components={related} />
          </div>
        </main>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { category: 'layout' },
    { category: 'forms' },
    { category: 'data' },
    { category: 'feedback' },
  ];
}
