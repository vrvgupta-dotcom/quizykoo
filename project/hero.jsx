// hero.jsx — three hero variations for Quizykoo homepage

// ─── Shared bits ─────────────────────────────────────────────────────────────

function HeroBadges() {
  const items = [
    { label: '300+ Activities', icon: '✨', bg: 'var(--yellow)', fg: 'var(--royal-ink)' },
    { label: 'Ages 5–8',        icon: '🎈', bg: '#fff',          fg: 'var(--royal)' },
    { label: 'Screen-Free',     icon: '📚', bg: 'var(--green)',  fg: '#fff' },
    { label: 'Perfect Gift',    icon: '🎁', bg: 'var(--coral)',  fg: '#fff' },
  ];
  return (
    <div style={{ display:'flex', flexWrap:'wrap', gap:10, marginTop:24 }}>
      {items.map(b => (
        <span key={b.label} className="sticker" style={{
          background: b.bg, color: b.fg,
          borderColor: b.bg === '#fff' ? 'var(--royal)' : 'var(--royal-ink)',
        }}>
          <span style={{ fontSize: 16 }}>{b.icon}</span>{b.label}
        </span>
      ))}
    </div>
  );
}

function HeroCTAs({ onShop, onExplore }) {
  return (
    <div style={{ display:'flex', flexWrap:'wrap', gap:14, marginTop:26 }}>
      <button className="btn btn-primary" onClick={onShop}>
        Shop the Box · ₹1,099
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
      </button>
      <button className="btn btn-secondary" onClick={onExplore}>
        Explore the 5 Books
      </button>
    </div>
  );
}

function StarBurst({ size = 90, color = 'var(--yellow)', style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={style}>
      <g fill={color} stroke="var(--royal)" strokeWidth="3" strokeLinejoin="round">
        <path d="M50 5 L60 35 L92 38 L66 58 L76 90 L50 72 L24 90 L34 58 L8 38 L40 35 Z"/>
      </g>
    </svg>
  );
}

function Heart({ size = 60, color = 'var(--coral)', style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={style}>
      <path d="M12 21s-7-4.35-7-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.65-7 10-7 10z"
            fill={color} stroke="var(--royal-ink)" strokeWidth="1.3" strokeLinejoin="round"/>
    </svg>
  );
}

function CloudBlob({ size = 200, color = '#fff', style }) {
  return (
    <svg width={size} height={size * .65} viewBox="0 0 200 130" style={style}>
      <path d="M40 90 Q 10 90 12 65 Q 8 40 38 38 Q 42 12 78 18 Q 96 -2 124 18 Q 158 8 168 38 Q 198 38 196 70 Q 200 100 168 100 Q 150 122 124 108 Q 96 122 78 108 Q 56 116 40 90 Z"
        fill={color} stroke="var(--royal)" strokeWidth="2.5" opacity=".95" />
    </svg>
  );
}

