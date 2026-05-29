// app.jsx — Quizykoo homepage assembly + cart + confetti + tweaks

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "hero": "cloud-stage",
  "showStickyCTA": true,
  "mascotFloater": true
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Cart state
  const [cart, setCart] = React.useState([]);
  const [cartOpen, setCartOpen] = React.useState(false);

  const addToCart = React.useCallback((id) => {
    let item;
    if (id === 'box') {
      item = { id: 'box', name: 'Quizykoo Social Skills Box', price: 1099, image: 'assets/social-skills-box.jpg' };
    } else {
      const b = window.BOOKS.find(x => x.id === id);
      if (!b) return;
      item = { id: b.id, name: b.title, price: 299, image: b.cover };
    }
    setCart(prev => {
      const found = prev.find(c => c.id === item.id);
      if (found) return prev.map(c => c.id === item.id ? { ...c, qty: c.qty + 1 } : c);
      return [...prev, { ...item, qty: 1 }];
    });
    burstConfetti();
    setTimeout(() => setCartOpen(true), 380);
  }, []);

  const removeFromCart = (id) => setCart(prev => prev.filter(c => c.id !== id));
  const setQty = (id, qty) => setCart(prev => prev.map(c => c.id === id ? { ...c, qty: Math.max(1, qty) } : c));
  const cartCount = cart.reduce((s, c) => s + c.qty, 0);
  const cartTotal = cart.reduce((s, c) => s + c.qty * c.price, 0);

  // Choose hero
  const Hero =
    t.hero === 'spotlight'  ? window.HeroSpotlight :
    t.hero === 'playground' ? window.HeroPlayground :
                              window.HeroCloudStage;

  return (
    <>
      <Nav cartCount={cartCount} onOpenCart={() => setCartOpen(true)}/>
      <Marquee/>
      <Hero
        onShop={() => addToCart('box')}
        onExplore={() => document.getElementById('the-5-books').scrollIntoView({ behavior:'smooth', block:'start' })}
      />
      <BookShowcase onAdd={addToCart}/>
      <WhatKidsLearn/>
      <HowItWorks/>
      <BoxContents onAdd={addToCart}/>
      <WhyParentsLove/>
      <Testimonials/>
      <WhereToBuy onAdd={addToCart}/>
      <InstaGrid/>
      <Newsletter/>
      <Footer/>

      {/* Mobile sticky CTA */}
      {t.showStickyCTA && (
        <div className="mobile-cta">
          <img src="assets/social-skills-box.jpg" alt="" style={{ width: 50, height: 50, borderRadius: 10, objectFit:'cover', border:'2px solid var(--royal)' }}/>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily:'var(--ff-head)', fontWeight:700, color:'var(--royal)', fontSize: 14, lineHeight: 1.1 }}>Social Skills Box</div>
            <div style={{ display:'flex', alignItems:'baseline', gap: 6 }}>
              <span className="display" style={{ fontSize: 18, color:'var(--coral)' }}>₹1,099</span>
              <span style={{ textDecoration:'line-through', color:'var(--ink-3)', fontSize: 12, fontWeight: 700 }}>₹1,499</span>
            </div>
          </div>
          <button className="btn btn-primary" onClick={() => addToCart('box')} style={{ padding:'12px 20px', fontSize: 15 }}>Add</button>
        </div>
      )}

      {/* Floating mascot helper */}
      {t.mascotFloater && <MascotFloater/>}

      {/* Cart drawer */}
      <CartDrawer
        open={cartOpen}
        cart={cart}
        total={cartTotal}
        onClose={() => setCartOpen(false)}
        onRemove={removeFromCart}
        onQty={setQty}
        onAdd={addToCart}
      />

      {/* Tweaks */}
      <TweaksPanel>
        <TweakSection label="Hero Variation"/>
        <TweakRadio
          label="Layout"
          value={t.hero}
          options={[
            { value:'cloud-stage', label:'Cloud Stage' },
            { value:'spotlight',   label:'Split Spotlight' },
            { value:'playground',  label:'Playground' },
          ]}
          onChange={v => setTweak('hero', v)}
        />
        <TweakSection label="Extras"/>
        <TweakToggle label="Mobile sticky CTA" value={t.showStickyCTA} onChange={v => setTweak('showStickyCTA', v)} />
        <TweakToggle label="Floating mascot helper" value={t.mascotFloater} onChange={v => setTweak('mascotFloater', v)} />
      </TweaksPanel>
    </>
  );
}

