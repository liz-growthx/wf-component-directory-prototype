export const categories: Record<string, Category> = {
  layout: {
    name: 'Layout & Navigation', emoji: '📁', slug: 'layout',
    desc: 'Components for organizing content and helping users move through your site.',
    components: [
      { id: 'accordion', airtableKey: 'accordion', name: 'Accordion', tier: 'T1', jtbd: 10, icp: ['Builder', 'Designer'], emoji: '📂', desc: 'Collapsible content sections for FAQs, menus, and information hierarchy.' },
      { id: 'tabs', airtableKey: 'tabs', name: 'Tabs', tier: 'T1', jtbd: 3, icp: ['Builder'], emoji: '📑', desc: 'Switch between grouped content panels without leaving the page.' },
      { id: 'dropdown-menu', airtableKey: 'dropdown_menu', name: 'Dropdown Menu', tier: 'T1', jtbd: 4, icp: ['Builder'], emoji: '⬇️', desc: 'Contextual menus triggered by interaction, ideal for navigation and actions.' },
      { id: 'breadcrumb', airtableKey: 'breadcrumb', name: 'Breadcrumb', tier: 'T2', jtbd: 3, icp: ['Builder'], emoji: '🔗', desc: 'Show users their location within a site hierarchy.' },
      { id: 'hero-section', airtableKey: 'hero_section', name: 'Hero Section', tier: 'T2', jtbd: 3, icp: ['Designer'], emoji: '🖼️', desc: 'Full-width introductory sections with headline, body, and CTA.' },
      { id: 'infinite-scroll', airtableKey: 'infinite_scroll', name: 'Infinite Scroll', tier: 'T2', jtbd: 3, icp: ['Builder'], emoji: '♾️', desc: 'Automatically load more content as the user scrolls to the bottom.' },
      { id: 'scroll-to-top', airtableKey: 'scroll_to_top', name: 'Scroll-to-Top', tier: 'T2', jtbd: 3, icp: ['Builder'], emoji: '⬆️', desc: 'Floating button that returns users to the top of long pages.' },
      { id: 'command-palette', airtableKey: 'command_palette', name: 'Command Palette', tier: 'T2', jtbd: 3, icp: ['Developer'], emoji: '⌨️', desc: 'Keyboard-first navigation overlay for power users and developer tools.' },
    ]
  },
  forms: {
    name: 'Forms & Input', emoji: '📝', slug: 'forms',
    desc: 'Capture data, accept bookings, and build interactive tools for your users.',
    components: [
      { id: 'date-picker', airtableKey: 'date_picker', name: 'Date Picker', tier: 'T1', jtbd: 16, icp: ['Builder'], emoji: '📅', desc: 'Accessible date selection for booking forms, event registration, and scheduling.' },
      { id: 'multi-step-form', airtableKey: 'multi_step_form', name: 'Multi-Step Form', tier: 'T1', jtbd: 5, icp: ['Builder'], emoji: '📋', desc: 'Break long forms into guided steps to improve completion rates.' },
      { id: 'pricing-calculator', airtableKey: 'pricing_calculator', name: 'Pricing Calculator', tier: 'T1', jtbd: 6, icp: ['Builder'], emoji: '🧮', desc: 'Interactive calculators for pricing, quotes, and ROI estimation.' },
      { id: 'file-upload', airtableKey: 'file_upload', name: 'File Upload', tier: 'T2', jtbd: 3, icp: ['Builder'], emoji: '📤', desc: 'Drag-and-drop file upload with progress feedback and validation.' },
      { id: 'star-rating', airtableKey: 'star_rating', name: 'Star Rating', tier: 'T2', jtbd: 3, icp: ['Builder'], emoji: '⭐', desc: 'Collect ratings and reviews from users with interactive star inputs.' },
      { id: 'toggle-switch', airtableKey: 'toggle_switch', name: 'Toggle / Switch', tier: 'T2', jtbd: 3, icp: ['Builder'], emoji: '🔘', desc: 'Binary on/off controls for settings, preferences, and feature flags.' },
    ]
  },
  data: {
    name: 'Data & Media', emoji: '📊', slug: 'data',
    desc: 'Display, visualize, and showcase content from your CMS or external data sources.',
    components: [
      { id: 'data-table', airtableKey: 'data_table', name: 'Data Table', tier: 'T1', jtbd: 14, icp: ['Builder', 'Developer'], emoji: '🗃️', desc: 'Sortable, filterable tables for displaying CMS data, pricing, or records.' },
      { id: 'carousel-slider', airtableKey: 'carousel', name: 'Carousel / Slider', tier: 'T1', jtbd: 12, icp: ['Builder', 'Designer'], emoji: '🎠', desc: 'Auto-playing or manually navigated content carousels for galleries and testimonials.' },
      { id: 'badge-tag', airtableKey: 'badge', name: 'Badge / Tag', tier: 'T1', jtbd: 4, icp: ['Builder'], emoji: '🏷️', desc: 'Compact labels for status, categories, and contextual metadata.' },
      { id: 'chart-graph', airtableKey: 'chart', name: 'Chart / Graph', tier: 'T2', jtbd: 19, icp: ['Builder'], emoji: '📈', desc: 'Interactive charts and graphs for data visualization from any source.' },
      { id: 'lightbox', airtableKey: 'lightbox', name: 'Lightbox', tier: 'T2', jtbd: 4, icp: ['Builder'], emoji: '🔍', desc: 'Full-screen image and video viewer with navigation and zoom.' },
      { id: 'progress-bar', airtableKey: 'progress_bar', name: 'Progress Bar', tier: 'T2', jtbd: 3, icp: ['Designer'], emoji: '⏳', desc: 'Visual progress indicators for onboarding flows, goals, and loading states.' },
    ]
  },
  feedback: {
    name: 'Feedback & Overlays', emoji: '💬', slug: 'feedback',
    desc: 'Show contextual information, confirmations, and urgency signals to your users.',
    components: [
      { id: 'modal-dialog', airtableKey: 'modal', name: 'Modal / Dialog', tier: 'T1', jtbd: 28, icp: ['Builder'], emoji: '🪟', desc: 'Focused overlay dialogs for confirmations, lead capture, and video lightboxes.' },
      { id: 'tooltip', airtableKey: 'tooltip', name: 'Tooltip', tier: 'T1', jtbd: 3, icp: ['Builder'], emoji: '💡', desc: 'Hover-triggered contextual hints for icons, buttons, and form fields.' },
      { id: 'alert-toast', airtableKey: 'alert_toast', name: 'Alert / Toast', tier: 'T2', jtbd: 4, icp: ['Developer'], emoji: '🔔', desc: 'Non-blocking notification messages for success, error, and info states.' },
      { id: 'popover', airtableKey: 'popover', name: 'Popover', tier: 'T2', jtbd: 3, icp: ['Builder'], emoji: '💭', desc: 'Floating content containers triggered by click, for menus and rich tooltips.' },
      { id: 'countdown-timer', airtableKey: 'countdown', name: 'Countdown Timer', tier: 'T2', jtbd: 3, icp: ['Builder', 'Designer'], emoji: '⏱️', desc: 'Create urgency with live countdown timers for sales, events, and launches.' },
    ]
  }
};

