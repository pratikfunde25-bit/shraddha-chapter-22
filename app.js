/**
 * ═══════════════════════════════════════════════════════════════
 *  SHRADDHA — CHAPTER 22
 *  Main Application Script
 * ═══════════════════════════════════════════════════════════════
 */

'use strict';

/* ── CONFIG SAFETY CHECK ─────────────────────────────────────── */
if (typeof SITE_CONFIG === 'undefined') {
  console.error('[Shraddha] config.js not loaded. Check script order.');
}

const CFG = SITE_CONFIG;

/* ── GLOBAL STATE ────────────────────────────────────────────── */
let siteRevealed    = false;
let countdownTimer  = null;
let lastSecs        = -1;
let audioPlaying    = false;
let lightboxImages  = [];
let lightboxIndex   = 0;
let giftOpened      = false;
let touchStartX     = 0;

/* ─────────────────────────────────────────────────────────────
   INIT
   ───────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initPetals();
  initParticles();
  initHeroReveal();
  initScrollReveal();
  initProgressBar();
  initMusic();
  buildTimeline();
  buildLoveNotes();
  populateLetter();
  startCountdown();
  initLightboxSwipe();
  initKeyboard();
});

/* ─────────────────────────────────────────────────────────────
   HERO — OPEN SURPRISE
   ───────────────────────────────────────────────────────────── */
function openSurprise() {
  if (siteRevealed) return;
  siteRevealed = true;

  const hero    = document.getElementById('hero');
  const main    = document.getElementById('main-content');
  const btn     = document.getElementById('open-surprise-btn');

  // Button animation
  btn.style.transform   = 'scale(0.95)';
  btn.style.opacity     = '0.7';
  btn.disabled          = true;

  // Fade hero then reveal main
  setTimeout(() => {
    hero.style.transition = 'opacity 1s ease, transform 1s ease';
    hero.style.opacity    = '0';
    hero.style.transform  = 'scale(1.04)';
  }, 200);

  setTimeout(() => {
    hero.style.pointerEvents = 'none';
    main.classList.remove('site-hidden');
    main.classList.add('site-visible');

    // Smooth scroll to countdown
    setTimeout(() => {
      document.getElementById('countdown').scrollIntoView({ behavior: 'smooth' });
    }, 400);
  }, 1000);
}

/* ─────────────────────────────────────────────────────────────
   HERO ANIMATIONS — PETALS & PARTICLES
   ───────────────────────────────────────────────────────────── */
function initPetals() {
  const container = document.getElementById('petals');
  if (!container) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const count = window.innerWidth < 600 ? 8 : 16;

  for (let i = 0; i < count; i++) {
    const petal = document.createElement('div');
    petal.className = 'petal';

    const size   = 6 + Math.random() * 10;
    const left   = Math.random() * 100;
    const delay  = Math.random() * 12;
    const dur    = 10 + Math.random() * 15;

    petal.style.cssText = `
      width: ${size}px;
      height: ${size * 1.4}px;
      left: ${left}%;
      animation-duration: ${dur}s;
      animation-delay: ${delay}s;
      opacity: ${0.3 + Math.random() * 0.5};
    `;

    container.appendChild(petal);
  }
}

function initParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const count = 12;

  for (let i = 0; i < count; i++) {
    const p    = document.createElement('div');
    p.className = 'particle';

    const left  = Math.random() * 100;
    const delay = Math.random() * 15;
    const dur   = 8 + Math.random() * 12;
    const size  = 2 + Math.random() * 3;
    const gold  = Math.random() > 0.5;

    p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${left}%;
      animation-duration: ${dur}s;
      animation-delay: ${delay}s;
      background: ${gold ? '#D8B878' : '#C66B85'};
      opacity: ${0.3 + Math.random() * 0.5};
    `;

    container.appendChild(p);
  }
}

/* ─────────────────────────────────────────────────────────────
   HERO ENTRANCE REVEAL
   ───────────────────────────────────────────────────────────── */
function initHeroReveal() {
  const els = document.querySelectorAll('#hero .reveal-up');
  els.forEach(el => {
    const delay = parseFloat(getComputedStyle(el).getPropertyValue('--delay') || '0');
    setTimeout(() => {
      el.classList.add('in-view');
    }, delay * 1000);
  });
}

/* ─────────────────────────────────────────────────────────────
   SCROLL-TRIGGERED REVEAL
   ───────────────────────────────────────────────────────────── */
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('in-view');
          }, i * 60);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  // Observe all reveal-up elements not in hero
  document.querySelectorAll('main .reveal-up').forEach(el => {
    observer.observe(el);
  });
}

/* ─────────────────────────────────────────────────────────────
   PROGRESS BAR
   ───────────────────────────────────────────────────────────── */
function initProgressBar() {
  const bar = document.getElementById('progress-bar');
  if (!bar) return;

  const update = () => {
    const doc    = document.documentElement;
    const total  = doc.scrollHeight - doc.clientHeight;
    const scroll = window.scrollY;
    bar.style.width = total > 0 ? `${(scroll / total) * 100}%` : '0%';
  };

  window.addEventListener('scroll', update, { passive: true });
}

/* ─────────────────────────────────────────────────────────────
   COUNTDOWN — 28 OCTOBER 2026, 00:00:00 IST
   ───────────────────────────────────────────────────────────── */
function startCountdown() {
  const updateCountdown = () => {
    const now    = new Date();
    // Target: 28 Oct 2026 00:00:00 IST = UTC+5:30
    // IST offset = 5.5 hours = 19800 seconds
    const target = new Date('2026-10-28T00:00:00+05:30');
    const diff   = target - now;

    const cdDays  = document.getElementById('cd-days');
    const cdHours = document.getElementById('cd-hours');
    const cdMins  = document.getElementById('cd-mins');
    const cdSecs  = document.getElementById('cd-secs');
    const banner  = document.getElementById('birthday-message');
    const grid    = document.getElementById('countdown-grid');
    const heading = document.getElementById('countdown-heading');

    if (!cdDays) return;

    if (diff <= 0) {
      // Birthday is here or passed!
      cdDays.textContent  = '00';
      cdHours.textContent = '00';
      cdMins.textContent  = '00';
      cdSecs.textContent  = '00';
      grid.style.display  = 'none';
      banner.classList.remove('hidden');
      if (heading) heading.textContent = "IT'S YOUR BIRTHDAY, SHRADDHA! 🎉";
      clearInterval(countdownTimer);
      return;
    }

    const totalSecs = Math.floor(diff / 1000);
    const days      = Math.floor(totalSecs / 86400);
    const hours     = Math.floor((totalSecs % 86400) / 3600);
    const mins      = Math.floor((totalSecs % 3600) / 60);
    const secs      = totalSecs % 60;

    const pad = n => String(n).padStart(2, '0');

    setCountdownNum(cdDays,  pad(days));
    setCountdownNum(cdHours, pad(hours));
    setCountdownNum(cdMins,  pad(mins));

    // Animate seconds with flip
    if (secs !== lastSecs) {
      lastSecs = secs;
      cdSecs.textContent = pad(secs);
      cdSecs.classList.remove('flip');
      void cdSecs.offsetWidth;
      cdSecs.classList.add('flip');
    }
  };

  function setCountdownNum(el, val) {
    if (el.textContent !== val) {
      el.textContent = val;
      el.classList.remove('flip');
      void el.offsetWidth;
      el.classList.add('flip');
    }
  }

  updateCountdown();
  countdownTimer = setInterval(updateCountdown, 1000);

  // Pause when tab is hidden, resume when visible
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      clearInterval(countdownTimer);
    } else {
      updateCountdown();
      countdownTimer = setInterval(updateCountdown, 1000);
    }
  });
}

/* ─────────────────────────────────────────────────────────────
   BUILD TIMELINE — 22 MEMORIES
   ───────────────────────────────────────────────────────────── */
function buildTimeline() {
  const container = document.getElementById('timeline');
  if (!container || !CFG.memories) return;

  CFG.memories.forEach((mem, idx) => {
    const isFeature = !!mem.feature;
    const layout    = isFeature ? 'feature' : (idx % 2 === 0 ? 'left' : 'right');

    const card = document.createElement('div');
    card.className = `memory-card ${layout} reveal-up`;
    card.style.setProperty('--delay', `${(idx % 5) * 0.08}s`);

    const numStr  = String(mem.id).padStart(2, '0');
    const hasImg  = mem.image && mem.image.trim() !== '';
    const hasDate = mem.date && mem.date.trim() !== '';
    const hasQuote = mem.quote && mem.quote.trim() !== '';

    // Visual column
    const visualHTML = hasImg
      ? `<div class="memory-visual">
           <div class="memory-img-wrap" onclick="openLightboxFromMemory(${idx})" role="button" tabindex="0" aria-label="Open photo for ${escapeHtml(mem.title)}" onkeypress="if(event.key==='Enter')openLightboxFromMemory(${idx})">
             <img src="${mem.image}" alt="${escapeHtml(mem.imageAlt || mem.title)}" loading="lazy" />
           </div>
         </div>`
      : `<div class="memory-visual">
           <div class="memory-placeholder">
             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
             <span>Add your photo here</span>
             <span style="font-size:0.7rem;opacity:0.5">${escapeHtml(mem.title)}</span>
           </div>
         </div>`;

    const contentHTML = `
      <div class="memory-content">
        <span class="memory-num">Memory ${numStr}</span>
        <h3 class="memory-title">${escapeHtml(mem.title)}</h3>
        <p class="memory-caption">${escapeHtml(mem.caption)}</p>
        ${hasDate ? `<p class="memory-date">${escapeHtml(mem.date)}</p>` : ''}
        ${hasQuote ? `<p class="memory-quote">"${escapeHtml(mem.quote)}"</p>` : ''}
      </div>
    `;

    const dotHTML = `
      <div class="memory-dot-wrap">
        <div class="memory-dot" aria-hidden="true">${numStr}</div>
      </div>
    `;

    if (isFeature) {
      card.innerHTML = `${dotHTML}${contentHTML}${visualHTML}`;
    } else if (layout === 'left') {
      card.innerHTML = `${contentHTML}${dotHTML}${visualHTML}`;
    } else {
      card.innerHTML = `${visualHTML}${dotHTML}${contentHTML}`;
    }

    container.appendChild(card);
  });

  // Re-observe newly added elements for scroll reveal
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
  );

  container.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
}

/* ─────────────────────────────────────────────────────────────
   BUILD LOVE NOTES
   ───────────────────────────────────────────────────────────── */
function buildLoveNotes() {
  const grid = document.getElementById('love-notes-grid');
  if (!grid || !CFG.loveNotes) return;

  CFG.loveNotes.forEach((note, idx) => {
    const card = document.createElement('div');
    card.className  = 'love-note-card reveal-up';
    card.role       = 'listitem';
    card.tabIndex   = 0;
    card.setAttribute('aria-label', `Love note ${note.id} — tap to reveal`);
    card.style.setProperty('--delay', `${(idx % 6) * 0.05}s`);

    const numStr = String(note.id).padStart(2, '0');

    card.innerHTML = `
      <span class="note-num">${numStr}</span>
      <div class="note-icon" aria-hidden="true">${note.icon}</div>
      <p class="note-front-text">Tap to reveal ✨</p>
      <p class="note-back-text">${escapeHtml(note.text)}</p>
    `;

    card.addEventListener('click', () => toggleNote(card));
    card.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleNote(card);
      }
    });

    grid.appendChild(card);
  });

  // Observe for scroll reveal
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('in-view'), i * 40);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.05 }
  );

  grid.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));
}

function toggleNote(card) {
  card.classList.toggle('open');
  const isOpen = card.classList.contains('open');
  card.setAttribute('aria-label', isOpen ? 'Love note revealed' : 'Tap to reveal');
}

/* ─────────────────────────────────────────────────────────────
   POPULATE LETTER
   ───────────────────────────────────────────────────────────── */
function populateLetter() {
  const body = document.getElementById('letter-body');
  if (!body || !CFG.letter) return;

  CFG.letter.forEach(para => {
    const p = document.createElement('p');
    p.textContent = para;
    body.appendChild(p);
  });
}

/* ─────────────────────────────────────────────────────────────
   MUSIC PLAYER
   ───────────────────────────────────────────────────────────── */
function initMusic() {
  const audio     = document.getElementById('bg-audio');
  const toggle    = document.getElementById('music-toggle');
  const playIcon  = document.getElementById('play-icon');
  const pauseIcon = document.getElementById('pause-icon');
  const titleEl   = document.getElementById('music-title');
  const visualizer = document.getElementById('music-visualizer');
  const musicTitle = CFG.music?.title || 'Our Song';

  if (titleEl) titleEl.textContent = musicTitle;

  if (!audio || !toggle) return;

  // Set audio source from config
  if (CFG.music?.src) {
    audio.src = CFG.music.src;
  }

  toggle.addEventListener('click', async () => {
    if (audioPlaying) {
      audio.pause();
    } else {
      try {
        await audio.play();
      } catch (e) {
        console.info('[Music] Playback blocked or file missing:', e.message);
      }
    }
  });

  audio.addEventListener('play', () => {
    audioPlaying = true;
    playIcon.style.display  = 'none';
    pauseIcon.style.display = 'block';
    visualizer?.classList.add('playing');
  });

  audio.addEventListener('pause', () => {
    audioPlaying = false;
    playIcon.style.display  = 'block';
    pauseIcon.style.display = 'none';
    visualizer?.classList.remove('playing');
  });

  audio.addEventListener('error', () => {
    console.info('[Music] Audio file not found — music player disabled visually.');
    const player = document.getElementById('music-player');
    if (player) player.style.opacity = '0.4';
    if (toggle) toggle.disabled = true;
  });
}

/* ─────────────────────────────────────────────────────────────
   DREAM SECTION
   ───────────────────────────────────────────────────────────── */
function saveDream() {
  const btn   = document.getElementById('save-dream-btn');
  const saved = document.getElementById('dream-saved');
  if (!btn || !saved) return;

  btn.style.display = 'none';
  saved.classList.remove('hidden');
}

/* ─────────────────────────────────────────────────────────────
   LETTER MODAL
   ───────────────────────────────────────────────────────────── */
function openLetter() {
  const modal = document.getElementById('letter-modal');
  if (!modal) return;
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  // Focus first focusable element
  setTimeout(() => modal.querySelector('.modal-close')?.focus(), 50);
}

function closeLetter() {
  const modal = document.getElementById('letter-modal');
  if (!modal) return;
  modal.hidden = true;
  document.body.style.overflow = '';
  document.getElementById('read-letter-btn')?.focus();
}

/* ─────────────────────────────────────────────────────────────
   FINALE MODAL
   ───────────────────────────────────────────────────────────── */
function openFinale() {
  const modal = document.getElementById('finale-modal');
  if (!modal) return;
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeFinale() {
  const modal = document.getElementById('finale-modal');
  if (!modal) return;
  modal.hidden = true;
  document.body.style.overflow = '';
  // Reset gift state
  if (!giftOpened) return;
  giftOpened = false;
  const giftBox    = document.getElementById('gift-box');
  const giftLid    = document.getElementById('gift-lid');
  const giftHint   = document.getElementById('gift-hint');
  const reveal     = document.getElementById('finale-reveal');
  const confetti   = document.getElementById('finale-confetti');
  if (giftBox) giftBox.style.display = '';
  if (giftLid) giftLid.classList.remove('open');
  if (giftHint) giftHint.style.display = '';
  if (reveal) reveal.hidden = true;
  if (confetti) confetti.innerHTML = '';
}

function openGift() {
  if (giftOpened) return;
  giftOpened = true;

  const giftLid  = document.getElementById('gift-lid');
  const giftBox  = document.getElementById('gift-box');
  const giftHint = document.getElementById('gift-hint');
  const reveal   = document.getElementById('finale-reveal');

  if (giftHint) giftHint.style.display = 'none';
  if (giftLid) giftLid.classList.add('open');

  setTimeout(() => {
    if (giftBox) giftBox.style.display = 'none';
    if (reveal) {
      reveal.hidden = false;
      reveal.classList.add('show');
    }
    spawnConfetti();
  }, 700);
}

function spawnConfetti() {
  const container = document.getElementById('finale-confetti');
  if (!container) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const colors = ['#C66B85', '#D8B878', '#F6DDE4', '#581C35', '#FFF8F0', '#EDD49A'];
  const count  = 80;

  for (let i = 0; i < count; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';

    const color  = colors[Math.floor(Math.random() * colors.length)];
    const left   = Math.random() * 100;
    const delay  = Math.random() * 2;
    const dur    = 2.5 + Math.random() * 2;
    const width  = 6 + Math.random() * 8;
    const height = 3 + Math.random() * 10;

    piece.style.cssText = `
      background: ${color};
      left: ${left}%;
      top: 0;
      width: ${width}px;
      height: ${height}px;
      animation-delay: ${delay}s;
      animation-duration: ${dur}s;
    `;

    container.appendChild(piece);
  }

  // Clean up after animation
  setTimeout(() => { container.innerHTML = ''; }, 6000);
}

/* ─────────────────────────────────────────────────────────────
   REPLAY STORY
   ───────────────────────────────────────────────────────────── */
function replayStory() {
  closeFinale();

  const hero = document.getElementById('hero');
  const main = document.getElementById('main-content');

  // Reset
  siteRevealed = false;

  hero.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  hero.style.opacity    = '0';
  hero.style.transform  = 'scale(1)';

  main.classList.remove('site-visible');
  main.classList.add('site-hidden');

  window.scrollTo({ top: 0, behavior: 'smooth' });

  setTimeout(() => {
    hero.style.opacity       = '1';
    hero.style.transform     = 'scale(1)';
    hero.style.pointerEvents = 'auto';

    const btn = document.getElementById('open-surprise-btn');
    if (btn) {
      btn.style.transform = '';
      btn.style.opacity   = '';
      btn.disabled        = false;
    }
  }, 1000);
}

/* ─────────────────────────────────────────────────────────────
   PHOTO LIGHTBOX
   ───────────────────────────────────────────────────────────── */
function buildLightboxImages() {
  lightboxImages = (CFG.memories || [])
    .filter(m => m.image && m.image.trim() !== '')
    .map(m => ({ src: m.image, caption: m.title, alt: m.imageAlt || m.title }));
}

buildLightboxImages();

function openLightboxFromMemory(memIdx) {
  const mem = CFG.memories[memIdx];
  if (!mem || !mem.image) return;

  const imgIdx = lightboxImages.findIndex(i => i.src === mem.image);
  if (imgIdx === -1) return;

  lightboxIndex = imgIdx;
  openLightbox();
}

function openLightbox() {
  const lb      = document.getElementById('lightbox');
  const img     = document.getElementById('lightbox-img');
  const caption = document.getElementById('lightbox-caption');
  const counter = document.getElementById('lightbox-counter');

  if (!lb || lightboxImages.length === 0) return;

  const current = lightboxImages[lightboxIndex];
  img.src     = current.src;
  img.alt     = current.alt || '';
  if (caption) caption.textContent = current.caption || '';
  if (counter) counter.textContent = `${lightboxIndex + 1} / ${lightboxImages.length}`;

  lb.hidden = false;
  document.body.style.overflow = 'hidden';
  lb.querySelector('.lightbox-close')?.focus();

  // Show/hide nav buttons
  const prev = lb.querySelector('.lightbox-prev');
  const next = lb.querySelector('.lightbox-next');
  if (prev) prev.style.display = lightboxImages.length <= 1 ? 'none' : '';
  if (next) next.style.display = lightboxImages.length <= 1 ? 'none' : '';
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;
  lb.hidden = true;
  document.body.style.overflow = '';
}

function lightboxPrev() {
  lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
  openLightbox();
}

function lightboxNext() {
  lightboxIndex = (lightboxIndex + 1) % lightboxImages.length;
  openLightbox();
}

function initLightboxSwipe() {
  const lb = document.getElementById('lightbox');
  if (!lb) return;

  lb.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });

  lb.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) {
      dx < 0 ? lightboxNext() : lightboxPrev();
    }
  }, { passive: true });
}

/* ─────────────────────────────────────────────────────────────
   KEYBOARD NAVIGATION
   ───────────────────────────────────────────────────────────── */
function initKeyboard() {
  document.addEventListener('keydown', (e) => {
    // Lightbox
    const lb = document.getElementById('lightbox');
    if (lb && !lb.hidden) {
      if (e.key === 'Escape')      closeLightbox();
      if (e.key === 'ArrowLeft')   lightboxPrev();
      if (e.key === 'ArrowRight')  lightboxNext();
      return;
    }

    // Letter modal
    const lm = document.getElementById('letter-modal');
    if (lm && !lm.hidden) {
      if (e.key === 'Escape') closeLetter();
      return;
    }

    // Finale modal
    const fm = document.getElementById('finale-modal');
    if (fm && !fm.hidden) {
      if (e.key === 'Escape') closeFinale();
      return;
    }
  });
}

/* ─────────────────────────────────────────────────────────────
   UTILITY — HTML ESCAPE
   ───────────────────────────────────────────────────────────── */
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/* ─────────────────────────────────────────────────────────────
   PARALLAX — DREAM SECTION
   ───────────────────────────────────────────────────────────── */
(function initParallax() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const img = document.querySelector('.dream-bg-img');
  if (!img) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const section = document.getElementById('marine-dream');
      if (!section) { ticking = false; return; }
      const rect = section.getBoundingClientRect();
      const viewH = window.innerHeight;

      if (rect.top < viewH && rect.bottom > 0) {
        const progress = (viewH - rect.top) / (viewH + rect.height);
        const offset   = (progress - 0.5) * 60; // ±30px
        img.style.transform = `translateY(${offset}px) scale(1.08)`;
      }
      ticking = false;
    });
  }, { passive: true });
})();
