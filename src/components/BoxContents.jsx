import React from 'react';
import { StarBurst, Heart } from './Decorations';

const items = [
  ['📚', '5 Premium Hardcover Books', 'Beautifully illustrated, durable, made to last.'],
  ['🎨', '300+ Interactive Activities', 'Colour, draw, roleplay & talk through every skill.'],
  ['🧠', 'Develops Everyday Life Skills', 'Manners, kindness, empathy, teamwork & more.'],
  ['🎁', 'Gift-Ready Box', 'No wrapping needed — comes giftable out of the box.'],
];

export default function BoxContents({ onAdd }) {
  return (
    <section id="shop" style={{
      padding: '110px 0',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(180deg, #FFFDF7 0%, #FFF6E7 100%)',
    }}>
      <div className="float bob" style={{ top: 80, right: '6%' }}><StarBurst size={56} color="var(--yellow)"/></div>
      <div className="float bob-slow" style={{ bottom: 60, left: '8%' }}><Heart size={50}/></div>

      <div className="wrap" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 60,
        alignItems: 'center',
      }}>
        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(closest-side, rgba(255,210,61,.4), transparent 70%)',
            filter: 'blur(40px)',
          }}/>
          <img
            src="assets/social-skills-box.jpg"
            alt="Social Skills Box contents"
            className="bob-slow"
            style={{
              position: 'relative',
              width: '100%',
              borderRadius: 24,
              border: '6px solid #fff',
              boxShadow: 'var(--shadow-pop)',
            }}
          />
          <div className="float bob" style={{ top: '-4%', left: '-4%' }}>
            <span className="sticker coral">300+ Activities!</span>
          </div>
          <div className="float bob-slow" style={{ bottom: '4%', right: '-3%' }}>
            <span className="sticker yellow">Perfect Gift 🎁</span>
          </div>
        </div>

        <div className="box-contents-text">
          <span className="sticker yellow">📦 What's Inside</span>
          <h2 className="display" style={{ fontSize: 'clamp(38px, 4.6vw, 60px)', margin: '14px 0 18px' }}>
            One box.<br/>
            <span className="coral">300+ activities.</span><br/>
            <span className="green">A lifetime</span> of skills.
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0', display: 'flex', flexDirection: 'column', gap: 14 }}>
            {items.map(([icon, title, sub]) => (
              <li key={title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <span style={{
                  flex: '0 0 auto',
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: '#fff',
                  border: '3px solid var(--royal)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 22,
                  boxShadow: '0 3px 0 rgba(14,33,103,.25)',
                }}>{icon}</span>
                <div>
                  <div style={{ fontFamily: 'var(--ff-head)', fontWeight: 700, color: 'var(--royal)', fontSize: 17 }}>{title}</div>
                  <div style={{ color: 'var(--ink-2)', fontSize: 14.5, fontWeight: 500 }}>{sub}</div>
                </div>
              </li>
            ))}
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 26, flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontFamily: 'var(--ff-head)', fontWeight: 700, color: 'var(--ink-2)', fontSize: 14, textDecoration: 'line-through' }}>₹1,499</div>
              <div className="display" style={{ fontSize: 44, color: 'var(--coral)' }}>₹1,099</div>
            </div>
            <button className="btn btn-primary" onClick={() => onAdd('box')}>
              Add to Cart
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </button>
            <span style={{ background: 'var(--green)', color: '#fff', padding: '8px 14px', borderRadius: 999, fontFamily: 'var(--ff-head)', fontWeight: 700, fontSize: 14 }}>Save 27%</span>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          #shop .wrap { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
