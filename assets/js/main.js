/* ============================================================
   MARINZE PORTFOLIO — MAIN JS
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Sticky Nav ── */
  const header = document.getElementById('site-header');
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ── Mobile Menu ── */
  const hamburger = document.querySelector('.nav-hamburger');
  const navLinks  = document.querySelector('.nav-links');
  if (hamburger && navLinks) {
    const toggleMenu = (open) => {
      navLinks.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', String(navLinks.classList.contains('open')));
      document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    };
    hamburger.addEventListener('click', () => toggleMenu());
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => toggleMenu(false));
    });
    // Close on Escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && navLinks.classList.contains('open')) toggleMenu(false);
    });
  }

  /* ── Scroll Animations ── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  /* ── Screenshot Lightbox ── */
  document.querySelectorAll('.project-screen-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      const hero = thumb.closest('.project-screenshots-inner').querySelector('.project-screen-hero');
      const src  = thumb.getAttribute('data-full') || thumb.src;
      if (hero) {
        hero.style.opacity = '0';
        hero.style.transition = 'opacity .2s';
        setTimeout(() => {
          hero.src = src;
          hero.style.opacity = '1';
        }, 200);
      }
    });
  });

  /* ── Contact Form Submission ── */
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('.form-submit');
      btn.textContent = 'Sending…';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = '✓ Message Sent!';
        btn.style.background = '#22c55e';
        form.reset();
        setTimeout(() => {
          btn.textContent = 'Send Message';
          btn.style.background = '';
          btn.disabled = false;
        }, 4000);
      }, 1200);
    });
  }

  /* ── Smooth active nav link highlight ── */
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
  const highlightNav = () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    navAnchors.forEach(a => {
      a.style.color = a.getAttribute('href') === '#' + current
        ? 'var(--white)'
        : '';
    });
  };
  window.addEventListener('scroll', highlightNav, { passive: true });
});