// ─── Floating mascot helper (peeks from corner, shows tip on click) ──────
function MascotFloater() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const id = setTimeout(() => setOpen(true), 6000);
    return () => clearTimeout(id);
  }, []);

  return (
    <div style={{
      position:'fixed', bottom: 24, left: 24, zIndex: 70,
      display:'flex', alignItems:'flex-end', gap: 10,
    }} className="mascot-floater">
      {open && (
        <div style={{
          background:'#fff', border:'4px solid var(--royal)', color:'var(--royal)',
          padding:'12px 16px', borderRadius: 'var(--rad-md)',
          fontFamily:'var(--ff-head)', fontWeight: 700, fontSize: 14,
          maxWidth: 240, boxShadow:'0 6px 0 var(--royal)',
          position:'relative',
          animation: 'pop-in .4s cubic-bezier(.34,1.56,.64,1)',
        }}>
          <button onClick={() => setOpen(false)} style={{
            position:'absolute', top: -10, right: -10,
            width: 24, height: 24, borderRadius:'50%',
            background:'var(--coral)', color:'#fff', border:'2px solid var(--royal)',
            cursor:'pointer', fontSize: 12, fontWeight: 800,
          }}>×</button>
          Psst! 🎁 Get 27% off the full Social Skills Box today.
        </div>
      )}
      <button
        onClick={() => setOpen(o => !o)}
        className="bob"
        style={{
          width: 84, height: 84, borderRadius:'50%',
          background:'var(--yellow)', border:'4px solid var(--royal)',
          cursor:'pointer', padding: 0, overflow:'hidden',
          boxShadow:'0 6px 0 var(--royal-ink), 0 14px 28px -8px rgba(14,33,103,.5)',
        }} aria-label="Quizykoo mascot">
        <img src="assets/quizykoo-logo.png" alt="" style={{ width:'140%', height:'140%', objectFit:'cover', objectPosition:'center 18%', transform:'translate(-14%, -10%)' }}/>
      </button>
      <style>{`
        @media (max-width: 760px){ .mascot-floater{ bottom: 96px; transform: scale(.85); transform-origin: bottom left } }
      `}</style>
    </div>
  );
}

