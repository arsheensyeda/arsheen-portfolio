// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav__links');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('nav__links--open');
    if (open) {
      navLinks.style.display = 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '100%';
      navLinks.style.left = '0';
      navLinks.style.right = '0';
      navLinks.style.background = 'var(--paper)';
      navLinks.style.padding = '1.2rem 1.5rem';
      navLinks.style.borderBottom = '1px solid rgba(27,21,48,0.08)';
    } else {
      navLinks.style.display = '';
    }
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('nav__links--open');
    navLinks.style.display = '';
  }));
}

// Decorative node grid — small connected dots, echoes the AI/graph theme
const nodeGrid = document.getElementById('nodeGrid');
if (nodeGrid) {
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', '0 0 220 220');
  svg.style.width = '100%';
  svg.style.height = '100%';

  const points = [];
  for (let i = 0; i < 9; i++) {
    points.push({
      x: 20 + Math.random() * 180,
      y: 20 + Math.random() * 180
    });
  }
  points.forEach((p, i) => {
    const next = points[(i + 1) % points.length];
    const line = document.createElementNS(svgNS, 'line');
    line.setAttribute('x1', p.x); line.setAttribute('y1', p.y);
    line.setAttribute('x2', next.x); line.setAttribute('y2', next.y);
    line.setAttribute('stroke', '#8FAE8B');
    line.setAttribute('stroke-width', '0.6');
    line.setAttribute('opacity', '0.5');
    svg.appendChild(line);
  });
  points.forEach(p => {
    const circle = document.createElementNS(svgNS, 'circle');
    circle.setAttribute('cx', p.x); circle.setAttribute('cy', p.y);
    circle.setAttribute('r', 2.5);
    circle.setAttribute('fill', '#E8A33D');
    svg.appendChild(circle);
  });
  nodeGrid.appendChild(svg);
}

// One orchestrated hero load-in moment
window.addEventListener('DOMContentLoaded', () => {
  const els = [
    document.querySelector('.hero__eyebrow'),
    document.querySelector('.hero__headline'),
    document.querySelector('.hero__bio'),
    document.querySelector('.hero__links')
  ];
  els.forEach((el, i) => {
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(14px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 120 + i * 130);
  });
});
