export function StarBurst({ size = 90, color = 'var(--yellow)', style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={style}>
      <g fill={color} stroke="var(--royal)" strokeWidth="3" strokeLinejoin="round">
        <path d="M50 5 L60 35 L92 38 L66 58 L76 90 L50 72 L24 90 L34 58 L8 38 L40 35 Z"/>
      </g>
    </svg>
  );
}

export function Heart({ size = 60, color = 'var(--coral)', style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={style}>
      <path
        d="M12 21s-7-4.35-7-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.65-7 10-7 10z"
        fill={color}
        stroke="var(--royal-ink)"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CloudBlob({ size = 200, color = '#fff', style }) {
  return (
    <svg width={size} height={size * .65} viewBox="0 0 200 130" style={style}>
      <path
        d="M40 90 Q 10 90 12 65 Q 8 40 38 38 Q 42 12 78 18 Q 96 -2 124 18 Q 158 8 168 38 Q 198 38 196 70 Q 200 100 168 100 Q 150 122 124 108 Q 96 122 78 108 Q 56 116 40 90 Z"
        fill={color}
        stroke="var(--royal)"
        strokeWidth="2.5"
        opacity=".95"
      />
    </svg>
  );
}

export function ArrowRight({ style }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={style}>
      <path d="M5 12h14M13 5l7 7-7 7"/>
    </svg>
  );
}

export function ExternalLink({ style }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={style}>
      <path d="M7 17L17 7M9 7h8v8"/>
    </svg>
  );
}

export function WhatsAppIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.5 3.5A11 11 0 0 0 3.6 17l-1.5 5.5 5.6-1.5a11 11 0 0 0 16.6-9.5 10.9 10.9 0 0 0-3.8-8zM12 20.4a9.4 9.4 0 0 1-4.8-1.3l-.3-.2-3.3.9.9-3.2-.2-.4A9.4 9.4 0 1 1 12 20.4zm5.4-7.1c-.3-.1-1.7-.8-2-.9s-.5-.1-.7.1-.8 1-1 1.2-.4.2-.7.1c-1.6-.8-2.7-1.4-3.8-3.3-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5l-.9-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1 2.9 1.2 3.1c.1.2 2.1 3.2 5 4.5 1.8.8 2.5.8 3.3.7.5 0 1.6-.7 1.9-1.3.2-.6.2-1.2.1-1.3-.1-.1-.3-.2-.6-.3z"/>
    </svg>
  );
}
