import React, { useState, useEffect } from 'react';

export default function MascotFloater() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setOpen(true), 6000);
    return () => clearTimeout(id);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 24,
        left: 24,
        zIndex: 70,
        display: 'flex',
        alignItems: 'flex-end',
        gap: 10,
      }}
      className="mascot-floater"
    >
      {open && (
        <div style={{
          background: '#fff',
          border: '4px solid var(--royal)',
          color: 'var(--royal)',
          padding: '12px 16px',
          borderRadius: 'var(--rad-md)',
          fontFamily: 'var(--ff-head)',
          fontWeight: 700,
          fontSize: 14,
          maxWidth: 240,
          boxShadow: '0 6px 0 var(--royal)',
          position: 'relative',
          animation: 'pop-in .4s cubic-bezier(.34,1.56,.64,1)',
        }}>
          <button
            onClick={() => setOpen(false)}
            style={{
              position: 'absolute',
              top: -10,
              right: -10,
              width: 24,
              height: 24,
              borderRadius: '50%',
              background: 'var(--coral)',
              color: '#fff',
              border: '2px solid var(--royal)',
              cursor: 'pointer',
              fontSize: 12,
              fontWeight: 800,
            }}
          >×</button>
          Psst! 🎁 Get 27% off the full Social Skills Box today.
        </div>
      )}
      <button
        onClick={() => setOpen(o => !o)}
        className="bob"
        style={{
          width: 84,
          height: 84,
          borderRadius: '50%',
          background: 'var(--yellow)',
          border: '4px solid var(--royal)',
          cursor: 'pointer',
          padding: 0,
          overflow: 'hidden',
          boxShadow: '0 6px 0 var(--royal-ink), 0 14px 28px -8px rgba(14,33,103,.5)',
        }}
        aria-label="Quizykoo mascot"
      >
        <img
          src="/assets/quizykoo-logo.png"
          alt=""
          style={{ width: '140%', height: '140%', objectFit: 'cover', objectPosition: 'center 18%', transform: 'translate(-14%, -10%)' }}
        />
      </button>
      <style>{`
        @media (max-width: 760px) {
          .mascot-floater { bottom: 96px; transform: scale(.85); transform-origin: bottom left; }
        }
      `}</style>
    </div>
  );
}