function Squiggle({ color = 'var(--coral)', size = 60, style }) {
  return (
    <svg width={size} height={size * .4} viewBox="0 0 60 24" style={style}>
      <path d="M2 12 Q 12 0 22 12 T 42 12 T 62 12"
        fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

// ─── Variation 1: CLOUD STAGE — centered editorial w/ box hero ──────────────

function HeroCloudStage({ onShop, onExplore }) {
  return (
    <section style={{
      position:'relative', overflow:'hidden',
      padding:'90px 0 140px',
      background: `
        radial-gradient(60% 60% at 50% 100%, rgba(255,210,61,.25) 0%, transparent 70%),
        radial-gradient(70% 70% at 50% 0%, rgba(107,200,255,.35) 0%, transparent 60%),
        linear-gradient(180deg, #DDEFFF 0%, #F4FAFF 60%, #FFFDF7 100%)`,
    }}>
      {/* Background floaters */}
      <div className="float bob" style={{ top:'8%', left:'6%', '--r':'-8deg' }}><StarBurst size={70} color="var(--yellow)" /></div>
      <div className="float bob-slow" style={{ top:'18%', right:'8%', '--r':'12deg' }}><Heart size={48} /></div>
      <div className="float bob" style={{ bottom:'14%', left:'10%', '--r':'4deg' }}><StarBurst size={50} color="var(--coral)" /></div>
      <div className="float bob-slow" style={{ top:'40%', left:'3%' }}>
        <CloudBlob size={140} color="#fff" />
      </div>
      <div className="float bob" style={{ top:'8%', right:'30%' }}>
        <CloudBlob size={100} color="#fff" />
      </div>
      <div className="float drift" style={{ bottom:'18%', right:'4%' }}>
        <CloudBlob size={170} color="#fff" />
      </div>

      <div className="wrap" style={{ position:'relative', textAlign:'center' }}>
        <span className="sticker yellow" style={{ marginBottom: 18 }}>
          ⭐ The #1 Life-Skills Box for Kids 5–8
        </span>

        <h1 className="display" style={{ fontSize:'clamp(46px, 7vw, 96px)', margin:'14px auto 0', maxWidth: 1100 }}>
          Build <span className="coral">Confident</span>,<br/>
          <span className="underline-squiggle"><span className="green">Kind</span></span> &amp; <span className="purple">Happy</span> Kids
        </h1>

        <p style={{
          fontSize: 'clamp(17px, 1.5vw, 21px)', fontWeight:600,
          color: 'var(--ink-2)', maxWidth: 720, margin: '22px auto 0', lineHeight: 1.5,
        }}>
          Interactive life-skills books and activities that teach manners, communication,
          kindness, teamwork &amp; empathy — through play, not screens.
        </p>

        <div style={{ display:'flex', justifyContent:'center' }}>
          <HeroCTAs onShop={onShop} onExplore={onExplore} />
        </div>

        {/* Trust pill row */}
        <div style={{ marginTop: 22, display:'flex', justifyContent:'center', gap:18, flexWrap:'wrap', color:'var(--ink-2)', fontWeight:700, fontSize:14 }}>
          <span>★★★★★ 2,400+ happy parents</span>
          <span style={{ opacity:.4 }}>•</span>
          <span>Free Shipping in India</span>
          <span style={{ opacity:.4 }}>•</span>
          <span>COD Available</span>
        </div>

        {/* Hero product */}
        <div style={{ position:'relative', marginTop: 50, display:'flex', justifyContent:'center' }}>
          {/* Glow halo */}
          <div style={{
            position:'absolute', width:'68%', height:'72%', top:'12%', left:'16%',
            background: 'radial-gradient(closest-side, rgba(255,210,61,.6), transparent 70%)',
            filter:'blur(40px)', pointerEvents:'none',
          }} />

          {/* Speech bubbles */}
          <div className="float bob" style={{ top:'8%', left:'14%', animationDelay:'.2s' }}>
            <div className="bubble">Hello! 👋</div>
          </div>
          <div className="float bob-slow" style={{ top:'2%', right:'14%', animationDelay:'.6s' }}>
            <div className="bubble coral">Thank you!</div>
          </div>
          <div className="float bob" style={{ bottom:'30%', right:'10%', animationDelay:'1s' }}>
            <div className="bubble yellow">Let's share!</div>
          </div>

          <img src="assets/social-skills-box.jpg" alt="Quizykoo Social Skills Box"
            style={{
              width: 'min(820px, 92%)', borderRadius: 28, position:'relative', zIndex:2,
              boxShadow: '0 40px 80px -20px rgba(14,33,103,.45), 0 12px 30px -10px rgba(14,33,103,.3)',
              border: '6px solid #fff',
            }} />

          {/* Mascot peek */}
          <img src="assets/quizykoo-logo.png" alt="Quizykoo tiger"
            className="wiggle"
            style={{
              position:'absolute', bottom: -30, right: '6%', width: 180, zIndex: 3,
              filter: 'drop-shadow(0 12px 24px rgba(14,33,103,.35))',
              display:'none',
            }} />
        </div>

        <HeroBadges />
      </div>

      {/* Bottom cloud wave */}
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{
        position:'absolute', bottom:-1, left:0, width:'100%', height: 90, display:'block',
      }}>
        <path d="M0 80 Q 120 30 240 70 T 480 70 T 720 60 T 960 70 T 1200 60 T 1440 70 L 1440 120 L 0 120 Z" fill="#FFFDF7"/>
      </svg>
    </section>
  );
}

// ─── Variation 2: SPLIT SPOTLIGHT — bold color block ────────────────────────

function HeroSpotlight({ onShop, onExplore }) {
  return (
    <section style={{
      position:'relative', overflow:'hidden',
      background: '#FFFDF7',
      padding: '40px 0 80px',
    }}>
      <div className="wrap">
        <div style={{
          position:'relative',
          borderRadius: 'var(--rad-xl)',
          overflow:'hidden',
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
          {/* LEFT — copy on yellow */}
          <div style={{ position:'relative', zIndex: 2 }}>
            <span className="sticker coral" style={{ marginBottom: 18 }}>
              ⭐ Bestseller · 2,400+ happy parents
            </span>
            <h1 className="display" style={{
              fontSize:'clamp(42px, 5.4vw, 80px)', marginTop: 18, lineHeight: .96,
            }}>
              Build<br/>
              <span className="coral">Confident</span>,<br/>
              <span className="green">Kind</span> &amp;<br/>
              <span className="purple">Happy</span> Kids
            </h1>
            <p style={{ fontSize: 19, fontWeight:600, color: 'var(--royal-ink)', maxWidth: 460, marginTop: 22, lineHeight:1.5 }}>
              Interactive life-skills books that teach manners, kindness, empathy
              &amp; teamwork — screen-free, story-led, made for ages 5–8.
            </p>
            <HeroCTAs onShop={onShop} onExplore={onExplore} />
            <div style={{ display:'flex', gap: 10, marginTop: 22, flexWrap:'wrap' }}>
              <span className="sticker"><strong style={{color:'var(--coral)'}}>300+</strong> Activities</span>
              <span className="sticker"><strong style={{color:'var(--green)'}}>5</strong> Premium Books</span>
              <span className="sticker"><strong style={{color:'var(--purple)'}}>Ages</strong> 5–8</span>
            </div>
          </div>

          {/* RIGHT — product on royal */}
          <div style={{ position:'relative', zIndex: 2, height: '100%' }}>
            <div style={{
              position:'absolute', inset: 0, display:'flex', alignItems:'center', justifyContent:'center',
            }}>
              <div style={{
                position:'absolute', width: '90%', height: '90%',
                background:'radial-gradient(closest-side, rgba(255,210,61,.45), transparent 70%)',
                filter:'blur(30px)',
              }}/>
              <img src="assets/social-skills-box.jpg" alt="Social Skills Box"
                className="bob-slow"
                style={{
                  width: '100%', maxWidth: 520, borderRadius: 24, position:'relative',
                  border: '6px solid #fff',
                  boxShadow: '0 40px 80px -20px rgba(0,0,0,.55), 0 14px 30px -10px rgba(0,0,0,.4)',
                }} />
            </div>

            {/* Floating bubbles */}
            <div className="float bob" style={{ top: '6%', left: '-2%' }}>
              <div className="bubble yellow">Hello! 👋</div>
            </div>
            <div className="float bob-slow" style={{ bottom: '10%', right: '-2%', animationDelay:'.5s' }}>
              <div className="bubble coral">Thank you!</div>
            </div>
          </div>

          {/* Decor */}
          <div className="float spin-slow" style={{ top: 24, right: 32, opacity:.4 }}>
            <StarBurst size={70} color="#fff" />
          </div>
          <div className="float bob" style={{ bottom: 30, left: 50 }}>
            <Heart size={50} color="var(--coral)" />
          </div>
          <div className="float bob-slow" style={{ top: '40%', left: '46%', zIndex: 3 }}>
            <StarBurst size={48} color="var(--yellow)" />
          </div>

          {/* Mascot in middle */}
          <img src="assets/quizykoo-logo.png" alt=""
            className="wiggle"
            style={{
              position:'absolute', bottom: -20, left: '42%', width: 160, zIndex: 4,
              filter: 'drop-shadow(0 12px 24px rgba(0,0,0,.4))',
            }}/>
        </div>

        <HeroBadges />
      </div>
    </section>
  );
}

// ─── Variation 3: PLAYGROUND — confetti rain w/ books fanned ────────────────

function HeroPlayground({ onShop, onExplore }) {
  const books = [
    { src: 'assets/book-manners.jpg',     rot: -14, x: -340, y: 40,  z: 1 },
    { src: 'assets/book-sharing.jpg',     rot: -7,  x: -180, y: 10,  z: 2 },
    { src: 'assets/book-listening.jpg',   rot: 0,   x: 0,    y: 0,   z: 3 },
    { src: 'assets/book-friendship.jpg',  rot: 7,   x: 180,  y: 10,  z: 2 },
    { src: 'assets/book-respect.jpg',     rot: 14,  x: 340,  y: 40,  z: 1 },
  ];

  return (
    <section style={{
      position:'relative', overflow:'hidden', padding: '70px 0 120px',
      background: `
        radial-gradient(50% 50% at 20% 30%, rgba(255,92,138,.18) 0%, transparent 70%),
        radial-gradient(60% 60% at 80% 20%, rgba(122,45,166,.18) 0%, transparent 70%),
        radial-gradient(60% 60% at 50% 100%, rgba(255,210,61,.4) 0%, transparent 70%),
        linear-gradient(180deg, #FFF6E7 0%, #FFEBF2 50%, #FFFDF7 100%)`,
    }}>
      {/* Confetti rain (static) */}
      <ConfettiBackdrop />

      <div className="wrap" style={{ position:'relative', textAlign:'center' }}>
        <span className="sticker coral" style={{ marginBottom: 18 }}>
          🎉 NEW · Life-Skills Series for Kids 5–8
        </span>

        <h1 className="display" style={{ fontSize:'clamp(46px, 7vw, 100px)', margin: '14px auto 0', maxWidth: 1100 }}>
          Big <span className="yellow">Feelings</span>,<br/>
          <span className="coral">Bigger</span> <span className="green">Lessons</span>.
        </h1>
        <p style={{ fontSize: 'clamp(17px, 1.5vw, 21px)', fontWeight: 600, color: 'var(--ink-2)', maxWidth: 720, margin: '22px auto 0', lineHeight: 1.5 }}>
          Five story-led books, 300+ playful activities, zero screens. Quizykoo turns
          everyday social skills into the best part of your child's day.
        </p>

        <div style={{ display:'flex', justifyContent:'center' }}>
          <HeroCTAs onShop={onShop} onExplore={onExplore} />
        </div>

        {/* Books fanned + box */}
        <div style={{
          position:'relative', height: 480, marginTop: 60,
          display:'flex', alignItems:'flex-end', justifyContent:'center',
        }}>
          {/* Fanned books */}
          {books.map((b, i) => (
            <img key={i} src={b.src} alt=""
              className="bob"
              style={{
                position:'absolute', bottom: 0,
                width: 200, height: 'auto',
                transform: `translate(${b.x}px, ${b.y}px) rotate(${b.rot}deg)`,
                zIndex: b.z,
                borderRadius: 10,
                border: '4px solid #fff',
                boxShadow: '0 18px 40px -10px rgba(14,33,103,.45)',
                animationDelay: `${i * .2}s`,
              }}
            />
          ))}

          {/* Box in front */}
          <img src="assets/social-skills-box.jpg" alt="Social Skills Box"
            style={{
              position:'relative', zIndex: 10,
              width: 'min(560px, 78%)', borderRadius: 22,
              border: '6px solid #fff',
              boxShadow: '0 40px 80px -16px rgba(14,33,103,.5)',
            }}/>

          {/* Speech bubbles */}
          <div className="float bob" style={{ top: 20, left: '8%' }}>
            <div className="bubble">Let's read!</div>
          </div>
          <div className="float bob-slow" style={{ top: 80, right: '8%', animationDelay:'.4s' }}>
            <div className="bubble coral">High-five! ✋</div>
          </div>
          <div className="float bob" style={{ top: '50%', right: '2%', animationDelay:'.8s' }}>
            <div className="bubble yellow">So fun!</div>
          </div>

          {/* Mascot bouncing on top of box */}
          <img src="assets/quizykoo-logo.png" alt=""
            className="bob"
            style={{
              position:'absolute', top: -40, right: 'calc(50% - 280px)', width: 200, zIndex: 11,
              animationDelay:'.3s',
              filter: 'drop-shadow(0 16px 30px rgba(14,33,103,.35))',
            }}/>
        </div>

        <HeroBadges />
      </div>
    </section>
  );
}

function ConfettiBackdrop() {
  // Static decorative confetti — uses deterministic pseudo-randoms
  const pieces = React.useMemo(() => {
    const colors = ['var(--yellow)', 'var(--coral)', 'var(--green)', 'var(--purple)', 'var(--sky)'];
    const out = [];
    for (let i = 0; i < 40; i++) {
      const seed = i * 7919;
      const x = (seed * 13) % 100;
      const y = (seed * 17) % 100;
      const r = (seed * 31) % 360;
      const c = colors[i % colors.length];
      const size = 8 + ((seed * 5) % 14);
      out.push({ x, y, r, c, size, i });
    }
    return out;
  }, []);
  return (
    <>
      {pieces.map(p => (
        <div key={p.i} style={{
          position:'absolute', left: `${p.x}%`, top: `${p.y}%`,
          width: p.size, height: p.size * 1.4, background: p.c,
          borderRadius: p.i % 3 === 0 ? '50%' : 3,
          transform: `rotate(${p.r}deg)`,
          opacity: .55,
          pointerEvents:'none',
        }}/>
      ))}
    </>
  );
}

// Export to window
Object.assign(window, {
  HeroCloudStage, HeroSpotlight, HeroPlayground,
  HeroBadges, HeroCTAs,
  StarBurst, Heart, CloudBlob, Squiggle,
});
