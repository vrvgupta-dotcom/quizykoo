import React, { useState, useCallback } from 'react';
import { BOOKS } from './data/books';
import { burstConfetti } from './utils/confetti';

import Nav from './components/Nav';
import Marquee from './components/Marquee';
import HeroCloudStage from './components/Hero/HeroCloudStage';
import HeroSpotlight from './components/Hero/HeroSpotlight';
import HeroPlayground from './components/Hero/HeroPlayground';
import BookShowcase from './components/BookShowcase';
import WhatKidsLearn from './components/WhatKidsLearn';
import HowItWorks from './components/HowItWorks';
import BoxContents from './components/BoxContents';
import WhyParentsLove from './components/WhyParentsLove';
import Testimonials from './components/Testimonials';
import WhereToBuy from './components/WhereToBuy';
import InstaGrid from './components/InstaGrid';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import MascotFloater from './components/MascotFloater';

export default function App() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = useCallback((id) => {
    let item;
    if (id === 'box') {
      item = { id: 'box', name: 'Quizykoo Social Skills Box', price: 1099, image: 'assets/social-skills-box.jpg' };
    } else {
      const b = BOOKS.find(x => x.id === id);
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

  const scrollToBooks = () => {
    document.getElementById('the-5-books')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <Nav cartCount={cartCount} onOpenCart={() => setCartOpen(true)} />
      <Marquee />
      <HeroCloudStage onShop={() => addToCart('box')} onExplore={scrollToBooks} />
      <BookShowcase onAdd={addToCart} />
      <WhatKidsLearn />
      <HowItWorks />
      <BoxContents onAdd={addToCart} />
      <WhyParentsLove />
      <Testimonials />
      <WhereToBuy onAdd={addToCart} />
      <InstaGrid />
      <Newsletter />
      <Footer />

      <div className="mobile-cta">
        <img
          src="assets/social-skills-box.jpg"
          alt=""
          style={{ width: 50, height: 50, borderRadius: 10, objectFit: 'cover', border: '2px solid var(--royal)' }}
        />
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: 'var(--ff-head)', fontWeight: 700, color: 'var(--royal)', fontSize: 14, lineHeight: 1.1 }}>
            Social Skills Box
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
            <span className="display" style={{ fontSize: 18, color: 'var(--coral)' }}>₹1,099</span>
            <span style={{ textDecoration: 'line-through', color: 'var(--ink-3)', fontSize: 12, fontWeight: 700 }}>₹1,499</span>
          </div>
        </div>
        <button className="btn btn-primary" onClick={() => addToCart('box')} style={{ padding: '12px 20px', fontSize: 15 }}>
          Add
        </button>
      </div>

      <MascotFloater />

      <CartDrawer
        open={cartOpen}
        cart={cart}
        total={cartTotal}
        onClose={() => setCartOpen(false)}
        onRemove={removeFromCart}
        onQty={setQty}
        onAdd={addToCart}
      />
    </>
  );
}
