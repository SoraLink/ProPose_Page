// ProPose project page -- nav, image lightbox, BibTeX copy.

(function () {
  'use strict';

  // --- mobile menu ---
  var hamburger = document.getElementById('hamburger');
  var navMenu = document.getElementById('navMenu');
  hamburger.addEventListener('click', function () { navMenu.classList.toggle('open'); });
  navMenu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') navMenu.classList.remove('open');
  });

  // --- highlight the section currently in view ---
  var links = Array.prototype.slice.call(navMenu.querySelectorAll('a'));
  var sections = links
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  function markActive() {
    var y = window.scrollY + 90;
    var current = sections.length - 1;
    for (var i = 0; i < sections.length; i++) {
      if (sections[i].offsetTop > y) { current = i - 1; break; }
    }
    links.forEach(function (a, i) { a.classList.toggle('active', i === current); });
  }
  window.addEventListener('scroll', markActive, { passive: true });
  markActive();

  // --- lightbox: every figure image opens full size ---
  var modal = document.getElementById('imageModal');
  var modalImage = document.getElementById('modalImage');
  var modalCaption = document.getElementById('modalCaption');

  document.querySelectorAll('figure img').forEach(function (img) {
    img.addEventListener('click', function () {
      modalImage.src = img.src;
      var cap = img.parentElement.querySelector('figcaption');
      modalCaption.textContent = cap ? cap.textContent : (img.alt || '');
      modal.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  window.closeModal = function () {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  };
  modal.addEventListener('click', function (e) { if (e.target !== modalImage) window.closeModal(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') window.closeModal(); });

  // --- copy the BibTeX entry ---
  window.copyToClipboard = function (btn) {
    var text = btn.parentElement.querySelector('code').innerText;
    var done = function () {
      var old = btn.textContent;
      btn.textContent = 'Copied';
      setTimeout(function () { btn.textContent = old; }, 1600);
    };
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(done);
    } else {
      // file:// and older browsers have no async clipboard
      var ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      done();
    }
  };
})();
