import React from 'react';

export default function Nav({ cartCount, onOpenCart }) {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(255,253,247,.85)',
      backdropFilter: 'blur(14px) saturate(140%)',
      WebkitBackdropFilter: 'blur(14px) saturate(140%)',
      borderBottom: '2px solid rgba(14,33,103,.06)',
    }}>
      <div className="wrap" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 28px',
      }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src="/assets/quizykoo-logo.png" alt="Quizykoo" style={{ height: 56 }} />
        </a>
        <nav style={{ display: 'flex', gap: 28, alignItems: 'center' }} className="nav-links">
          {['Shop', 'The 5 Books', 'How It Works', 'Reviews', 'About'].map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/\s+/g, '-')}`}
              style={{
                color: 'var(--ink)',
                textDecoration: 'none',
                fontFamily: 'var(--ff-head)',
                fontWeight: 600,
                fontSize: 15,
              }}
            >
              {l}
            </a>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button
            onClick={onOpenCart}
            style={{
              position: 'relative',
              width: 46,
              height: 46,
              borderRadius: '50%',
              background: 'var(--yellow)',
              border: '3px solid var(--royal)',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 3px 0 rgba(14,33,103,.3)',
            }}
            aria-label="Cart"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--royal)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3h2l2.4 12.5a2 2 0 0 0 2 1.5h7.7a2 2 0 0 0 2-1.6L21 8H6"/>
              <circle cx="9" cy="21" r="1.5"/><circle cx="18" cy="21" r="1.5"/>
            </svg>
            {cartCount > 0 && (
              <span style={{
                position: 'absolute',
                top: -6,
                right: -6,
                minWidth: 22,
                height: 22,
                background: 'var(--coral)',
                color: '#fff',
                borderRadius: 999,
                border: '2px solid #fff',
                fontFamily: 'var(--ff-head)',
                fontWeight: 700,
                fontSize: 12,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 6px',
              }}>
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) { .nav-links { display: none !important; } }
      `}</style>
    </header>
  );
}
