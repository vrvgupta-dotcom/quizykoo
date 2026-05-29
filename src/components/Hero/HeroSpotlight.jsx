import React from 'react';
import { HeroBadges, HeroCTAs, StarBurst, Heart } from './shared';

export default function HeroSpotlight({ onShop, onExplore }) {
  return (
    <section style={{
      position: 'relative',
      overflow: 'hidden',
      background: '#FFFDF7',
      padding: '40px 0 80px',
    }}>
      <div className="wrap">
        <div style={{
          position: 'relative',
          borderRadius: 'var(--rad-xl)',
          overflow: 'hidden',
          background: `linear-gradient(110deg, var(--yellow) 0%, var(--yellow) 48%, var(--royal) 48%, var(--royal-2) 100%)`,
          minHeight: 620,
          padding: '64px 56px',
          display: 'grid',
          gridTemplateColumns: '1.05fr 1fr',
          gap: 40,
          alignItems: 'center',
          boxShadow: 'var(--shadow-pop)',
          border: '5px solid #fff',
        }}>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <span className="sticker coral" style={{ marginBottom: 18 }}>
              ⭐ Bestseller · 2,400+ happy parents
            </span>
            <h1 className="display" style={{ fontSize: 'clamp(42px, 5.4vw, 80px)', marginTop: 18, lineHeight: .96 }}>
              Build<br/>
              <span className="coral">Confident</span>,<br/>
              <span className="green">Kind</span> &amp;<br/>
              <span className="purple">Happy</span> Kids
            </h1>
            <p style={{ fontSize: 19, fontWeight: 600, color: 'var(--royal-ink)', maxWidth: 460, marginTop: 22, lineHeight: 1.5 }}>
              Interactive life-skills books that teach manners, kindness, empathy
              &amp; teamwork — screen-free, story-led, made for ages 5–8.
            </p>
            <HeroCTAs onShop={onShop} onExplore={onExplore} />
            <div style={{ display: 'flex', gap: 10, marginTop: 22, flexWrap: 'wrap' }}>
              <span className="sticker"><strong style={{ color: 'var(--coral)' }}>300+</strong> Activities</span>
              <span className="sticker"><strong style={{ color: 'var(--green)' }}>5</strong> Premium Books</span>
              <span className="sticker"><strong style={{ color: 'var(--purple)' }}>Ages</strong> 5–8</span>
            </div>
          </div>

          <div style={{ position: 'relative', zIndex: 2, height: '100%' }}>
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{
                position: 'absolute',
                width: '90%',
                height: '90%',
                background: 'radial-gradient(closest-side, rgba(255,210,61,.45), transparent 70%)',
                filter: 'blur(30px)',
              }}/>
              <img
                src="assets/social-skills-box.jpg"
                alt="Social Skills Box"
                className="bob-slow"
                style={{
                  width: '100%',
                  maxWidth: 520,
                  borderRadius: 24,
                  position: 'relative',
                  border: '6px solid #fff',
                  boxShadow: '0 40px 80px -20px rgba(0,0,0,.55), 0 14px 30px -10px rgba(0,0,0,.4)',
                }}
              />
            </div>
            <div className="float bob" style={{ top: '6%', left: '-2%' }}>
              <div className="bubble yellow">Hello! 👋</div>
            </div>
            <div className="float bob-slow" style={{ bottom: '10%', right: '-2%', animationDelay: '.5s' }}>
              <div className="bubble coral">Thank you!</div>
            </div>
          </div>

          <div className="float spin-slow" style={{ top: 24, right: 32, opacity: .4 }}>
            <StarBurst size={70} color="#fff" />
          </div>
          <div className="float bob" style={{ bottom: 30, left: 50 }}>
            <Heart size={50} color="var(--coral)" />
          </div>
          <div className="float bob-slow" style={{ top: '40%', left: '46%', zIndex: 3 }}>
            <StarBurst size={48} color="var(--yellow)" />
          </div>

          <img
            src="assets/quizykoo-logo.png"
            alt=""
            className="wiggle"
            style={{
              position: 'absolute',
              bottom: -20,
              left: '42%',
              width: 160,
              zIndex: 4,
              filter: 'drop-shadow(0 12px 24px rgba(0,0,0,.4))',
            }}
          />
        </div>
        <HeroBadges />
      </div>
    </section>
  );
}
