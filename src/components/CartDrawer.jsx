import React from 'react';
import { BOOKS } from '../data/books';

const qtyBtnStyle = {
  width: 26,
  height: 26,
  borderRadius: '50%',
  background: '#fff',
  border: '2px solid var(--royal)',
  cursor: 'pointer',
  color: 'var(--royal)',
  fontFamily: 'var(--ff-head)',
  fontWeight: 800,
  fontSize: 14,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export default function CartDrawer({ open, cart, total, onClose, onRemove, onQty, onAdd }) {
  const recommended = BOOKS.slice(0, 3);

  return (
    <>
      <div className={`drawer-mask ${open ? 'show' : ''}`} onClick={onClose} />
      <aside className={`drawer ${open ? 'show' : ''}`}>
        <div style={{
          padding: '18px 22px',
          borderBottom: '2px solid rgba(14,33,103,.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'var(--cream)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 24 }}>🛍️</span>
            <h3 className="display" style={{ fontSize: 22, margin: 0 }}>Your Cart</h3>
            <span style={{
              background: 'var(--coral)',
              color: '#fff',
              borderRadius: 999,
              padding: '2px 10px',
              fontFamily: 'var(--ff-head)',
              fontWeight: 700,
              fontSize: 13,
            }}>{cart.reduce((s, c) => s + c.qty, 0)}</span>
          </div>
          <button onClick={onClose} style={{
            width: 38,
            height: 38,
            borderRadius: '50%',
            background: '#fff',
            border: '2px solid var(--royal)',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--royal)',
            fontFamily: 'var(--ff-head)',
            fontWeight: 800,
            fontSize: 18,
          }}>×</button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '18px 22px' }}>
          {cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <div style={{ fontSize: 64 }}>🛒</div>
              <h4 className="display" style={{ fontSize: 24, margin: '10px 0 6px' }}>Your cart is empty</h4>
              <p style={{ color: 'var(--ink-2)', fontWeight: 500 }}>Add the Social Skills Box to get started.</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {cart.map(c => (
                <div key={c.id} style={{
                  display: 'flex',
                  gap: 12,
                  alignItems: 'center',
                  background: '#FFF8E7',
                  border: '3px solid var(--royal)',
                  borderRadius: 'var(--rad-md)',
                  padding: 12,
                }}>
                  <img src={c.image} alt="" style={{ width: 62, height: 62, borderRadius: 10, objectFit: 'cover', border: '2px solid #fff' }}/>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'var(--ff-head)', fontWeight: 700, color: 'var(--royal)', fontSize: 14, lineHeight: 1.2 }}>{c.name}</div>
                    <div style={{ marginTop: 4, display: 'flex', alignItems: 'center', gap: 8 }}>
                      <button onClick={() => onQty(c.id, c.qty - 1)} style={qtyBtnStyle}>−</button>
                      <span style={{ fontFamily: 'var(--ff-head)', fontWeight: 700, color: 'var(--royal)' }}>{c.qty}</span>
                      <button onClick={() => onQty(c.id, c.qty + 1)} style={qtyBtnStyle}>+</button>
                      <span style={{ marginLeft: 'auto', fontFamily: 'var(--ff-head)', fontWeight: 800, color: 'var(--coral)' }}>₹{c.price * c.qty}</span>
                    </div>
                  </div>
                  <button onClick={() => onRemove(c.id)} style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--ink-3)',
                    fontSize: 18,
                  }}>×</button>
                </div>
              ))}

              <div style={{ marginTop: 10 }}>
                <div style={{ fontFamily: 'var(--ff-head)', fontWeight: 700, color: 'var(--royal)', marginBottom: 10 }}>
                  ✨ Often bought with:
                </div>
                <div style={{ display: 'flex', gap: 10, overflowX: 'auto', paddingBottom: 6 }}>
                  {recommended.filter(r => !cart.find(c => c.id === r.id)).slice(0, 3).map(r => (
                    <div key={r.id} style={{
                      flex: '0 0 auto',
                      width: 140,
                      background: '#fff',
                      border: '2px solid var(--royal)',
                      borderRadius: 'var(--rad-sm)',
                      padding: 8,
                    }}>
                      <img src={r.cover} alt="" style={{ width: '100%', height: 100, objectFit: 'cover', borderRadius: 8 }}/>
                      <div style={{ fontFamily: 'var(--ff-head)', fontWeight: 700, fontSize: 12, color: 'var(--royal)', margin: '6px 0 4px', lineHeight: 1.2 }}>{r.title}</div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontFamily: 'var(--ff-head)', fontWeight: 700, color: 'var(--coral)', fontSize: 13 }}>₹299</span>
                        <button onClick={() => onAdd(r.id)} style={{
                          background: 'var(--yellow)',
                          border: '2px solid var(--royal)',
                          borderRadius: 999,
                          padding: '2px 10px',
                          fontFamily: 'var(--ff-head)',
                          fontWeight: 700,
                          fontSize: 12,
                          color: 'var(--royal)',
                          cursor: 'pointer',
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
            borderTop: '2px solid rgba(14,33,103,.08)',
            padding: '18px 22px',
            background: '#FFFDF7',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
              <span style={{ fontFamily: 'var(--ff-head)', fontWeight: 700, color: 'var(--ink-2)' }}>Subtotal</span>
              <span className="display" style={{ fontSize: 24, color: 'var(--coral)' }}>₹{total}</span>
            </div>
            <div style={{ display: 'flex', gap: 6, marginBottom: 12, fontSize: 12, color: 'var(--ink-2)', fontWeight: 600 }}>
              <span style={{ background: 'var(--green)', color: '#fff', padding: '2px 8px', borderRadius: 999 }}>FREE Shipping</span>
              <span style={{ background: 'var(--royal)', color: '#fff', padding: '2px 8px', borderRadius: 999 }}>COD Available</span>
            </div>
            <button
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => alert('Checkout flow — placeholder. Razorpay integration goes here.')}
            >
              Checkout · ₹{total}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
