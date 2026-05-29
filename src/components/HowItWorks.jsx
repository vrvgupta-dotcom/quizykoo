import React from 'react';
import { StarBurst, Heart } from './Decorations';

const steps = [
  { n: '1', title: 'Open the Box', body: '5 beautifully illustrated books, ready to read.', icon: '📦', color: 'var(--yellow)' },
  { n: '2', title: 'Read Together', body: 'Stories your child will actually ask for.', icon: '📖', color: 'var(--coral)' },
  { n: '3', title: 'Play the Activities', body: '50+ fun activities per book — color, draw, roleplay.', icon: '🎨', color: 'var(--sky)' },
  { n: '4', title: 'Build Real Skills', body: 'Watch confidence, kindness & manners show up at school.', icon: '⭐', color: 'var(--green)' },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{
      padding: '110px 0',
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--royal)',
      color: '#fff',
    }}>
      <div className="float spin-slow" style={{ top: 60, left: '6%', opacity: .18 }}>
        <StarBurst size={160} color="var(--yellow)"/>
      </div>
      <div className="float bob" style={{ top: 100, right: '8%' }}>
        <Heart size={50} color="var(--coral)"/>
      </div>
      <div className="float bob-slow" style={{ bottom: 80, left: '12%' }}>
        <StarBurst size={64} color="var(--coral)"/>
      </div>

      <div className="wrap" style={{ position: 'relative', textAlign: 'center' }}>
        <span className="sticker yellow">🌈 How It Works</span>
        <h2 className="display" style={{ color: '#fff', fontSize: 'clamp(38px, 5vw, 64px)', margin: '14px auto 14px' }}>
          Four <span style={{ color: 'var(--yellow)' }}>simple</span> steps to a<br/>
          <span style={{ color: 'var(--coral-2)' }}>happier</span>, kinder kid.
        </h2>
        <p style={{ fontSize: 18, color: 'rgba(255,255,255,.78)', maxWidth: 600, margin: '0 auto 60px', fontWeight: 500 }}>
          15 minutes a day. Zero screens. Zero tantrums about learning.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 24,
          position: 'relative',
        }}>
          {steps.map((s, i) => (
            <div key={s.n} style={{
              position: 'relative',
              background: '#fff',
              color: 'var(--royal)',
              border: '4px solid var(--yellow)',
              borderRadius: 'var(--rad-lg)',
              padding: '34px 22px 26px',
              textAlign: 'center',
              boxShadow: '0 8px 0 rgba(0,0,0,.18)',
              transform: i % 2 === 0 ? 'rotate(-1.5deg)' : 'rotate(1.5deg)',
            }}>
              <div style={{
                position: 'absolute',
                top: -22,
                left: 'calc(50% - 24px)',
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: s.color,
                color: 'var(--royal-ink)',
                border: '4px solid var(--royal)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--ff-display)',
                fontWeight: 800,
                fontSize: 22,
                boxShadow: '0 4px 0 rgba(0,0,0,.25)',
              }}>{s.n}</div>

              <div style={{ fontSize: 50, marginTop: 6 }}>{s.icon}</div>
              <h3 style={{
                fontFamily: 'var(--ff-display)',
                fontWeight: 800,
                fontSize: 22,
                color: 'var(--royal)',
                margin: '10px 0 8px',
              }}>{s.title}</h3>
              <p style={{ margin: 0, color: 'var(--ink-2)', fontWeight: 500, fontSize: 15, lineHeight: 1.5 }}>
                {s.body}
              </p>

              {i < steps.length - 1 && (
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  className="arrow-step"
                  style={{ position: 'absolute', right: -34, top: 'calc(50% - 20px)', zIndex: 3 }}
                >
                  <path
                    d="M5 20 Q 20 5 35 20 M28 14 L35 20 L28 26"
                    fill="none"
                    stroke="var(--yellow)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 720px) { .arrow-step { display: none; } }
      `}</style>
    </section>
  );
}
