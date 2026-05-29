import React, { useState } from 'react';
import { BOOKS } from '../data/books';
import { StarBurst, Heart } from './Decorations';

function BookCard({ book, onAdd }) {
  const [hover, setHover] = useState(false);
  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        background: book.bg,
        border: '4px solid var(--royal)',
        borderRadius: 'var(--rad-lg)',
        padding: '28px 22px 22px',
        flex: '0 0 auto',
        width: 280,
        scrollSnapAlign: 'start',
        transition: 'transform .35s cubic-bezier(.34,1.56,.64,1), box-shadow .35s',
        transform: hover ? 'translateY(-14px) rotate(-1deg)' : 'translateY(0)',
        boxShadow: hover
          ? `0 30px 50px -16px ${book.color}, 0 12px 24px -10px rgba(14,33,103,.35)`
          : '0 8px 0 var(--royal), 0 18px 30px -16px rgba(14,33,103,.3)',
      }}
    >
      <div style={{
        position: 'absolute',
        inset: -3,
        borderRadius: 'inherit',
        zIndex: 0,
        background: `radial-gradient(closest-side, ${book.color}55, transparent 70%)`,
        opacity: hover ? 1 : 0,
        transition: 'opacity .35s',
        filter: 'blur(20px)',
      }}/>

      <div style={{
        position: 'absolute',
        top: 14,
        right: 14,
        zIndex: 2,
        transform: hover ? 'translateY(-6px) rotate(-4deg)' : 'translateY(0) rotate(0)',
        opacity: hover ? 1 : .7,
        transition: 'all .3s',
      }}>
        <div className="bubble" style={{ background: book.color, color: '#fff', borderColor: 'var(--royal-ink)', fontSize: 13, padding: '6px 12px' }}>
          {book.bubble}
        </div>
      </div>

      <div style={{ position: 'relative', zIndex: 1, marginTop: 30 }}>
        <img
          src={book.cover}
          alt={book.title}
          style={{
            width: '100%',
            borderRadius: 10,
            border: '3px solid #fff',
            boxShadow: '0 14px 22px -8px rgba(14,33,103,.4)',
            display: 'block',
            transform: hover ? 'rotate(-3deg) scale(1.04)' : 'rotate(0)',
            transition: 'transform .35s cubic-bezier(.34,1.56,.64,1)',
          }}
        />
      </div>

      <h3 style={{
        fontFamily: 'var(--ff-display)',
        fontWeight: 800,
        fontSize: 20,
        color: 'var(--royal)',
        margin: '18px 0 6px',
        lineHeight: 1.1,
      }}>{book.title}</h3>
      <p style={{ fontFamily: 'var(--ff-head)', fontWeight: 600, fontSize: 13.5, color: 'var(--ink-2)', margin: 0 }}>
        {book.skill}
      </p>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 16 }}>
        <span style={{ display: 'flex', gap: 4, fontSize: 20 }}>
          {book.icons.map((icon, idx) => <span key={idx}>{icon}</span>)}
        </span>
        <span style={{
          background: 'var(--royal)',
          color: '#fff',
          borderRadius: 999,
          padding: '5px 12px',
          fontFamily: 'var(--ff-head)',
          fontWeight: 700,
          fontSize: 12,
        }}>{book.badge}</span>
      </div>
    </article>
  );
}

export default function BookShowcase({ onAdd }) {
  return (
    <section id="the-5-books" style={{
      padding: '110px 0 90px',
      background: 'linear-gradient(180deg, #FFFDF7 0%, #FFF9EC 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="float bob" style={{ top: 40, left: '5%' }}><StarBurst size={56} color="var(--coral)"/></div>
      <div className="float bob-slow" style={{ top: 90, right: '8%' }}><Heart size={42}/></div>

      <div className="wrap" style={{ textAlign: 'center' }}>
        <span className="sticker yellow">📚 Inside the Box</span>
        <h2 className="display" style={{ fontSize: 'clamp(38px, 5vw, 64px)', margin: '14px auto 12px', maxWidth: 900 }}>
          Five books. <span className="coral">One</span> super<br/>confident, kind kid.
        </h2>
        <p style={{ fontSize: 18, color: 'var(--ink-2)', maxWidth: 660, margin: '0 auto 40px', fontWeight: 500 }}>
          Each book is a story plus 50+ playful activities — a complete journey through one big social skill.
        </p>
      </div>

      <div className="h-scroll" style={{ paddingBottom: 30 }}>
        <div className="wrap" style={{
          display: 'flex',
          gap: 22,
          padding: '20px 28px',
          minWidth: 'min-content',
        }}>
          {BOOKS.map(b => <BookCard key={b.id} book={b} onAdd={onAdd}/>)}
        </div>
      </div>

      <div className="wrap" style={{ textAlign: 'center', marginTop: 30 }}>
        <button className="btn btn-yellow" onClick={() => onAdd('box')}>
          Get All 5 Books · ₹1,099
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </button>
      </div>
    </section>
  );
}
