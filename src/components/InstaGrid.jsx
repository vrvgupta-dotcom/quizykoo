import React from 'react';

const tiles = [
  { src: 'assets/book-manners.jpg', tag: '#manners' },
  { src: 'assets/book-sharing.jpg', tag: '#sharing' },
  { src: 'assets/social-skills-box.jpg', tag: '#newbox' },
  { src: 'assets/book-friendship.jpg', tag: '#teamwork' },
  { src: 'assets/book-listening.jpg', tag: '#listen' },
  { src: 'assets/book-respect.jpg', tag: '#kindness' },
];

export default function InstaGrid() {
  return (
    <section style={{ padding: '110px 0', background: '#FFFDF7', position: 'relative' }}>
      <div className="wrap" style={{ textAlign: 'center' }}>
        <span className="sticker purple">📸 @quizykoo on Instagram</span>
        <h2 className="display" style={{ fontSize: 'clamp(36px, 4.6vw, 58px)', margin: '14px auto 12px', maxWidth: 900 }}>
          Tag us. Get <span className="coral">featured</span>.
        </h2>
        <p style={{ fontSize: 17, color: 'var(--ink-2)', maxWidth: 600, margin: '0 auto 40px', fontWeight: 500 }}>
          We love seeing Quizykoo in your home. Share your moments with #QuizykooKids.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 14,
        }}>
          {tiles.map((t, i) => (
            <a
              key={i}
              href="#"
              style={{
                position: 'relative',
                display: 'block',
                aspectRatio: '1/1',
                overflow: 'hidden',
                borderRadius: 'var(--rad-md)',
                border: '4px solid var(--royal)',
                boxShadow: '0 6px 0 var(--royal)',
                transition: 'transform .25s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = `rotate(${i % 2 ? -2 : 2}deg) translateY(-4px)`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'rotate(0) translateY(0)'; }}
            >
              <img src={t.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
              <span style={{
                position: 'absolute',
                bottom: 8,
                left: 8,
                background: '#fff',
                border: '2px solid var(--royal)',
                fontFamily: 'var(--ff-head)',
                fontWeight: 700,
                fontSize: 12,
                padding: '4px 10px',
                borderRadius: 999,
                color: 'var(--royal)',
              }}>{t.tag}</span>
            </a>
          ))}
        </div>
        <div style={{ marginTop: 28 }}>
          <a href="#" className="btn btn-secondary">Follow @quizykoo</a>
        </div>
      </div>
    </section>
  );
}
