/* ============================================
   THE LOFT & SPA PLY — main.js
   Menú móvil, scroll reveal, FAQ, navbar, FAB WA
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---------- Mobile Menu (Drawer) ----------
  const menuBtn = document.getElementById('menu-toggle');
  const closeBtn = document.getElementById('menu-close');
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('mobile-overlay');

  function openMenu() {
    drawer.classList.add('active');
    overlay.classList.add('active');
    menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (menuBtn) menuBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);

  // Close drawer on link click
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // ---------- Navbar scroll effect ----------
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
    // Check on load
    if (window.scrollY > 60) navbar.classList.add('scrolled');
  }

  // ---------- Scroll Reveal (IntersectionObserver) ----------
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (revealElements.length > 0) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }

  // ---------- FAQ Accordion ----------
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isActive = item.classList.contains('active');

      // Close all FAQ items in the same group
      const parent = item.parentElement;
      parent.querySelectorAll('.faq-item').forEach(faq => {
        faq.classList.remove('active');
        faq.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      // Toggle current
      if (!isActive) {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ---------- Promo Filters ----------
  const filterBtns = document.querySelectorAll('.promo-filter-btn');
  const promoCards = document.querySelectorAll('.promo-card');

  if (filterBtns.length > 0 && promoCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active filter
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        promoCards.forEach(card => {
          if (filter === 'all' || card.dataset.category === filter) {
            card.style.display = '';
            // Trigger animation
            card.style.opacity = '0';
            card.style.transform = 'translateY(10px)';
            requestAnimationFrame(() => {
              card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            });
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // ---------- WhatsApp helper ----------
  window.openWhatsApp = function(service) {
    const phone = '527771594874';
    const msg = `Hola 👋, quiero agendar una cita en THE LOFT & SPA PLY. Me interesa: ${service}. ¿Qué horarios tienen?`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  // ---------- Hero canvas animation ----------
  const heroCanvas = document.getElementById('hero-canvas');
  if (heroCanvas) {
    const ctx = heroCanvas.getContext('2d');
    const GOLD = '201,168,76';

    function resize() {
      heroCanvas.width = heroCanvas.offsetWidth;
      heroCanvas.height = heroCanvas.offsetHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    // Small rising particles
    const particles = Array.from({ length: 160 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.8 + 0.4,
      alpha: Math.random() * 0.55 + 0.08,
      speed: Math.random() * 0.00025 + 0.00008,
      drift: (Math.random() - 0.5) * 0.00012,
    }));

    // Large bokeh orbs
    const orbs = Array.from({ length: 5 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 0.18 + 0.07,
      alpha: Math.random() * 0.07 + 0.02,
      speed: Math.random() * 0.00012 + 0.00004,
      drift: (Math.random() - 0.5) * 0.00006,
    }));

    function draw() {
      const w = heroCanvas.width, h = heroCanvas.height;
      ctx.clearRect(0, 0, w, h);

      // Background
      ctx.fillStyle = '#0A0A0A';
      ctx.fillRect(0, 0, w, h);

      // Subtle diagonal light sweep
      const sweep = ctx.createLinearGradient(0, h, w, 0);
      sweep.addColorStop(0, `rgba(${GOLD},0)`);
      sweep.addColorStop(0.5, `rgba(${GOLD},0.04)`);
      sweep.addColorStop(1, `rgba(${GOLD},0)`);
      ctx.fillStyle = sweep;
      ctx.fillRect(0, 0, w, h);

      // Bokeh orbs
      for (const o of orbs) {
        const ox = o.x * w, oy = o.y * h, or = o.r * Math.min(w, h);
        const g = ctx.createRadialGradient(ox, oy, 0, ox, oy, or);
        g.addColorStop(0, `rgba(${GOLD},${o.alpha})`);
        g.addColorStop(1, `rgba(${GOLD},0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(ox, oy, or, 0, Math.PI * 2);
        ctx.fill();
        o.y -= o.speed;
        o.x += o.drift;
        if (o.y + o.r < 0) { o.y = 1 + o.r; o.x = Math.random(); }
        if (o.x < -o.r) o.x = 1 + o.r;
        if (o.x > 1 + o.r) o.x = -o.r;
      }

      // Particles
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x * w, p.y * h, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${GOLD},${p.alpha})`;
        ctx.fill();
        p.y -= p.speed;
        p.x += p.drift;
        if (p.y * h + p.r < 0) { p.y = 1 + p.r / h; p.x = Math.random(); }
        if (p.x < -p.r / w) p.x = 1 + p.r / w;
        if (p.x > 1 + p.r / w) p.x = -p.r / w;
      }

      requestAnimationFrame(draw);
    }
    draw();
  }

});
