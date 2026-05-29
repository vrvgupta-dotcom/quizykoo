import React from 'react';
import { HeroBadges, HeroCTAs, StarBurst, Heart, CloudBlob } from './shared';

export default function HeroCloudStage({ onShop, onExplore }) {
  return (
    <section style={{
      position: 'relative',
      overflow: 'hidden',
      padding: '90px 0 140px',
      background: `
        radial-gradient(60% 60% at 50% 100%, rgba(255,210,61,.25) 0%, transparent 70%),
        radial-gradient(70% 70% at 50% 0%, rgba(107,200,255,.35) 0%, transparent 60%),
        linear-gradient(180deg, #DDEFFF 0%, #F4FAFF 60%, #FFFDF7 100%)`,
    }}>
      <div className="float bob" style={{ top: '8%', left: '6%', '--r': '-8deg' }}><StarBurst size={70} color="var(--yellow)" /></div>
      <div className="float bob-slow" style={{ top: '18%', right: '8%', '--r': '12deg' }}><Heart size={48} /></div>
      <div className="float bob" style={{ bottom: '14%', left: '10%', '--r': '4deg' }}><StarBurst size={50} color="var(--coral)" /></div>
      <div className="float bob-slow" style={{ top: '40%', left: '3%' }}><CloudBlob size={140} color="#fff" /></div>
      <div className="float bob" style={{ top: '8%', right: '30%' }}><CloudBlob size={100} color="#fff" /></div>
      <div className="float drift" style={{ bottom: '18%', right: '4%' }}><CloudBlob size={170} color="#fff" /></div>

      <div className="wrap" style={{ position: 'relative', textAlign: 'center' }}>
        <span className="sticker yellow" style={{ marginBottom: 18 }}>
          ⭐ The #1 Life-Skills Box for Kids 5–8
        </span>

        <h1 className="display" style={{ fontSize: 'clamp(46px, 7vw, 96px)', margin: '14px auto 0', maxWidth: 1100 }}>
          Build <span className="coral">Confident</span>,<br/>
          <span className="underline-squiggle"><span className="green">Kind</span></span> &amp; <span className="purple">Happy</span> Kids
        </h1>

        <p style={{
          fontSize: 'clamp(17px, 1.5vw, 21px)',
          fontWeight: 600,
          color: 'var(--ink-2)',
          maxWidth: 720,
          margin: '22px auto 0',
          lineHeight: 1.5,
        }}>
          Interactive life-skills books and activities that teach manners, communication,
          kindness, teamwork &amp; empathy — through play, not screens.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <HeroCTAs onShop={onShop} onExplore={onExplore} />
        </div>

        <div style={{ marginTop: 22, display: 'flex', justifyContent: 'center', gap: 18, flexWrap: 'wrap', color: 'var(--ink-2)', fontWeight: 700, fontSize: 14 }}>
          <span>★★★★★ 2,400+ happy parents</span>
          <span style={{ opacity: .4 }}>•</span>
          <span>Free Shipping in India</span>
          <span style={{ opacity: .4 }}>•</span>
          <span>COD Available</span>
        </div>

        <div style={{ position: 'relative', marginTop: 50, display: 'flex', justifyContent: 'center' }}>
          <div style={{
            position: 'absolute',
            width: '68%',
            height: '72%',
            top: '12%',
            left: '16%',
            background: 'radial-gradient(closest-side, rgba(255,210,61,.6), transparent 70%)',
            filter: 'blur(40px)',
            pointerEvents: 'none',
          }} />

          <div className="float bob" style={{ top: '8%', left: '14%', animationDelay: '.2s' }}>
            <div className="bubble">Hello! 👋</div>
          </div>
          <div className="float bob-slow" style={{ top: '2%', right: '14%', animationDelay: '.6s' }}>
            <div className="bubble coral">Thank you!</div>
          </div>
          <div className="float bob" style={{ bottom: '30%', right: '10%', animationDelay: '1s' }}>
            <div className="bubble yellow">Let's share!</div>
          </div>

          <img
            src="assets/social-skills-box.jpg"
            alt="Quizykoo Social Skills Box"
            style={{
              width: 'min(820px, 92%)',
              borderRadius: 28,
              position: 'relative',
              zIndex: 2,
              boxShadow: '0 40px 80px -20px rgba(14,33,103,.45), 0 12px 30px -10px rgba(14,33,103,.3)',
              border: '6px solid #fff',
            }}
          />

          <img
            src="assets/quizykoo-logo.png"
            alt="Quizykoo tiger"
            className="wiggle"
            style={{
              position: 'absolute',
              bottom: -30,
              right: '6%',
              width: 180,
              zIndex: 3,
              filter: 'drop-shadow(0 12px 24px rgba(14,33,103,.35))',
            }}
          />
        </div>

        <HeroBadges />
      </div>

      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{
        position: 'absolute',
        bottom: -1,
        left: 0,
        width: '100%',
        height: 90,
        display: 'block',
      }}>
        <path d="M0 80 Q 120 30 240 70 T 480 70 T 720 60 T 960 70 T 1200 60 T 1440 70 L 1440 120 L 0 120 Z" fill="#FFFDF7"/>
      </svg>
    </section>
  );
}
