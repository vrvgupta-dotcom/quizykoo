import React from 'react';

const directPerks = [
  ['🚚', 'Free Shipping'],
  ['💳', 'Razorpay · UPI · Cards'],
  ['💵', 'Cash on Delivery'],
  ['🔁', '7-day easy returns'],
  ['📞', 'WhatsApp support'],
  ['🎁', 'Free gift wrap'],
];

const amazonPerks = [
  ['⚡', 'Prime delivery'],
  ['⭐', '4.7 stars · 800+ reviews'],
  ['💳', 'EMI & all payment options'],
];

export default function WhereToBuy({ onAdd }) {
  return (
    <section style={{
      padding: '110px 0',
      position: 'relative',
      background: 'linear-gradient(180deg, #FFFDF7 0%, #F0F7FF 100%)',
    }}>
      <div className="wrap" style={{ textAlign: 'center' }}>
        <span className="sticker">🛒 Where to Buy</span>
        <h2 className="display" style={{ fontSize: 'clamp(36px, 4.6vw, 58px)', margin: '14px auto 12px', maxWidth: 900 }}>
          Two easy ways to <span className="coral">get the box</span>.
        </h2>
        <p style={{ fontSize: 17, color: 'var(--ink-2)', maxWidth: 600, margin: '0 auto 50px', fontWeight: 500 }}>
          Buy direct for the best price and fastest support — or grab it on Amazon.
        </p>
      </div>

      <div className="wrap where-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1.1fr 1fr',
        gap: 28,
        alignItems: 'stretch',
      }}>
        <div style={{
          position: 'relative',
          background: 'linear-gradient(160deg, var(--royal) 0%, var(--royal-2) 100%)',
          color: '#fff',
          border: '4px solid var(--royal-ink)',
          borderRadius: 'var(--rad-xl)',
          padding: '36px 32px',
          boxShadow: '0 10px 0 var(--royal-ink), var(--shadow-pop)',
        }}>
          <span className="sticker yellow" style={{ position: 'absolute', top: -16, left: 28 }}>
            ⭐ Best Price · Recommended
          </span>
          <h3 className="display" style={{ color: '#fff', fontSize: 36, marginTop: 14 }}>
            Buy direct from <span style={{ color: 'var(--yellow)' }}>Quizykoo</span>
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: '18px 0 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {directPerks.map(([icon, label]) => (
              <li key={label} style={{ display: 'flex', gap: 10, alignItems: 'center', fontFamily: 'var(--ff-head)', fontWeight: 600, fontSize: 14.5 }}>
                <span style={{ fontSize: 20 }}>{icon}</span>{label}
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
            <div>
              <div style={{ opacity: .7, fontSize: 14, textDecoration: 'line-through' }}>₹1,499</div>
              <div className="display" style={{ color: 'var(--yellow)', fontSize: 42 }}>₹1,099</div>
            </div>
            <button className="btn btn-yellow" onClick={() => onAdd('box')}>
              Shop the Box
            </button>
          </div>
        </div>

        <div style={{
          background: '#fff',
          border: '4px solid var(--royal)',
          borderRadius: 'var(--rad-xl)',
          padding: '36px 32px',
          boxShadow: '0 10px 0 var(--royal), var(--shadow-soft)',
        }}>
          <span className="sticker">📦 Also Available On</span>
          <h3 className="display" style={{ fontSize: 36, marginTop: 14 }}>
            <span style={{ color: '#FF9900' }}>amazon</span><span style={{ color: 'var(--royal)' }}>.in</span>
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: '18px 0 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
            {amazonPerks.map(([icon, label]) => (
              <li key={label} style={{ display: 'flex', gap: 10, alignItems: 'center', fontFamily: 'var(--ff-head)', fontWeight: 600, color: 'var(--royal)' }}>
                <span style={{ fontSize: 20 }}>{icon}</span>{label}
              </li>
            ))}
          </ul>
          <a href="#" className="btn btn-secondary">
            View on Amazon
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M9 7h8v8"/></svg>
          </a>
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .where-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