export interface Component {
  id: string;
  airtableKey: string;
  name: string;
  tier: 'T1' | 'T2';
  jtbd: number;
  icp: string[];
  emoji: string;
  desc: string;
}

export interface Category {
  name: string;
  emoji: string;
  slug: string;
  desc: string;
  components: Component[];
}

export const componentEcosystem: Record<string, { buildWith: {title: string, topics: number}[], worksWith: {name: string, meta: string}[] }> = {
  'date-picker': {
    buildWith: [
      { title: 'How to Build a Booking Form', topics: 16 },
      { title: 'How to Add Event Registration', topics: 8 },
      { title: 'How to Build a Consultation Scheduler', topics: 5 },
    ],
    worksWith: [
      { name: 'Calendly', meta: 'Scheduling integration' },
      { name: 'Acuity Scheduling', meta: 'Appointment booking' },
      { name: 'Cal.com', meta: 'Open-source scheduling' },
    ]
  },
  'modal-dialog': {
    buildWith: [
      { title: 'How to Build a Lead Capture Modal', topics: 28 },
      { title: 'How to Create a Video Lightbox', topics: 12 },
      { title: 'How to Add Confirmation Dialogs', topics: 6 },
    ],
    worksWith: [
      { name: 'Typeform', meta: 'Embedded forms in modal' },
      { name: 'HubSpot', meta: 'Lead capture' },
      { name: 'Vimeo', meta: 'Video lightbox' },
    ]
  },
  'data-table': {
    buildWith: [
      { title: 'How to Display CMS Data in a Sortable Table', topics: 14 },
      { title: 'How to Build a Pricing Comparison Page', topics: 9 },
      { title: 'Integrating Airtable Data into Webflow', topics: 7 },
    ],
    worksWith: [
      { name: 'Airtable', meta: 'Database sync' },
      { name: 'Google Sheets', meta: 'Spreadsheet data' },
      { name: 'Xano', meta: 'No-code backend' },
    ]
  },
  'accordion': {
    buildWith: [
      { title: 'How to Build an FAQ Section', topics: 10 },
      { title: 'How to Create an Expandable Navigation', topics: 6 },
      { title: 'Building a Knowledge Base with Webflow', topics: 4 },
    ],
    worksWith: [
      { name: 'Webflow CMS', meta: 'Dynamic FAQ content' },
      { name: 'Contentful', meta: 'Headless CMS' },
    ]
  },
  '_default': {
    buildWith: [
      { title: 'Getting Started with Webflow Code Components', topics: 5 },
      { title: 'How to Customize Component Styles', topics: 3 },
    ],
    worksWith: [
      { name: 'Webflow CMS', meta: 'Native integration' },
      { name: 'Webflow Logic', meta: 'Workflow automation' },
    ]
  }
};

