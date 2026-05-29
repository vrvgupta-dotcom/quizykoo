export function burstConfetti() {
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
