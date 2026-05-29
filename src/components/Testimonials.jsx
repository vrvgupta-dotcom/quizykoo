import React from 'react';

const quotes = [
  { name: 'Priya M.', loc: 'Mumbai · Mum of 6yo', quote: 'My child says "thank you" naturally now — without me reminding her. Worth every rupee.', color: 'var(--yellow)', avatar: 'P' },
  { name: 'Arjun K.', loc: 'Bangalore · Dad of 7yo', quote: "A genuinely fun way to teach kindness. We do 15 minutes a night and he begs for more.", color: 'var(--coral)', avatar: 'A' },
  { name: 'Sneha R.', loc: 'Delhi · Mum of 5yo', quote: "Beautifully designed and actually educational. Best gift I've given my niece.", color: 'var(--purple)', avatar: 'S' },
  { name: 'Vikram S.', loc: 'Pune · Dad of 8yo', quote: "My son started sharing toys with his sister without being asked. That's the win.", color: 'var(--sky)', avatar: 'V' },
  { name: 'Anita T.', loc: 'Chennai · Mum of 6yo', quote: "Finally, a screen-free learning tool that doesn't feel like homework. Brilliant.", color: 'var(--green)', avatar: 'A' },
];

export default function Testimonials() {
  return (
    <section id="reviews" style={{ padding: '110px 0', background: '#FFFDF7', position: 'relative' }}>
      <div className="wrap" style={{ textAlign: 'center' }}>
        <span className="sticker coral">⭐⭐⭐⭐⭐ 4.9 / 5 · 2,400+ Reviews</span>
        <h2 className="display" style={{ fontSize: 'clamp(38px, 5vw, 64px)', margin: '14px auto 50px', maxWidth: 900 }}>
          Parents are <span className="coral">talking</span>.<br/>
          Kids are <span className="green">listening</span>.
        </h2>
      </div>

      <div className="h-scroll" style={{ paddingBottom: 30 }}>
        <div style={{ display: 'flex', gap: 22, padding: '10px 28px', width: 'max-content' }}>
          {quotes.map((q, i) => (
            <article key={i} style={{
              flex: '0 0 auto',
              width: 340,
              background: '#fff',
              border: '4px solid var(--royal)',
              borderRadius: 'var(--rad-lg)',
              padding: '26px',
              boxShadow: '0 6px 0 var(--royal)',
              transform: i % 2 === 0 ? 'rotate(-1.2deg)' : 'rotate(1.2deg)',
              scrollSnapAlign: 'start',
            }}>
              <div style={{ display: 'flex', gap: 2, marginBottom: 12, color: 'var(--yellow-2)' }}>
                {[...Array(5)].map((_, j) => <span key={j}>★</span>)}
              </div>
              <p style={{
                fontFamily: 'var(--ff-head)',
                fontWeight: 600,
                fontSize: 18,
                color: 'var(--royal)',
                lineHeight: 1.4,
                margin: '0 0 18px',
              }}>
                "{q.quote}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: q.color,
                  border: '3px solid var(--royal)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--ff-display)',
                  fontWeight: 800,
                  fontSize: 18,
                  color: 'var(--royal-ink)',
                }}>{q.avatar}</div>
                <div>
                  <div style={{ fontFamily: 'var(--ff-head)', fontWeight: 700, color: 'var(--royal)', fontSize: 15 }}>{q.name}</div>
                  <div style={{ color: 'var(--ink-2)', fontSize: 13, fontWeight: 500 }}>{q.loc}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
