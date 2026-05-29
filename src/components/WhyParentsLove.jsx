import React from 'react';
import { CloudBlob } from './Decorations';

const benefits = [
  { title: 'Screen-Free Learning', body: "Real books, real activities, real conversations — no tablets, no apps, no guilt.", icon: '📚', bg: 'var(--yellow)' },
  { title: 'Builds Real Confidence', body: "Children practice manners and kind words until they feel natural and proud.", icon: '💪', bg: 'var(--coral)' },
  { title: 'Encourages Positive Behavior', body: "Story-led lessons make 'please' and 'thank you' something kids want to say.", icon: '🌟', bg: 'var(--purple)' },
  { title: 'Parent–Child Bonding', body: "Designed for 15 minutes a day, together. Snuggle, read, laugh, learn.", icon: '💞', bg: 'var(--coral-2)' },
  { title: 'Activity-Based Learning', body: "300+ playful activities turn social skills into the highlight of the day.", icon: '🎨', bg: 'var(--sky)' },
  { title: 'The Birthday Gift Kids Love', body: "Beautifully packaged. Educational. Actually used. The gift parents thank you for.", icon: '🎁', bg: 'var(--green)' },
];

export default function WhyParentsLove() {
  return (
    <section style={{
      padding: '110px 0',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(180deg, #F0F7FF 0%, #FFFDF7 100%)',
    }}>
      <div className="float bob" style={{ top: 60, left: '4%' }}><CloudBlob size={140} color="#fff"/></div>
      <div className="float bob-slow" style={{ bottom: 60, right: '4%' }}><CloudBlob size={160} color="#fff"/></div>

      <div className="wrap" style={{ textAlign: 'center', position: 'relative' }}>
        <span className="sticker">💛 Loved by 2,400+ Indian Parents</span>
        <h2 className="display" style={{ fontSize: 'clamp(38px, 5vw, 64px)', margin: '14px auto 14px', maxWidth: 900 }}>
          Why parents <span className="coral">love</span><br/>
          Quizykoo.
        </h2>
        <p style={{ fontSize: 18, color: 'var(--ink-2)', maxWidth: 600, margin: '0 auto 50px', fontWeight: 500 }}>
          Made for the moments between bedtime stories and breakfast chaos.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 22,
        }}>
          {benefits.map(b => (
            <div key={b.title} style={{
              position: 'relative',
              background: '#fff',
              border: '4px solid var(--royal)',
              borderRadius: 'var(--rad-lg)',
              padding: '28px 24px',
              textAlign: 'left',
              boxShadow: '0 6px 0 var(--royal), var(--shadow-soft)',
              overflow: 'hidden',
            }}>
              <div style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                background: b.bg,
                border: '3px solid var(--royal)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 32,
                marginBottom: 16,
                boxShadow: '0 4px 0 rgba(14,33,103,.25)',
              }}>{b.icon}</div>
              <h3 style={{
                fontFamily: 'var(--ff-display)',
                fontWeight: 800,
                fontSize: 22,
                color: 'var(--royal)',
                margin: '0 0 8px',
              }}>{b.title}</h3>
              <p style={{ margin: 0, color: 'var(--ink-2)', fontWeight: 500, fontSize: 15.5, lineHeight: 1.5 }}>
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
