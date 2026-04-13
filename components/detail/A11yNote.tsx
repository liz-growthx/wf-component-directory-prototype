export default function A11yNote() {
  return (
    <div style={{
      background: '#fffbeb', border: '1px solid #fde68a',
      borderRadius: 8, padding: '12px 16px',
      display: 'flex', gap: 10, alignItems: 'flex-start',
    }}>
      <span style={{ fontSize: 16, flexShrink: 0 }}>♿</span>
      <div>
        <div style={{ fontSize: 13, fontWeight: 600, color: '#92400e', marginBottom: 4 }}>Accessibility</div>
        <p style={{ fontSize: 13, color: '#78350f', margin: 0, lineHeight: 1.5 }}>
          This component follows WCAG 2.1 AA guidelines. It supports keyboard navigation,
          screen readers via ARIA attributes, and maintains a minimum 4.5:1 color contrast ratio.
        </p>
      </div>
    </div>
  );
}
