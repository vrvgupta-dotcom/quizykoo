// sections.jsx — non-hero homepage sections for Quizykoo

// ─── Nav ─────────────────────────────────────────────────────────────────────
function Nav({ cartCount, onOpenCart }) {
  return (
    <header style={{
      position:'sticky', top: 0, zIndex: 50,
      background: 'rgba(255,253,247,.85)',
      backdropFilter: 'blur(14px) saturate(140%)',
      WebkitBackdropFilter: 'blur(14px) saturate(140%)',
      borderBottom: '2px solid rgba(14,33,103,.06)',
    }}>
      <div className="wrap" style={{
        display:'flex', alignItems:'center', justifyContent:'space-between',
        padding:'12px 28px', maxWidth: 1280, margin: '0 auto',
      }}>
        <a href="#" style={{ display:'flex', alignItems:'center', gap: 10, textDecoration:'none' }}>
          <img src="assets/quizykoo-logo.png" alt="Quizykoo" style={{ height: 56 }}/>
        </a>
        <nav style={{ display:'flex', gap: 28, alignItems:'center' }} className="nav-links">
          {['Shop', 'The 5 Books', 'How It Works', 'Reviews', 'About'].map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/\s+/g,'-')}`} style={{
              color: 'var(--ink)', textDecoration:'none',
              fontFamily:'var(--ff-head)', fontWeight: 600, fontSize: 15,
            }}>{l}</a>
          ))}
        </nav>
        <div style={{ display:'flex', alignItems:'center', gap:10 }}>
          <button onClick={onOpenCart} style={{
            position:'relative', width: 46, height: 46, borderRadius:'50%',
            background: 'var(--yellow)', border:'3px solid var(--royal)',
            cursor:'pointer', display:'inline-flex', alignItems:'center', justifyContent:'center',
            boxShadow: '0 3px 0 rgba(14,33,103,.3)',
          }} aria-label="Cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--royal)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 3h2l2.4 12.5a2 2 0 0 0 2 1.5h7.7a2 2 0 0 0 2-1.6L21 8H6"/>
              <circle cx="9" cy="21" r="1.5"/><circle cx="18" cy="21" r="1.5"/>
            </svg>
            {cartCount > 0 && (
              <span style={{
                position:'absolute', top: -6, right: -6, minWidth: 22, height: 22,
                background:'var(--coral)', color:'#fff', borderRadius:999,
                border:'2px solid #fff', fontFamily:'var(--ff-head)', fontWeight:700, fontSize:12,
                display:'inline-flex', alignItems:'center', justifyContent:'center', padding:'0 6px',
              }}>{cartCount}</span>
            )}
          </button>
        </div>
      </div>
      <style>{`
        @media (max-width: 880px){ .nav-links{ display:none } }
      `}</style>
    </header>
  );
}

// ─── Marquee strip ──────────────────────────────────────────────────────────
function Marquee() {
  const items = ['📦 FREE Shipping in India', '💳 COD Available', '⭐ 2,400+ Happy Parents', '🎁 Perfect Birthday Gift', '🇮🇳 Made for Indian Kids', '📚 Screen-Free Learning'];
  return (
    <div style={{
      background: 'var(--royal)', color:'#fff', overflow:'hidden',
      padding: '12px 0', borderTop:'3px solid var(--yellow)', borderBottom:'3px solid var(--yellow)',
    }}>
      <div style={{
        display:'flex', gap: 50, animation:'marq 30s linear infinite',
        fontFamily:'var(--ff-head)', fontWeight: 600, fontSize: 16, whiteSpace:'nowrap',
        width: 'max-content',
      }}>
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i}>{t}</span>
        ))}
      </div>
      <style>{`@keyframes marq{ from{ transform: translateX(0) } to{ transform: translateX(-50%) } }`}</style>
    </div>
  );
}

// ─── 5-Book Showcase ────────────────────────────────────────────────────────
const BOOKS = [
  {
    id: 'manners',
    title: 'Good Manners & Politeness',
    cover: 'assets/book-manners.jpg',
    skill: 'Please · Thank You · Sorry',
    color: 'var(--yellow-2)',
    bg: '#FFF4D1',
    bubble: 'Thank you!',
    icons: ['🙏','😊','💛'],
    badge: '50+ Activities',
  },
  {
    id: 'sharing',
    title: 'Sharing & Caring',
    cover: 'assets/book-sharing.jpg',
    skill: 'Share · Care · Be Kind',
    color: 'var(--coral)',
    bg: '#FFE3EC',
    bubble: "Let's share!",
    icons: ['🤝','💝','🎁'],
    badge: '50+ Activities',
  },
  {
    id: 'listening',
    title: 'Listening & Communication',
    cover: 'assets/book-listening.jpg',
    skill: 'Listen · Understand · Speak',
    color: 'var(--sky)',
    bg: '#E3F4FF',
    bubble: 'I hear you!',
    icons: ['👂','💬','💡'],
    badge: '50+ Activities',
  },
  {
    id: 'friendship',
    title: 'Friendship & Teamwork',
    cover: 'assets/book-friendship.jpg',
    skill: 'Trust · Respect · Help',
    color: 'var(--purple)',
    bg: '#EFE0FF',
    bubble: 'Great team!',
    icons: ['🫂','⭐','🤲'],
    badge: '50+ Activities',
  },
  {
    id: 'respect',
    title: 'Respect & Kindness',
    cover: 'assets/book-respect.jpg',
    skill: 'Respect · Kindness · Positivity',
    color: 'var(--green)',
    bg: '#DDF6DC',
    bubble: 'You matter!',
    icons: ['💚','🌟','🌍'],
    badge: '50+ Activities',
  },
];

function BookCard({ book, onAdd }) {
  const [hover, setHover] = React.useState(false);
  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position:'relative',
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
      {/* Glow */}
      <div style={{
        position:'absolute', inset: -3, borderRadius: 'inherit', zIndex: 0,
        background: `radial-gradient(closest-side, ${book.color}55, transparent 70%)`,
        opacity: hover ? 1 : 0, transition: 'opacity .35s', filter:'blur(20px)',
      }}/>

      {/* Speech bubble */}
      <div style={{
        position:'absolute', top: 14, right: 14, zIndex: 2,
        transform: hover ? 'translateY(-6px) rotate(-4deg)' : 'translateY(0) rotate(0)',
        opacity: hover ? 1 : .7,
        transition: 'all .3s',
      }}>
        <div className="bubble" style={{ background: book.color, color:'#fff', borderColor:'var(--royal-ink)', fontSize: 13, padding:'6px 12px' }}>
          {book.bubble}
        </div>
      </div>

      <div style={{ position:'relative', zIndex: 1, marginTop: 30 }}>
        <img src={book.cover} alt={book.title}
          style={{
            width: '100%', borderRadius: 10,
            border: '3px solid #fff',
            boxShadow: '0 14px 22px -8px rgba(14,33,103,.4)',
            display:'block',
            transform: hover ? 'rotate(-3deg) scale(1.04)' : 'rotate(0)',
            transition: 'transform .35s cubic-bezier(.34,1.56,.64,1)',
          }}/>
      </div>

      <h3 style={{
        fontFamily: 'var(--ff-display)', fontWeight: 800,
        fontSize: 20, color: 'var(--royal)', margin: '18px 0 6px',
        lineHeight: 1.1,
      }}>{book.title}</h3>
      <p style={{ fontFamily:'var(--ff-head)', fontWeight: 600, fontSize: 13.5, color:'var(--ink-2)', margin:0 }}>
        {book.skill}
      </p>

      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginTop: 16 }}>
        <span style={{ display:'flex', gap: 4, fontSize: 20 }}>
          {book.icons.map((i, idx) => <span key={idx}>{i}</span>)}
        </span>
        <span style={{
          background: 'var(--royal)', color:'#fff', borderRadius: 999,
          padding:'5px 12px', fontFamily:'var(--ff-head)', fontWeight:700, fontSize:12,
        }}>{book.badge}</span>
      </div>
    </article>
  );
}

function BookShowcase({ onAdd }) {
  return (
    <section id="the-5-books" style={{
      padding: '110px 0 90px',
      background: 'linear-gradient(180deg, #FFFDF7 0%, #FFF9EC 100%)',
      position:'relative', overflow:'hidden',
    }}>
      {/* Decor */}
      <div className="float bob" style={{ top: 40, left:'5%' }}><StarBurst size={56} color="var(--coral)"/></div>
      <div className="float bob-slow" style={{ top: 90, right:'8%' }}><Heart size={42}/></div>

      <div className="wrap" style={{ textAlign:'center' }}>
        <span className="sticker yellow">📚 Inside the Box</span>
        <h2 className="display" style={{ fontSize:'clamp(38px, 5vw, 64px)', margin:'14px auto 12px', maxWidth: 900 }}>
          Five books. <span className="coral">One</span> super<br/>confident, kind kid.
        </h2>
        <p style={{ fontSize: 18, color:'var(--ink-2)', maxWidth: 660, margin: '0 auto 40px', fontWeight: 500 }}>
          Each book is a story plus 50+ playful activities — a complete journey through one big social skill.
        </p>
      </div>

      <div className="h-scroll" style={{ paddingBottom: 30 }}>
        <div className="wrap" style={{
          display:'flex', gap: 22, padding: '20px 28px',
          minWidth: 'min-content',
        }}>
          {BOOKS.map(b => <BookCard key={b.id} book={b} onAdd={onAdd}/>)}
        </div>
      </div>

      <div className="wrap" style={{ textAlign:'center', marginTop: 30 }}>
        <button className="btn btn-yellow" onClick={() => onAdd('box')}>
          Get All 5 Books · ₹1,099
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </button>
      </div>
    </section>
  );
}

// ─── What Kids Learn ─────────────────────────────────────────────────────────
function WhatKidsLearn() {
  const skills = [
    { label: 'Good Manners',   icon:'🙏', color:'var(--yellow-2)' },
    { label: 'Sharing',        icon:'🤝', color:'var(--coral)' },
    { label: 'Communication',  icon:'💬', color:'var(--sky)' },
    { label: 'Friendship',     icon:'🫂', color:'var(--purple)' },
    { label: 'Respect',        icon:'✋', color:'var(--green)' },
    { label: 'Teamwork',       icon:'⭐', color:'var(--royal-2)' },
    { label: 'Kindness',       icon:'💖', color:'var(--coral-2)' },
    { label: 'Empathy',        icon:'💛', color:'var(--yellow-2)' },
  ];
  return (
    <section style={{ padding: '90px 0', position:'relative', background: '#FFFDF7' }}>
      <div className="wrap" style={{ textAlign:'center' }}>
        <span className="sticker coral">🌟 Skills That Last a Lifetime</span>
        <h2 className="display" style={{ fontSize:'clamp(38px, 5vw, 64px)', margin:'14px auto 50px', maxWidth: 900 }}>
          What <span className="coral">kids</span> learn,<br/>
          <span className="underline-squiggle">naturally</span>.
        </h2>

        <div style={{
          display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(180px, 1fr))', gap: 18,
        }}>
          {skills.map((s, i) => (
            <SkillTile key={s.label} {...s} delay={i * 0.05}/>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillTile({ label, icon, color, delay }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position:'relative',
        background: '#fff',
        border: '4px solid var(--royal)',
        borderRadius: 'var(--rad-md)',
        padding: '26px 18px',
        textAlign:'center',
        transition: 'transform .25s cubic-bezier(.34,1.56,.64,1)',
        transform: hover ? 'translateY(-8px) rotate(-2deg)' : 'translateY(0)',
        boxShadow: hover
          ? `0 5px 0 var(--royal), 0 20px 40px -16px ${color}aa`
          : '0 5px 0 var(--royal)',
        cursor:'default',
      }}>
      <div style={{
        width: 70, height: 70, borderRadius: '50%', margin: '0 auto 14px',
        background: color, border: '3px solid var(--royal)',
        display:'flex', alignItems:'center', justifyContent:'center',
        fontSize: 36,
        transform: hover ? 'rotate(-10deg) scale(1.08)' : 'rotate(0)',
        transition: 'transform .3s cubic-bezier(.34,1.56,.64,1)',
        boxShadow: '0 4px 0 rgba(14,33,103,.3)',
      }}>{icon}</div>
      <div style={{ fontFamily:'var(--ff-head)', fontWeight: 700, fontSize: 17, color:'var(--royal)' }}>
        {label}
      </div>
    </div>
  );
}

// ─── Why Parents Love Quizykoo ──────────────────────────────────────────────
function WhyParentsLove() {
  const benefits = [
    { title:'Screen-Free Learning', body:"Real books, real activities, real conversations — no tablets, no apps, no guilt.", icon:'📚', bg:'var(--yellow)' },
    { title:'Builds Real Confidence', body:"Children practice manners and kind words until they feel natural and proud.", icon:'💪', bg:'var(--coral)' },
    { title:'Encourages Positive Behavior', body:"Story-led lessons make 'please' and 'thank you' something kids want to say.", icon:'🌟', bg:'var(--purple)' },
    { title:'Parent–Child Bonding', body:"Designed for 15 minutes a day, together. Snuggle, read, laugh, learn.", icon:'💞', bg:'var(--coral-2)' },
    { title:'Activity-Based Learning', body:"300+ playful activities turn social skills into the highlight of the day.", icon:'🎨', bg:'var(--sky)' },
    { title:'The Birthday Gift Kids Love', body:"Beautifully packaged. Educational. Actually used. The gift parents thank you for.", icon:'🎁', bg:'var(--green)' },
  ];
  return (
    <section style={{
      padding: '110px 0', position:'relative', overflow:'hidden',
      background: 'linear-gradient(180deg, #F0F7FF 0%, #FFFDF7 100%)',
    }}>
      <div className="float bob" style={{ top: 60, left:'4%' }}><CloudBlob size={140} color="#fff"/></div>
      <div className="float bob-slow" style={{ bottom: 60, right:'4%' }}><CloudBlob size={160} color="#fff"/></div>

      <div className="wrap" style={{ textAlign:'center', position:'relative' }}>
        <span className="sticker">💛 Loved by 2,400+ Indian Parents</span>
        <h2 className="display" style={{ fontSize:'clamp(38px, 5vw, 64px)', margin:'14px auto 14px', maxWidth: 900 }}>
          Why parents <span className="coral">love</span><br/>
          Quizykoo.
        </h2>
        <p style={{ fontSize: 18, color:'var(--ink-2)', maxWidth: 600, margin: '0 auto 50px', fontWeight: 500 }}>
          Made for the moments between bedtime stories and breakfast chaos.
        </p>

        <div style={{
          display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap: 22,
        }}>
          {benefits.map((b, i) => (
            <div key={b.title} style={{
              position:'relative', background:'#fff',
              border:'4px solid var(--royal)', borderRadius:'var(--rad-lg)',
              padding: '28px 24px', textAlign:'left',
              boxShadow:'0 6px 0 var(--royal), var(--shadow-soft)',
              overflow:'hidden',
            }}>
              <div style={{
                width: 64, height: 64, borderRadius:'50%',
                background: b.bg, border:'3px solid var(--royal)',
                display:'flex', alignItems:'center', justifyContent:'center', fontSize: 32,
                marginBottom: 16,
                boxShadow: '0 4px 0 rgba(14,33,103,.25)',
              }}>{b.icon}</div>
              <h3 style={{
                fontFamily:'var(--ff-display)', fontWeight: 800, fontSize: 22,
                color:'var(--royal)', margin: '0 0 8px',
              }}>{b.title}</h3>
              <p style={{ margin: 0, color:'var(--ink-2)', fontWeight: 500, fontSize: 15.5, lineHeight: 1.5 }}>
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works (4 steps) ─────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    { n: '1', title:'Open the Box', body:'5 beautifully illustrated books, ready to read.', icon:'📦', color:'var(--yellow)' },
    { n: '2', title:'Read Together', body:'Stories your child will actually ask for.', icon:'📖', color:'var(--coral)' },
    { n: '3', title:'Play the Activities', body:'50+ fun activities per book — color, draw, roleplay.', icon:'🎨', color:'var(--sky)' },
    { n: '4', title:'Build Real Skills', body:'Watch confidence, kindness & manners show up at school.', icon:'⭐', color:'var(--green)' },
  ];
  return (
    <section id="how-it-works" style={{
      padding: '110px 0', position:'relative', overflow:'hidden',
      background: 'var(--royal)',
      color:'#fff',
    }}>
      {/* Decorative confetti */}
      <div className="float spin-slow" style={{ top: 60, left: '6%', opacity:.18 }}>
        <StarBurst size={160} color="var(--yellow)"/>
      </div>
      <div className="float bob" style={{ top: 100, right: '8%' }}>
        <Heart size={50} color="var(--coral)"/>
      </div>
      <div className="float bob-slow" style={{ bottom: 80, left: '12%' }}>
        <StarBurst size={64} color="var(--coral)"/>
      </div>

      <div className="wrap" style={{ position:'relative', textAlign:'center' }}>
        <span className="sticker yellow">🌈 How It Works</span>
        <h2 className="display" style={{ color:'#fff', fontSize:'clamp(38px, 5vw, 64px)', margin: '14px auto 14px' }}>
          Four <span style={{ color:'var(--yellow)' }}>simple</span> steps to a<br/>
          <span style={{ color:'var(--coral-2)' }}>happier</span>, kinder kid.
        </h2>
        <p style={{ fontSize: 18, color:'rgba(255,255,255,.78)', maxWidth: 600, margin: '0 auto 60px', fontWeight: 500 }}>
          15 minutes a day. Zero screens. Zero tantrums about learning.
        </p>

        <div style={{
          display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap: 24,
          position:'relative',
        }}>
          {steps.map((s, i) => (
            <div key={s.n} style={{
              position:'relative',
              background:'#fff', color:'var(--royal)',
              border:'4px solid var(--yellow)',
              borderRadius:'var(--rad-lg)',
              padding: '34px 22px 26px',
              textAlign:'center',
              boxShadow: '0 8px 0 rgba(0,0,0,.18)',
              transform: i % 2 === 0 ? 'rotate(-1.5deg)' : 'rotate(1.5deg)',
            }}>
              {/* Step number bubble */}
              <div style={{
                position:'absolute', top: -22, left: 'calc(50% - 24px)',
                width: 48, height: 48, borderRadius:'50%',
                background: s.color, color:'var(--royal-ink)',
                border:'4px solid var(--royal)',
                display:'flex', alignItems:'center', justifyContent:'center',
                fontFamily:'var(--ff-display)', fontWeight: 800, fontSize: 22,
                boxShadow:'0 4px 0 rgba(0,0,0,.25)',
              }}>{s.n}</div>

              <div style={{ fontSize: 50, marginTop: 6 }}>{s.icon}</div>
              <h3 style={{
                fontFamily:'var(--ff-display)', fontWeight: 800, fontSize: 22,
                color:'var(--royal)', margin:'10px 0 8px',
              }}>{s.title}</h3>
              <p style={{ margin: 0, color:'var(--ink-2)', fontWeight: 500, fontSize: 15, lineHeight: 1.5 }}>
                {s.body}
              </p>

              {/* Arrow to next */}
              {i < steps.length - 1 && (
                <svg width="40" height="40" viewBox="0 0 40 40"
                  className="arrow-step"
                  style={{ position:'absolute', right: -34, top: 'calc(50% - 20px)', zIndex: 3 }}>
                  <path d="M5 20 Q 20 5 35 20 M28 14 L35 20 L28 26"
                    fill="none" stroke="var(--yellow)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 720px){ .arrow-step{ display:none } }
      `}</style>
    </section>
  );
}

