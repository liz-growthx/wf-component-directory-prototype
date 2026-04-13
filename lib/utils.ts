export function slugify(str: string): string {
  return str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
}

export function icpColor(icp: string): { bg: string; text: string } {
  switch (icp) {
    case 'Builder': return { bg: '#FEF3C7', text: '#92400E' };
    case 'Developer': return { bg: '#DCFCE7', text: '#14532D' };
    case 'Designer': return { bg: '#FDF4FF', text: '#7E22CE' };
    default: return { bg: '#F3F4F6', text: '#6B7280' };
  }
}

export function tierColor(tier: string): { bg: string; text: string } {
  return tier === 'T1'
    ? { bg: '#EEF0FF', text: '#4353FF' }
    : { bg: '#F3F4F6', text: '#6B7280' };
}