export const componentProps: Record<string, {name: string, type: string, default: string, desc: string}[]> = {
  'date-picker': [
    { name: 'value', type: 'Date | null', default: 'null', desc: 'Currently selected date' },
    { name: 'onChange', type: '(date: Date) => void', default: '—', desc: 'Callback when date is selected' },
    { name: 'minDate', type: 'Date', default: '—', desc: 'Minimum selectable date' },
    { name: 'maxDate', type: 'Date', default: '—', desc: 'Maximum selectable date' },
    { name: 'placeholder', type: 'string', default: '"Select date"', desc: 'Input placeholder text' },
  ],
  'modal-dialog': [
    { name: 'open', type: 'boolean', default: 'false', desc: 'Controls modal visibility' },
    { name: 'onClose', type: '() => void', default: '—', desc: 'Called when modal should close' },
    { name: 'title', type: 'string', default: '—', desc: 'Modal header title' },
    { name: 'size', type: '"sm" | "md" | "lg"', default: '"md"', desc: 'Controls modal width' },
  ],
  'accordion': [
    { name: 'items', type: 'AccordionItem[]', default: '[]', desc: 'Array of title/content objects' },
    { name: 'defaultOpen', type: 'number', default: '—', desc: 'Index of initially open item' },
    { name: 'allowMultiple', type: 'boolean', default: 'false', desc: 'Allow multiple open items' },
  ],
  'data-table': [
    { name: 'columns', type: 'ColumnDef[]', default: '[]', desc: 'Column definitions with key, header, render' },
    { name: 'data', type: 'object[]', default: '[]', desc: 'Array of row data objects' },
    { name: 'sortable', type: 'boolean', default: 'true', desc: 'Enable column sorting' },
    { name: 'searchable', type: 'boolean', default: 'false', desc: 'Show search input above table' },
    { name: 'pageSize', type: 'number', default: '10', desc: 'Rows per page' },
  ],
  '_default': [
    { name: 'className', type: 'string', default: '""', desc: 'Additional CSS class names' },
    { name: 'onInteract', type: '() => void', default: '—', desc: 'Callback on user interaction' },
    { name: 'disabled', type: 'boolean', default: 'false', desc: 'Disables the component' },
  ]
};

