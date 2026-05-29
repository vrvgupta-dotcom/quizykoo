import React, { useState } from 'react';

const skills = [
  { label: 'Good Manners', icon: '🙏', color: 'var(--yellow-2)' },
  { label: 'Sharing', icon: '🤝', color: 'var(--coral)' },
  { label: 'Communication', icon: '💬', color: 'var(--sky)' },
  { label: 'Friendship', icon: '🫂', color: 'var(--purple)' },
  { label: 'Respect', icon: '✋', color: 'var(--green)' },
  { label: 'Teamwork', icon: '⭐', color: 'var(--royal-2)' },
  { label: 'Kindness', icon: '💖', color: 'var(--coral-2)' },
  { label: 'Empathy', icon: '💛', color: 'var(--yellow-2)' },
];

function SkillTile({ label, icon, color }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        background: '#fff',
        border: '4px solid var(--royal)',
        borderRadius: 'var(--rad-md)',
        padding: '26px 18px',
        textAlign: 'center',
        transition: 'transform .25s cubic-bezier(.34,1.56,.64,1)',
        transform: hover ? 'translateY(-8px) rotate(-2deg)' : 'translateY(0)',
        boxShadow: hover
          ? `0 5px 0 var(--royal), 0 20px 40px -16px ${color}aa`
          : '0 5px 0 var(--royal)',
        cursor: 'default',
      }}
    >
      <div style={{
        width: 70,
        height: 70,
        borderRadius: '50%',
        margin: '0 auto 14px',
        background: color,
        border: '3px solid var(--royal)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 36,
        transform: hover ? 'rotate(-10deg) scale(1.08)' : 'rotate(0)',
        transition: 'transform .3s cubic-bezier(.34,1.56,.64,1)',
        boxShadow: '0 4px 0 rgba(14,33,103,.3)',
      }}>{icon}</div>
      <div style={{ fontFamily: 'var(--ff-head)', fontWeight: 700, fontSize: 17, color: 'var(--royal)' }}>
        {label}
      </div>
    </div>
  );
}

export default function WhatKidsLearn() {
  return (
    <section style={{ padding: '90px 0', position: 'relative', background: '#FFFDF7' }}>
      <div className="wrap" style={{ textAlign: 'center' }}>
        <span className="sticker coral">🌟 Skills That Last a Lifetime</span>
        <h2 className="display" style={{ fontSize: 'clamp(38px, 5vw, 64px)', margin: '14px auto 50px', maxWidth: 900 }}>
          What <span className="coral">kids</span> learn,<br/>
          <span className="underline-squiggle">naturally</span>.
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 18,
        }}>
          {skills.map(s => (
            <SkillTile key={s.label} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
