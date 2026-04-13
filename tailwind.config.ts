import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4353FF',
        'primary-light': '#EEF0FF',
        'primary-hover': '#3344DD',
        'sidebar-bg': '#0e0e10',
        'sidebar-text': '#a0a0b0',
        border: '#e5e7eb',
        'text-primary': '#111827',
        'text-secondary': '#6b7280',
        'text-muted': '#9ca3af',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
      },
      width: {
        sidebar: '260px',
      },
      height: {
        topbar: '56px',
      },
    },
  },
  plugins: [],
}
export default config
