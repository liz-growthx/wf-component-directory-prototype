interface Prop {
  name: string;
  type: string;
  default: string;
  desc: string;
}

interface Props {
  props: Prop[];
}

export default function PropsTable({ props }: Props) {
  return (
    <div style={{ marginBottom: 24 }}>
      <h3 style={{ fontSize: 14, fontWeight: 700, color: '#111827', marginBottom: 10 }}>Props</h3>
      <div style={{ border: '1px solid #e5e7eb', borderRadius: 8, overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr style={{ background: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
              {['Prop', 'Type', 'Default', 'Description'].map(h => (
                <th key={h} style={{ textAlign: 'left', padding: '8px 12px', fontWeight: 600, color: '#374151', fontSize: 12 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.map((p, i) => (
              <tr key={p.name} style={{ borderBottom: i < props.length - 1 ? '1px solid #e5e7eb' : 'none' }}>
                <td style={{ padding: '8px 12px' }}>
                  <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#4353FF', background: '#EEF0FF', borderRadius: 4, padding: '1px 5px' }}>{p.name}</code>
                </td>
                <td style={{ padding: '8px 12px' }}>
                  <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#6b7280' }}>{p.type}</code>
                </td>
                <td style={{ padding: '8px 12px' }}>
                  <code style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: '#9ca3af' }}>{p.default}</code>
                </td>
                <td style={{ padding: '8px 12px', color: '#6b7280' }}>{p.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
