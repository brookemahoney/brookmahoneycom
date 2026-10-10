(function () {
  'use strict';

  const MANIFEST = typeof window.__MENAGERIE_MANIFEST !== 'undefined' ? window.__MENAGERIE_MANIFEST : [];
  const SLOTS = Array.from(document.querySelectorAll('.gallery-slot'));
  const GALLERY = document.querySelector('.gallery');

  function pickRandom() {
    if (!MANIFEST.length) return null;
    return MANIFEST[Math.floor(Math.random() * MANIFEST.length)];
  }

  function applySlot(slot, entry) {
    if (!entry) return;
    const img = slot.querySelector('img');
    const cap = slot.querySelector('figcaption');
    if (img) img.src = entry.file;
    if (cap) cap.textContent = entry.name;
  }

  let soundInterval = null;

  function startSound() {
    try {
      const AC = (typeof window.AudioContext !== 'undefined') ? new window.AudioContext() : (window.webkitAudioContext ? new window.webkitAudioContext() : null);
      if (!AC) return null;
      if (AC.state === 'suspended') AC.resume().catch(function () {});

      const root = 600 + Math.random() * 600;
      const offsets = [0, 4, 7, 11];
      const stagger = 50;

      function chord() {
        const now = AC.currentTime;
        offsets.forEach(function (semitones, i) {
          const osc = AC.createOscillator();
          const gain = AC.createGain();
          osc.type = 'triangle';
          osc.frequency.value = root * Math.pow(2, semitones / 12);
          gain.gain.setValueAtTime(0.015, now + i * stagger / 1000);
          gain.gain.exponentialRampToValueAtTime(0.001, now + i * stagger / 1000 + 0.25);
          osc.connect(gain);
          gain.connect(AC.destination);
          osc.start(now + i * stagger / 1000);
          osc.stop(now + i * stagger / 1000 + 0.25);
        });
      }

      soundInterval = setInterval(chord, 280);
      return function stop() {
        if (soundInterval) {
          clearInterval(soundInterval);
          soundInterval = null;
        }
      };
    } catch (e) {
      return null;
    }
  }

  let soundStopFn = null;

  function beginShuffle() {
    if (soundStopFn) { soundStopFn(); soundStopFn = null; }
    if (GALLERY) GALLERY.classList.add('pulsing');

    soundStopFn = startSound();

    let step = 0;
    const maxSteps = 8;
    let delay = 40;

    function tick() {
      step++;
      SLOTS.forEach(function (slot) {
        applySlot(slot, pickRandom());
      });

      if (step < maxSteps) {
        delay = Math.min(delay + 15, 120);
        setTimeout(tick, delay);
      } else {
        setTimeout(function () {
          SLOTS.forEach(function (slot) {
            applySlot(slot, pickRandom());
          });
          setTimeout(function () {
            if (GALLERY) GALLERY.classList.remove('pulsing');
            if (soundStopFn) { soundStopFn(); soundStopFn = null; }
          }, 120);
        }, delay);
      }
    }

    tick();
  }

  function wireButton() {
    const btn = document.getElementById('changeroo-btn');
    if (!btn) return;
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      beginShuffle();
    });
  }

  wireButton();
  let started = false;
  function startOnce() {
    if (!started) { started = true; setTimeout(beginShuffle, 400); }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startOnce);
  } else {
    startOnce();
  }
})();
