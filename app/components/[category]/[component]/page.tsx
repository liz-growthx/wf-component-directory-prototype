import { notFound } from 'next/navigation';
import Topbar from '@/components/layout/Topbar';
import Sidebar from '@/components/layout/Sidebar';
import DetailHero from '@/components/detail/DetailHero';
import DemoArea from '@/components/detail/DemoArea';
import InstallBlock from '@/components/detail/InstallBlock';
import PropsTable from '@/components/detail/PropsTable';
import A11yNote from '@/components/detail/A11yNote';
import ZoneCard from '@/components/detail/ZoneCard';
import { getCategoryBySlug, getComponentById, getEcosystem, getProps } from '@/lib/components-data';
import Link from 'next/link';

interface Props {
  params: { category: string; component: string };
}

export default function ComponentDetailPage({ params }: Props) {
  const category = getCategoryBySlug(params.category);
  const component = getComponentById(params.category, params.component);
  if (!category || !component) notFound();

  const ecosystem = getEcosystem(component.id);
  const props = getProps(component.id);

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
            <Link href={`/components/${params.category}`} style={{ color: '#4353FF', textDecoration: 'none' }}>{category.name}</Link>
            <span>/</span>
            <span style={{ color: '#6b7280' }}>{component.name}</span>
          </div>

          <DetailHero component={component} categoryName={category.name} />
          <DemoArea componentId={component.id} componentName={component.name} emoji={component.emoji} />

          {/* 2-col layout */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 40, alignItems: 'start' }}>
            {/* Left */}
            <div>
              <InstallBlock componentId={component.id} />
              <PropsTable props={props} />
              <A11yNote />
            </div>

            {/* Right sidebar */}
            <div>
              <ZoneCard type="buildWith" buildWith={ecosystem.buildWith} />
              <ZoneCard type="worksWith" worksWith={ecosystem.worksWith} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const { categories } = await import('@/lib/components-data');
  const params = [];
  for (const [catSlug, cat] of Object.entries(categories)) {
    for (const comp of cat.components) {
      params.push({ category: catSlug, component: comp.id });
    }
  }
  return params;
}
