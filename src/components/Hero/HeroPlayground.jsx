import React, { useMemo } from 'react';
import { HeroBadges, HeroCTAs } from './shared';

const books = [
  { src: 'assets/book-manners.jpg', rot: -14, x: -340, y: 40, z: 1 },
  { src: 'assets/book-sharing.jpg', rot: -7, x: -180, y: 10, z: 2 },
  { src: 'assets/book-listening.jpg', rot: 0, x: 0, y: 0, z: 3 },
  { src: 'assets/book-friendship.jpg', rot: 7, x: 180, y: 10, z: 2 },
  { src: 'assets/book-respect.jpg', rot: 14, x: 340, y: 40, z: 1 },
];

function ConfettiBackdrop() {
  const pieces = useMemo(() => {
    const colors = ['var(--yellow)', 'var(--coral)', 'var(--green)', 'var(--purple)', 'var(--sky)'];
    const out = [];
    for (let i = 0; i < 40; i++) {
      const seed = i * 7919;
      const x = (seed * 13) % 100;
      const y = (seed * 17) % 100;
      const r = (seed * 31) % 360;
      const c = colors[i % colors.length];
      const size = 8 + ((seed * 5) % 14);
      out.push({ x, y, r, c, size, i });
    }
    return out;
  }, []);

  return (
    <>
      {pieces.map(p => (
        <div key={p.i} style={{
          position: 'absolute',
          left: `${p.x}%`,
          top: `${p.y}%`,
          width: p.size,
          height: p.size * 1.4,
          background: p.c,
          borderRadius: p.i % 3 === 0 ? '50%' : 3,
          transform: `rotate(${p.r}deg)`,
          opacity: .55,
          pointerEvents: 'none',
        }}/>
      ))}
    </>
  );
}

export default function HeroPlayground({ onShop, onExplore }) {
  return (
    <section style={{
      position: 'relative',
      overflow: 'hidden',
      padding: '70px 0 120px',
      background: `
        radial-gradient(50% 50% at 20% 30%, rgba(255,92,138,.18) 0%, transparent 70%),
        radial-gradient(60% 60% at 80% 20%, rgba(122,45,166,.18) 0%, transparent 70%),
        radial-gradient(60% 60% at 50% 100%, rgba(255,210,61,.4) 0%, transparent 70%),
        linear-gradient(180deg, #FFF6E7 0%, #FFEBF2 50%, #FFFDF7 100%)`,
    }}>
      <ConfettiBackdrop />

      <div className="wrap" style={{ position: 'relative', textAlign: 'center' }}>
        <span className="sticker coral" style={{ marginBottom: 18 }}>
          🎉 NEW · Life-Skills Series for Kids 5–8
        </span>

        <h1 className="display" style={{ fontSize: 'clamp(46px, 7vw, 100px)', margin: '14px auto 0', maxWidth: 1100 }}>
          Big <span className="yellow">Feelings</span>,<br/>
          <span className="coral">Bigger</span> <span className="green">Lessons</span>.
        </h1>
        <p style={{ fontSize: 'clamp(17px, 1.5vw, 21px)', fontWeight: 600, color: 'var(--ink-2)', maxWidth: 720, margin: '22px auto 0', lineHeight: 1.5 }}>
          Five story-led books, 300+ playful activities, zero screens. Quizykoo turns
          everyday social skills into the best part of your child's day.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <HeroCTAs onShop={onShop} onExplore={onExplore} />
        </div>

        <div style={{
          position: 'relative',
          height: 480,
          marginTop: 60,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}>
          {books.map((b, i) => (
            <img
              key={i}
              src={b.src}
              alt=""
              className="bob"
              style={{
                position: 'absolute',
                bottom: 0,
                width: 200,
                height: 'auto',
                transform: `translate(${b.x}px, ${b.y}px) rotate(${b.rot}deg)`,
                zIndex: b.z,
                borderRadius: 10,
                border: '4px solid #fff',
                boxShadow: '0 18px 40px -10px rgba(14,33,103,.45)',
                animationDelay: `${i * .2}s`,
              }}
            />
          ))}

          <img
            src="assets/social-skills-box.jpg"
            alt="Social Skills Box"
            style={{
              position: 'relative',
              zIndex: 10,
              width: 'min(560px, 78%)',
              borderRadius: 22,
              border: '6px solid #fff',
              boxShadow: '0 40px 80px -16px rgba(14,33,103,.5)',
            }}
          />

          <div className="float bob" style={{ top: 20, left: '8%' }}>
            <div className="bubble">Let's read!</div>
          </div>
          <div className="float bob-slow" style={{ top: 80, right: '8%', animationDelay: '.4s' }}>
            <div className="bubble coral">High-five! ✋</div>
          </div>
          <div className="float bob" style={{ top: '50%', right: '2%', animationDelay: '.8s' }}>
            <div className="bubble yellow">So fun!</div>
          </div>

          <img
            src="assets/quizykoo-logo.png"
            alt=""
            className="bob"
            style={{
              position: 'absolute',
              top: -40,
              right: 'calc(50% - 280px)',
              width: 200,
              zIndex: 11,
              animationDelay: '.3s',
              filter: 'drop-shadow(0 16px 30px rgba(14,33,103,.35))',
            }}
          />
        </div>

        <HeroBadges />
      </div>
    </section>
  );
}
