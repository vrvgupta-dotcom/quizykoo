import React, { useState } from 'react';
import { StarBurst, Heart, WhatsAppIcon } from './Decorations';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  return (
    <section style={{
      padding: '90px 0',
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, var(--coral) 0%, var(--coral-2) 50%, var(--purple-2) 100%)',
      color: '#fff',
    }}>
      <div className="float spin-slow" style={{ top: 40, right: '8%', opacity: .25 }}>
        <StarBurst size={120} color="#fff"/>
      </div>
      <div className="float bob-slow" style={{ bottom: 30, left: '8%', opacity: .3 }}>
        <Heart size={80} color="#fff"/>
      </div>

      <img
        src="/assets/quizykoo-logo.png"
        alt=""
        className="bob"
        style={{
          position: 'absolute',
          bottom: -30,
          right: '4%',
          width: 200,
          zIndex: 2,
          filter: 'drop-shadow(0 12px 24px rgba(0,0,0,.3))',
        }}
      />

      <div className="wrap" style={{ position: 'relative', maxWidth: 700, zIndex: 3 }}>
        <span className="sticker" style={{ background: '#fff' }}>💌 Free Parenting Tips</span>
        <h2 className="display" style={{ color: '#fff', fontSize: 'clamp(34px, 4.4vw, 54px)', margin: '14px 0 16px' }}>
          Get fun parenting &amp;<br/>
          <span style={{ color: 'var(--yellow)' }}>learning ideas</span> weekly.
        </h2>
        <p style={{ fontSize: 17, fontWeight: 500, opacity: .92, maxWidth: 540, marginBottom: 26 }}>
          Bite-sized social-skill activities, kid-friendly recipes for kindness, and the occasional discount. Zero spam.
        </p>

        {!submitted ? (
          <form
            onSubmit={e => { e.preventDefault(); if (email) setSubmitted(true); }}
            style={{
              display: 'flex',
              gap: 10,
              flexWrap: 'wrap',
              background: '#fff',
              borderRadius: 999,
              padding: 8,
              border: '4px solid var(--royal-ink)',
              boxShadow: '0 6px 0 var(--royal-ink)',
              maxWidth: 520,
            }}
          >
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{
                flex: 1,
                minWidth: 200,
                border: 'none',
                outline: 'none',
                background: 'transparent',
                padding: '0 18px',
                fontSize: 16,
                fontFamily: 'var(--ff-body)',
                fontWeight: 600,
                color: 'var(--royal)',
              }}
            />
            <button type="submit" className="btn btn-primary" style={{ padding: '12px 22px' }}>
              Subscribe
            </button>
          </form>
        ) : (
          <div style={{
            background: '#fff',
            color: 'var(--royal)',
            padding: '18px 24px',
            borderRadius: 999,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 10,
            fontFamily: 'var(--ff-head)',
            fontWeight: 700,
            border: '4px solid var(--royal-ink)',
          }}>
            🎉 You're in! Check your inbox for a hello from Quizykoo.
          </div>
        )}

        <div style={{ marginTop: 22, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a href="#" className="btn" style={{
            background: '#25D366',
            color: '#fff',
            boxShadow: '0 6px 0 #128C7E',
          }}>
            <WhatsAppIcon size={20} />
            Join WhatsApp Updates
          </a>
        </div>
      </div>
    </section>
  );
}
