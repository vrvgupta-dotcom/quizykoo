import React from 'react';
import { StarBurst, Heart } from './Decorations';

const cols = [
  { title: 'Shop', links: ['Social Skills Box', 'Individual Books', 'Bundles', 'Gift Cards'] },
  { title: 'Learn', links: ['About Quizykoo', 'Our Method', 'Blog', 'FAQs'] },
  { title: 'Support', links: ['Contact', 'WhatsApp Help', 'Shipping Policy', 'Return Policy'] },
];

const socials = ['IG', 'FB', 'YT', 'WA'];

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--royal-ink)',
      color: '#fff',
      padding: '70px 0 30px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="float drift" style={{ top: 30, left: '5%', opacity: .15 }}>
        <StarBurst size={80} color="var(--yellow)"/>
      </div>
      <div className="float bob-slow" style={{ bottom: 40, right: '8%', opacity: .18 }}>
        <Heart size={60} color="var(--coral)"/>
      </div>

      <div className="wrap" style={{ position: 'relative' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1fr',
          gap: 40,
          alignItems: 'flex-start',
        }} className="footer-grid">
          <div>
            <img src="/assets/quizykoo-logo.png" alt="Quizykoo" style={{ height: 80 }}/>
            <p style={{ marginTop: 14, opacity: .78, maxWidth: 320, fontWeight: 500, fontSize: 15 }}>
              Story-led life skills for kids 5–8. Made in India, loved everywhere.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
              {socials.map(s => (
                <a key={s} href="#" style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,.1)',
                  border: '2px solid rgba(255,255,255,.2)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  textDecoration: 'none',
                  fontFamily: 'var(--ff-head)',
                  fontWeight: 700,
                  fontSize: 12,
                }}>{s}</a>
              ))}
            </div>
          </div>

          {cols.map(c => (
            <div key={c.title}>
              <h4 style={{
                fontFamily: 'var(--ff-display)',
                fontWeight: 800,
                fontSize: 18,
                color: 'var(--yellow)',
                margin: '0 0 14px',
              }}>{c.title}</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
                {c.links.map(l => (
                  <li key={l}>
                    <a href="#" style={{ color: 'rgba(255,255,255,.78)', textDecoration: 'none', fontWeight: 500, fontSize: 15 }}>
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 50,
          paddingTop: 22,
          borderTop: '1px solid rgba(255,255,255,.12)',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 14,
          fontSize: 13.5,
          opacity: .7,
          fontWeight: 500,
        }}>
          <div>© 2026 Quizykoo Education Pvt. Ltd. · Made with 💛 in India</div>
          <div style={{ display: 'flex', gap: 18 }}>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms</a>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 880px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 30px !important; }
        }
        @media (max-width: 520px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
