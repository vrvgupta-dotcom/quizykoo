import React from 'react';

const items = [
  '📦 FREE Shipping in India',
  '💳 COD Available',
  '⭐ 2,400+ Happy Parents',
  '🎁 Perfect Birthday Gift',
  '🇮🇳 Made for Indian Kids',
  '📚 Screen-Free Learning',
];

export default function Marquee() {
  return (
    <div style={{
      background: 'var(--royal)',
      color: '#fff',
      overflow: 'hidden',
      padding: '12px 0',
      borderTop: '3px solid var(--yellow)',
      borderBottom: '3px solid var(--yellow)',
    }}>
      <div style={{
        display: 'flex',
        gap: 50,
        animation: 'marq 30s linear infinite',
        fontFamily: 'var(--ff-head)',
        fontWeight: 600,
        fontSize: 16,
        whiteSpace: 'nowrap',
        width: 'max-content',
      }}>
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
    </div>
  );
}
