import React from 'react';
import { StarBurst, Heart, CloudBlob } from '../Decorations';
import { ArrowRight } from '../Decorations';

export function HeroBadges() {
  const items = [
    { label: '300+ Activities', icon: '✨', bg: 'var(--yellow)', fg: 'var(--royal-ink)' },
    { label: 'Ages 5–8', icon: '🎈', bg: '#fff', fg: 'var(--royal)' },
    { label: 'Screen-Free', icon: '📚', bg: 'var(--green)', fg: '#fff' },
    { label: 'Perfect Gift', icon: '🎁', bg: 'var(--coral)', fg: '#fff' },
  ];
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 24 }}>
      {items.map(b => (
        <span key={b.label} className="sticker" style={{
          background: b.bg,
          color: b.fg,
          borderColor: b.bg === '#fff' ? 'var(--royal)' : 'var(--royal-ink)',
        }}>
          <span style={{ fontSize: 16 }}>{b.icon}</span>{b.label}
        </span>
      ))}
    </div>
  );
}

export function HeroCTAs({ onShop, onExplore }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginTop: 26 }}>
      <button className="btn btn-primary" onClick={onShop}>
        Shop the Box · ₹1,099
        <ArrowRight />
      </button>
      <button className="btn btn-secondary" onClick={onExplore}>
        Explore the 5 Books
      </button>
    </div>
  );
}

export { StarBurst, Heart, CloudBlob };