// ─── Box Contents ─────────────────────────────────────────────────────────
function BoxContents({ onAdd }) {
  return (
    <section id="shop" style={{
      padding: '110px 0', position:'relative', overflow:'hidden',
      background: 'linear-gradient(180deg, #FFFDF7 0%, #FFF6E7 100%)',
    }}>
      <div className="float bob" style={{ top: 80, right:'6%' }}><StarBurst size={56} color="var(--yellow)"/></div>
      <div className="float bob-slow" style={{ bottom: 60, left:'8%' }}><Heart size={50}/></div>

      <div className="wrap" style={{
        display:'grid', gridTemplateColumns:'1fr 1fr', gap: 60, alignItems:'center',
      }} >
        <div style={{ position:'relative' }}>
          <div style={{
            position:'absolute', inset:0,
            background: 'radial-gradient(closest-side, rgba(255,210,61,.4), transparent 70%)',
            filter:'blur(40px)',
          }}/>
          <img src="assets/social-skills-box.jpg" alt="Social Skills Box contents"
            className="bob-slow"
            style={{
              position:'relative', width:'100%', borderRadius: 24,
              border: '6px solid #fff',
              boxShadow: 'var(--shadow-pop)',
            }}/>
          {/* Floating badges */}
          <div className="float bob" style={{ top:'-4%', left:'-4%' }}>
            <span className="sticker coral">300+ Activities!</span>
          </div>
          <div className="float bob-slow" style={{ bottom:'4%', right:'-3%' }}>
            <span className="sticker yellow">Perfect Gift 🎁</span>
          </div>
        </div>

        <div className="box-contents-text">
          <span className="sticker yellow">📦 What's Inside</span>
          <h2 className="display" style={{ fontSize:'clamp(38px, 4.6vw, 60px)', margin:'14px 0 18px' }}>
            One box.<br/>
            <span className="coral">300+ activities.</span><br/>
            <span className="green">A lifetime</span> of skills.
          </h2>
          <ul style={{ listStyle:'none', padding: 0, margin: '20px 0', display:'flex', flexDirection:'column', gap: 14 }}>
            {[
              ['📚', '5 Premium Hardcover Books', 'Beautifully illustrated, durable, made to last.'],
              ['🎨', '300+ Interactive Activities', 'Colour, draw, roleplay & talk through every skill.'],
              ['🧠', 'Develops Everyday Life Skills', 'Manners, kindness, empathy, teamwork & more.'],
              ['🎁', 'Gift-Ready Box', 'No wrapping needed — comes giftable out of the box.'],
            ].map(([i, t, s]) => (
              <li key={t} style={{ display:'flex', gap: 14, alignItems:'flex-start' }}>
                <span style={{
                  flex:'0 0 auto',
                  width: 44, height: 44, borderRadius:'50%',
                  background:'#fff', border:'3px solid var(--royal)',
                  display:'flex', alignItems:'center', justifyContent:'center', fontSize: 22,
                  boxShadow:'0 3px 0 rgba(14,33,103,.25)',
                }}>{i}</span>
                <div>
                  <div style={{ fontFamily:'var(--ff-head)', fontWeight: 700, color:'var(--royal)', fontSize: 17 }}>{t}</div>
                  <div style={{ color:'var(--ink-2)', fontSize: 14.5, fontWeight: 500 }}>{s}</div>
                </div>
              </li>
            ))}
          </ul>

          <div style={{ display:'flex', alignItems:'center', gap: 16, marginTop: 26, flexWrap:'wrap' }}>
            <div>
              <div style={{ fontFamily:'var(--ff-head)', fontWeight:700, color:'var(--ink-2)', fontSize: 14, textDecoration:'line-through' }}>₹1,499</div>
              <div className="display" style={{ fontSize: 44, color:'var(--coral)' }}>₹1,099</div>
            </div>
            <button className="btn btn-primary" onClick={() => onAdd('box')}>
              Add to Cart
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </button>
            <span style={{ background:'var(--green)', color:'#fff', padding:'8px 14px', borderRadius:999, fontFamily:'var(--ff-head)', fontWeight:700, fontSize:14 }}>Save 27%</span>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 880px){
          section#shop .wrap{ grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}

// ─── Testimonials ────────────────────────────────────────────────────────
function Testimonials() {
  const quotes = [
    { name:'Priya M.', loc:'Mumbai · Mum of 6yo', quote:'My child says "thank you" naturally now — without me reminding her. Worth every rupee.', color:'var(--yellow)', avatar:'P' },
    { name:'Arjun K.', loc:'Bangalore · Dad of 7yo', quote:"A genuinely fun way to teach kindness. We do 15 minutes a night and he begs for more.", color:'var(--coral)', avatar:'A' },
    { name:'Sneha R.', loc:'Delhi · Mum of 5yo', quote:"Beautifully designed and actually educational. Best gift I've given my niece.", color:'var(--purple)', avatar:'S' },
    { name:'Vikram S.', loc:'Pune · Dad of 8yo', quote:"My son started sharing toys with his sister without being asked. That's the win.", color:'var(--sky)', avatar:'V' },
    { name:'Anita T.', loc:'Chennai · Mum of 6yo', quote:"Finally, a screen-free learning tool that doesn't feel like homework. Brilliant.", color:'var(--green)', avatar:'A' },
  ];
  return (
    <section id="reviews" style={{ padding: '110px 0', background:'#FFFDF7', position:'relative' }}>
      <div className="wrap" style={{ textAlign:'center' }}>
        <span className="sticker coral">⭐⭐⭐⭐⭐ 4.9 / 5 · 2,400+ Reviews</span>
        <h2 className="display" style={{ fontSize:'clamp(38px, 5vw, 64px)', margin:'14px auto 50px', maxWidth: 900 }}>
          Parents are <span className="coral">talking</span>.<br/>
          Kids are <span className="green">listening</span>.
        </h2>
      </div>

      <div className="h-scroll" style={{ paddingBottom: 30 }}>
        <div style={{ display:'flex', gap: 22, padding:'10px 28px', width: 'max-content' }}>
          {quotes.map((q, i) => (
            <article key={i} style={{
              flex:'0 0 auto', width: 340,
              background:'#fff', border:'4px solid var(--royal)',
              borderRadius:'var(--rad-lg)', padding:'26px',
              boxShadow: '0 6px 0 var(--royal)',
              transform: i % 2 === 0 ? 'rotate(-1.2deg)' : 'rotate(1.2deg)',
              scrollSnapAlign:'start',
            }}>
              <div style={{ display:'flex', gap: 2, marginBottom: 12, color:'var(--yellow-2)' }}>
                {[...Array(5)].map((_, j) => <span key={j}>★</span>)}
              </div>
              <p style={{ fontFamily:'var(--ff-head)', fontWeight: 600, fontSize: 18, color:'var(--royal)', lineHeight: 1.4, margin: '0 0 18px' }}>
                "{q.quote}"
              </p>
              <div style={{ display:'flex', alignItems:'center', gap: 12 }}>
                <div style={{
                  width: 44, height: 44, borderRadius:'50%',
                  background: q.color, border:'3px solid var(--royal)',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  fontFamily:'var(--ff-display)', fontWeight: 800, fontSize: 18, color:'var(--royal-ink)',
                }}>{q.avatar}</div>
                <div>
                  <div style={{ fontFamily:'var(--ff-head)', fontWeight: 700, color:'var(--royal)', fontSize: 15 }}>{q.name}</div>
                  <div style={{ color:'var(--ink-2)', fontSize: 13, fontWeight: 500 }}>{q.loc}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Where to Buy (Direct vs Amazon) ────────────────────────────────────
function WhereToBuy({ onAdd }) {
  return (
    <section style={{
      padding: '110px 0', position:'relative',
      background:'linear-gradient(180deg, #FFFDF7 0%, #F0F7FF 100%)',
    }}>
      <div className="wrap" style={{ textAlign:'center' }}>
        <span className="sticker">🛒 Where to Buy</span>
        <h2 className="display" style={{ fontSize:'clamp(36px, 4.6vw, 58px)', margin:'14px auto 12px', maxWidth: 900 }}>
          Two easy ways to <span className="coral">get the box</span>.
        </h2>
        <p style={{ fontSize: 17, color:'var(--ink-2)', maxWidth: 600, margin: '0 auto 50px', fontWeight: 500 }}>
          Buy direct for the best price and fastest support — or grab it on Amazon.
        </p>
      </div>
      <div className="wrap" style={{
        display:'grid', gridTemplateColumns:'1.1fr 1fr', gap: 28, alignItems:'stretch',
      }}>
        {/* Direct */}
        <div style={{
          position:'relative',
          background:'linear-gradient(160deg, var(--royal) 0%, var(--royal-2) 100%)',
          color:'#fff',
          border:'4px solid var(--royal-ink)',
          borderRadius:'var(--rad-xl)', padding: '36px 32px',
          boxShadow:'0 10px 0 var(--royal-ink), var(--shadow-pop)',
        }}>
          <span className="sticker yellow" style={{ position:'absolute', top: -16, left: 28 }}>
            ⭐ Best Price · Recommended
          </span>
          <h3 className="display" style={{ color:'#fff', fontSize: 36, marginTop: 14 }}>
            Buy direct from <span style={{color:'var(--yellow)'}}>Quizykoo</span>
          </h3>
          <ul style={{ listStyle:'none', padding: 0, margin:'18px 0 24px', display:'grid', gridTemplateColumns:'1fr 1fr', gap: 12 }}>
            {[
              ['🚚','Free Shipping'],
              ['💳','Razorpay · UPI · Cards'],
              ['💵','Cash on Delivery'],
              ['🔁','7-day easy returns'],
              ['📞','WhatsApp support'],
              ['🎁','Free gift wrap'],
            ].map(([i, l]) => (
              <li key={l} style={{ display:'flex', gap: 10, alignItems:'center', fontFamily:'var(--ff-head)', fontWeight:600, fontSize: 14.5 }}>
                <span style={{ fontSize: 20 }}>{i}</span>{l}
              </li>
            ))}
          </ul>
          <div style={{ display:'flex', alignItems:'center', gap:14, flexWrap:'wrap' }}>
            <div>
              <div style={{ opacity:.7, fontSize: 14, textDecoration:'line-through' }}>₹1,499</div>
              <div className="display" style={{ color:'var(--yellow)', fontSize: 42 }}>₹1,099</div>
            </div>
            <button className="btn btn-yellow" onClick={() => onAdd('box')}>
              Shop the Box
            </button>
          </div>
        </div>

        {/* Amazon */}
        <div style={{
          background:'#fff', border:'4px solid var(--royal)',
          borderRadius:'var(--rad-xl)', padding:'36px 32px',
          boxShadow:'0 10px 0 var(--royal), var(--shadow-soft)',
        }}>
          <span className="sticker">📦 Also Available On</span>
          <h3 className="display" style={{ fontSize: 36, marginTop: 14 }}>
            <span style={{ color: '#FF9900' }}>amazon</span><span style={{ color: 'var(--royal)' }}>.in</span>
          </h3>
          <ul style={{ listStyle:'none', padding: 0, margin:'18px 0 24px', display:'flex', flexDirection:'column', gap: 10 }}>
            {[
              ['⚡','Prime delivery'],
              ['⭐','4.7 stars · 800+ reviews'],
              ['💳','EMI & all payment options'],
            ].map(([i, l]) => (
              <li key={l} style={{ display:'flex', gap: 10, alignItems:'center', fontFamily:'var(--ff-head)', fontWeight:600, color:'var(--royal)' }}>
                <span style={{ fontSize: 20 }}>{i}</span>{l}
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
        @media (max-width: 880px){
          section .wrap[style*="1.1fr 1fr"]{ grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

// ─── Instagram Grid ──────────────────────────────────────────────────────
function InstaGrid() {
  // Use book covers + box image + colorful placeholders as the social tiles
  const tiles = [
    { src:'assets/book-manners.jpg', tag:'#manners' },
    { src:'assets/book-sharing.jpg', tag:'#sharing' },
    { src:'assets/social-skills-box.jpg', tag:'#newbox' },
    { src:'assets/book-friendship.jpg', tag:'#teamwork' },
    { src:'assets/book-listening.jpg', tag:'#listen' },
    { src:'assets/book-respect.jpg', tag:'#kindness' },
  ];
  return (
    <section style={{ padding: '110px 0', background: '#FFFDF7', position:'relative' }}>
      <div className="wrap" style={{ textAlign:'center' }}>
        <span className="sticker purple">📸 @quizykoo on Instagram</span>
        <h2 className="display" style={{ fontSize:'clamp(36px, 4.6vw, 58px)', margin:'14px auto 12px', maxWidth: 900 }}>
          Tag us. Get <span className="coral">featured</span>.
        </h2>
        <p style={{ fontSize: 17, color:'var(--ink-2)', maxWidth: 600, margin: '0 auto 40px', fontWeight: 500 }}>
          We love seeing Quizykoo in your home. Share your moments with #QuizykooKids.
        </p>
        <div style={{
          display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(180px, 1fr))', gap: 14,
        }}>
          {tiles.map((t, i) => (
            <a key={i} href="#" style={{
              position:'relative', display:'block',
              aspectRatio:'1/1', overflow:'hidden',
              borderRadius:'var(--rad-md)', border:'4px solid var(--royal)',
              boxShadow:'0 6px 0 var(--royal)',
              transition: 'transform .25s', transform: 'rotate(0deg)',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = `rotate(${i%2 ? -2 : 2}deg) translateY(-4px)` }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'rotate(0) translateY(0)' }}
            >
              <img src={t.src} alt="" style={{ width:'100%', height:'100%', objectFit:'cover' }}/>
              <span style={{
                position:'absolute', bottom: 8, left: 8,
                background:'#fff', border:'2px solid var(--royal)',
                fontFamily:'var(--ff-head)', fontWeight:700, fontSize: 12,
                padding:'4px 10px', borderRadius: 999, color:'var(--royal)',
              }}>{t.tag}</span>
            </a>
          ))}
        </div>
        <div style={{ marginTop: 28 }}>
          <a href="#" className="btn btn-secondary">Follow @quizykoo</a>
        </div>
      </div>
    </section>
  );
}

// ─── Newsletter + WhatsApp ─────────────────────────────────────────────
function Newsletter() {
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <section style={{
      padding: '90px 0', position:'relative', overflow:'hidden',
      background: 'linear-gradient(135deg, var(--coral) 0%, var(--coral-2) 50%, var(--purple-2) 100%)',
      color:'#fff',
    }}>
      <div className="float spin-slow" style={{ top: 40, right: '8%', opacity:.25 }}>
        <StarBurst size={120} color="#fff"/>
      </div>
      <div className="float bob-slow" style={{ bottom: 30, left: '8%', opacity:.3 }}>
        <Heart size={80} color="#fff"/>
      </div>

      {/* Mascot */}
      <img src="assets/quizykoo-logo.png" alt=""
        className="bob"
        style={{
          position:'absolute', bottom:-30, right:'4%', width: 200, zIndex: 2,
          filter:'drop-shadow(0 12px 24px rgba(0,0,0,.3))',
        }}
      />

      <div className="wrap" style={{ position:'relative', maxWidth: 700, zIndex: 3 }}>
        <span className="sticker yellow" style={{ background:'#fff' }}>💌 Free Parenting Tips</span>
        <h2 className="display" style={{ color:'#fff', fontSize:'clamp(34px, 4.4vw, 54px)', margin:'14px 0 16px' }}>
          Get fun parenting &amp;<br/>
          <span style={{ color:'var(--yellow)' }}>learning ideas</span> weekly.
        </h2>
        <p style={{ fontSize: 17, fontWeight: 500, opacity: .92, maxWidth: 540, marginBottom: 26 }}>
          Bite-sized social-skill activities, kid-friendly recipes for kindness, and the occasional discount. Zero spam.
        </p>

        {!submitted ? (
          <form
            onSubmit={(e) => { e.preventDefault(); if (email) setSubmitted(true); }}
            style={{
              display:'flex', gap: 10, flexWrap:'wrap',
              background:'#fff', borderRadius: 999, padding: 8,
              border:'4px solid var(--royal-ink)',
              boxShadow: '0 6px 0 var(--royal-ink)',
              maxWidth: 520,
            }}>
            <input
              type="email" required placeholder="your@email.com"
              value={email} onChange={e => setEmail(e.target.value)}
              style={{
                flex: 1, minWidth: 200,
                border: 'none', outline:'none', background:'transparent',
                padding: '0 18px', fontSize: 16, fontFamily:'var(--ff-body)', fontWeight: 600,
                color:'var(--royal)',
              }}/>
            <button type="submit" className="btn btn-primary" style={{ padding:'12px 22px' }}>
              Subscribe
            </button>
          </form>
        ) : (
          <div style={{ background:'#fff', color:'var(--royal)', padding:'18px 24px', borderRadius: 999, display:'inline-flex', alignItems:'center', gap: 10, fontFamily:'var(--ff-head)', fontWeight: 700, border:'4px solid var(--royal-ink)' }}>
            🎉 You're in! Check your inbox for a hello from Quizykoo.
          </div>
        )}

        <div style={{ marginTop: 22, display:'flex', gap: 12, flexWrap:'wrap' }}>
          <a href="#" className="btn" style={{
            background:'#25D366', color:'#fff', boxShadow:'0 6px 0 #128C7E',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.5 3.5A11 11 0 0 0 3.6 17l-1.5 5.5 5.6-1.5a11 11 0 0 0 16.6-9.5 10.9 10.9 0 0 0-3.8-8zM12 20.4a9.4 9.4 0 0 1-4.8-1.3l-.3-.2-3.3.9.9-3.2-.2-.4A9.4 9.4 0 1 1 12 20.4zm5.4-7.1c-.3-.1-1.7-.8-2-.9s-.5-.1-.7.1-.8 1-1 1.2-.4.2-.7.1c-1.6-.8-2.7-1.4-3.8-3.3-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5l-.9-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1 2.9 1.2 3.1c.1.2 2.1 3.2 5 4.5 1.8.8 2.5.8 3.3.7.5 0 1.6-.7 1.9-1.3.2-.6.2-1.2.1-1.3-.1-.1-.3-.2-.6-.3z"/>
            </svg>
            Join WhatsApp Updates
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────
function Footer() {
  const cols = [
    { title: 'Shop',    links: ['Social Skills Box', 'Individual Books', 'Bundles', 'Gift Cards'] },
    { title: 'Learn',   links: ['About Quizykoo', 'Our Method', 'Blog', 'FAQs'] },
    { title: 'Support', links: ['Contact', 'WhatsApp Help', 'Shipping Policy', 'Return Policy'] },
  ];
  return (
    <footer style={{
      background:'var(--royal-ink)', color:'#fff', padding:'70px 0 30px',
      position:'relative', overflow:'hidden',
    }}>
      <div className="float drift" style={{ top: 30, left: '5%', opacity:.15 }}>
        <StarBurst size={80} color="var(--yellow)"/>
      </div>
      <div className="float bob-slow" style={{ bottom: 40, right: '8%', opacity:.18 }}>
        <Heart size={60} color="var(--coral)"/>
      </div>

      <div className="wrap" style={{ position:'relative' }}>
        <div style={{
          display:'grid', gridTemplateColumns:'1.4fr 1fr 1fr 1fr', gap: 40, alignItems:'flex-start',
        }} className="footer-grid">
          <div>
            <img src="assets/quizykoo-logo.png" alt="Quizykoo" style={{ height: 80 }}/>
            <p style={{ marginTop: 14, opacity:.78, maxWidth: 320, fontWeight: 500, fontSize: 15 }}>
              Story-led life skills for kids 5–8. Made in India, loved everywhere.
            </p>
            <div style={{ display:'flex', gap: 10, marginTop: 16 }}>
              {['IG','FB','YT','WA'].map(s => (
                <a key={s} href="#" style={{
                  width: 40, height: 40, borderRadius:'50%',
                  background:'rgba(255,255,255,.1)', border:'2px solid rgba(255,255,255,.2)',
                  display:'inline-flex', alignItems:'center', justifyContent:'center',
                  color:'#fff', textDecoration:'none', fontFamily:'var(--ff-head)', fontWeight:700, fontSize: 12,
                }}>{s}</a>
              ))}
            </div>
          </div>
          {cols.map(c => (
            <div key={c.title}>
              <h4 style={{ fontFamily:'var(--ff-display)', fontWeight:800, fontSize: 18, color: 'var(--yellow)', margin:'0 0 14px' }}>
                {c.title}
              </h4>
              <ul style={{ listStyle:'none', padding: 0, margin: 0, display:'flex', flexDirection:'column', gap: 9 }}>
                {c.links.map(l => (
                  <li key={l}><a href="#" style={{ color:'rgba(255,255,255,.78)', textDecoration:'none', fontWeight:500, fontSize: 15 }}>{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 50, paddingTop: 22, borderTop:'1px solid rgba(255,255,255,.12)',
          display:'flex', justifyContent:'space-between', flexWrap:'wrap', gap: 14,
          fontSize: 13.5, opacity:.7, fontWeight: 500,
        }}>
          <div>© 2026 Quizykoo Education Pvt. Ltd. · Made with 💛 in India</div>
          <div style={{ display:'flex', gap: 18 }}>
            <a href="#" style={{ color:'inherit', textDecoration:'none' }}>Privacy</a>
            <a href="#" style={{ color:'inherit', textDecoration:'none' }}>Terms</a>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 880px){
          .footer-grid{ grid-template-columns: 1fr 1fr !important; gap: 30px !important }
        }
        @media (max-width: 520px){
          .footer-grid{ grid-template-columns: 1fr !important }
        }
      `}</style>
    </footer>
  );
}

// Export to window
Object.assign(window, {
  Nav, Marquee, BookShowcase, WhatKidsLearn, WhyParentsLove,
  HowItWorks, BoxContents, Testimonials, WhereToBuy,
  InstaGrid, Newsletter, Footer, BOOKS,
});