export function getCategoryBySlug(slug: string): Category | undefined {
  return Object.values(categories).find(c => c.slug === slug);
}

export function getComponentById(categorySlug: string, componentId: string): Component | undefined {
  const cat = getCategoryBySlug(categorySlug);
  return cat?.components.find(c => c.id === componentId);
}

export function getRelatedComponents(excludeCategorySlug: string, limit = 8): (Component & { categorySlug: string; categoryName: string })[] {
  const result: (Component & { categorySlug: string; categoryName: string })[] = [];
  for (const [slug, cat] of Object.entries(categories)) {
    if (slug === excludeCategorySlug) continue;
    for (const comp of cat.components) {
      result.push({ ...comp, categorySlug: slug, categoryName: cat.name });
    }
  }
  return result.sort((a, b) => b.jtbd - a.jtbd).slice(0, limit);
}

export function getEcosystem(componentId: string) {
  return componentEcosystem[componentId] ?? componentEcosystem['_default'];
}

export function getProps(componentId: string) {
  return componentProps[componentId] ?? componentProps['_default'];
}


// ============================================================================
// AIRTABLE JOIN LAYER
// ============================================================================
// Live data synced from Airtable via `node scripts/sync-airtable.mjs`.
// This is where the ecosystem flywheel becomes real:
//   • buildWith → JTBD articles with their actual webflow.com/blog URLs
//   • worksWith → integration pages with their webflow.com/integrations/[slug] URLs

import airtableData from './airtable-data.json';

export interface AirtableComponent {
  id: string;
  key: string;
  name: string;
  tier: 'T1' | 'T2' | null;
  status: string | null;
  showcaseReadiness: 'High' | 'Medium' | 'Low' | null;
  appGenCategory: string | null;
  appGenDemand: number;
  githubUrl: string | null;
  landingPageUrl: string | null;
  notes: string | null;
  buildWith: BuildWithItem[];
  worksWith: WorksWithItem[];
  buildWithCount: number;
  worksWithCount: number;
}

export interface BuildWithItem {
  id: string;
  title: string;
  url: string | null;
  status: string | null;
  tier: 'T1' | 'T2' | 'T3' | 'T4' | null;
  icp: string | null;
  intent: string | null;
  searchVolume: number;
}

export interface WorksWithItem {
  id: string;
  name: string;
  slug: string | null;
  url: string | null;
  tier: string | null;
  published: boolean;
  clicks: number;
  ctr: number;
  position: number | null;
}

const airtableByKey: Record<string, AirtableComponent> = {};
for (const c of airtableData as AirtableComponent[]) {
  if (c.key) airtableByKey[c.key] = c;
}

export function getAirtable(airtableKey: string): AirtableComponent | undefined {
  return airtableByKey[airtableKey];
}

export function getAirtableForComponent(component: Component): AirtableComponent | undefined {
  return airtableByKey[component.airtableKey];
}

export function getBuildWith(component: Component, limit = 5): BuildWithItem[] {
  const a = getAirtableForComponent(component);
  return (a?.buildWith ?? []).slice(0, limit);
}

export function getWorksWith(component: Component, limit = 8): WorksWithItem[] {
  const a = getAirtableForComponent(component);
  return (a?.worksWith ?? []).slice(0, limit);
}