// ─── Cart drawer ────────────────────────────────────────────────────────
function CartDrawer({ open, cart, total, onClose, onRemove, onQty, onAdd }) {
  const recommended = window.BOOKS.slice(0, 3);

  return (
    <>
      <div className={`drawer-mask ${open ? 'show' : ''}`} onClick={onClose} />
      <aside className={`drawer ${open ? 'show' : ''}`}>
        <div style={{
          padding:'18px 22px', borderBottom:'2px solid rgba(14,33,103,.08)',
          display:'flex', alignItems:'center', justifyContent:'space-between',
          background: 'var(--cream)',
        }}>
          <div style={{ display:'flex', alignItems:'center', gap: 10 }}>
            <span style={{ fontSize: 24 }}>🛍️</span>
            <h3 className="display" style={{ fontSize: 22, margin: 0 }}>Your Cart</h3>
            <span style={{
              background: 'var(--coral)', color:'#fff', borderRadius: 999,
              padding:'2px 10px', fontFamily:'var(--ff-head)', fontWeight: 700, fontSize: 13,
            }}>{cart.reduce((s,c) => s + c.qty, 0)}</span>
          </div>
          <button onClick={onClose} style={{
            width: 38, height: 38, borderRadius:'50%',
            background:'#fff', border:'2px solid var(--royal)', cursor:'pointer',
            display:'inline-flex', alignItems:'center', justifyContent:'center',
            color:'var(--royal)', fontFamily:'var(--ff-head)', fontWeight: 800, fontSize: 18,
          }}>×</button>
        </div>

        <div style={{ flex: 1, overflowY:'auto', padding: '18px 22px' }}>
          {cart.length === 0 ? (
            <div style={{ textAlign:'center', padding:'40px 0' }}>
              <div style={{ fontSize: 64 }}>🛒</div>
              <h4 className="display" style={{ fontSize: 24, margin: '10px 0 6px' }}>Your cart is empty</h4>
              <p style={{ color:'var(--ink-2)', fontWeight: 500 }}>Add the Social Skills Box to get started.</p>
            </div>
          ) : (
            <div style={{ display:'flex', flexDirection:'column', gap: 14 }}>
              {cart.map(c => (
                <div key={c.id} style={{
                  display:'flex', gap: 12, alignItems:'center',
                  background:'#FFF8E7', border:'3px solid var(--royal)',
                  borderRadius:'var(--rad-md)', padding: 12,
                }}>
                  <img src={c.image} alt="" style={{ width: 62, height: 62, borderRadius: 10, objectFit:'cover', border:'2px solid #fff' }}/>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily:'var(--ff-head)', fontWeight:700, color:'var(--royal)', fontSize: 14, lineHeight: 1.2 }}>{c.name}</div>
                    <div style={{ marginTop: 4, display:'flex', alignItems:'center', gap: 8 }}>
                      <button onClick={() => onQty(c.id, c.qty - 1)} style={qtyBtnStyle}>−</button>
                      <span style={{ fontFamily:'var(--ff-head)', fontWeight: 700, color:'var(--royal)' }}>{c.qty}</span>
                      <button onClick={() => onQty(c.id, c.qty + 1)} style={qtyBtnStyle}>+</button>
                      <span style={{ marginLeft: 'auto', fontFamily:'var(--ff-head)', fontWeight: 800, color:'var(--coral)' }}>₹{c.price * c.qty}</span>
                    </div>
                  </div>
                  <button onClick={() => onRemove(c.id)} style={{
                    background:'transparent', border:'none', cursor:'pointer',
                    color: 'var(--ink-3)', fontSize: 18,
                  }}>×</button>
                </div>
              ))}

              {/* Upsell */}
              <div style={{ marginTop: 10 }}>
                <div style={{ fontFamily:'var(--ff-head)', fontWeight: 700, color:'var(--royal)', marginBottom: 10 }}>
                  ✨ Often bought with:
                </div>
                <div style={{ display:'flex', gap: 10, overflowX:'auto', paddingBottom: 6 }}>
                  {recommended.filter(r => !cart.find(c => c.id === r.id)).slice(0,3).map(r => (
                    <div key={r.id} style={{
                      flex:'0 0 auto', width: 140,
                      background:'#fff', border:'2px solid var(--royal)',
                      borderRadius: 'var(--rad-sm)', padding: 8,
                    }}>
                      <img src={r.cover} alt="" style={{ width:'100%', height: 100, objectFit:'cover', borderRadius: 8 }}/>
                      <div style={{ fontFamily:'var(--ff-head)', fontWeight: 700, fontSize: 12, color:'var(--royal)', margin:'6px 0 4px', lineHeight: 1.2 }}>{r.title}</div>
                      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                        <span style={{ fontFamily:'var(--ff-head)', fontWeight: 700, color:'var(--coral)', fontSize: 13 }}>₹299</span>
                        <button onClick={() => onAdd(r.id)} style={{
                          background: 'var(--yellow)', border: '2px solid var(--royal)',
                          borderRadius: 999, padding:'2px 10px',
                          fontFamily:'var(--ff-head)', fontWeight: 700, fontSize: 12, color:'var(--royal)',
                          cursor:'pointer',
                        }}>+ Add</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div style={{
            borderTop:'2px solid rgba(14,33,103,.08)', padding:'18px 22px',
            background:'#FFFDF7',
          }}>
            <div style={{ display:'flex', justifyContent:'space-between', marginBottom: 12 }}>
              <span style={{ fontFamily:'var(--ff-head)', fontWeight: 700, color:'var(--ink-2)' }}>Subtotal</span>
              <span className="display" style={{ fontSize: 24, color:'var(--coral)' }}>₹{total}</span>
            </div>
            <div style={{ display:'flex', gap: 6, marginBottom: 12, fontSize: 12, color:'var(--ink-2)', fontWeight: 600 }}>
              <span style={{ background:'var(--green)', color:'#fff', padding:'2px 8px', borderRadius: 999 }}>FREE Shipping</span>
              <span style={{ background:'var(--royal)', color:'#fff', padding:'2px 8px', borderRadius: 999 }}>COD Available</span>
            </div>
            <button className="btn btn-primary" style={{ width:'100%', justifyContent:'center' }} onClick={() => {
              alert('Checkout flow — placeholder. Razorpay integration goes here.');
            }}>
              Checkout · ₹{total}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </button>
          </div>
        )}
      </aside>
    </>
  );
}

const qtyBtnStyle = {
  width: 26, height: 26, borderRadius:'50%',
  background:'#fff', border:'2px solid var(--royal)',
  cursor:'pointer', color:'var(--royal)',
  fontFamily:'var(--ff-head)', fontWeight: 800, fontSize: 14,
  display:'inline-flex', alignItems:'center', justifyContent:'center',
};

// ─── Confetti burst ────────────────────────────────────────────────────
function burstConfetti() {
  const colors = ['#FFD23D', '#E83265', '#4DB94F', '#7A2DA6', '#6BC8FF', '#FF5C8A'];
  const N = 60;
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2 - 50;
  for (let i = 0; i < N; i++) {
    const el = document.createElement('div');
    el.className = 'confetti';
    el.style.background = colors[i % colors.length];
    el.style.left = `${cx}px`;
    el.style.top = `${cy}px`;
    el.style.borderRadius = i % 3 === 0 ? '50%' : '3px';
    const dx = (Math.random() - 0.5) * window.innerWidth * 1.2;
    const dur = 1.2 + Math.random() * 0.8;
    el.style.setProperty('--dx', `${dx}px`);
    el.style.animation = `confetti-fall ${dur}s cubic-bezier(.2,.6,.4,1) forwards`;
    el.style.transform = `rotate(${Math.random() * 360}deg)`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), dur * 1000 + 100);
  }
}

// Mount
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
