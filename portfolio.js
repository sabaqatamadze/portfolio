// Scroll animations for sections
const faders = document.querySelectorAll('.fade, .fade-top');

const appearOptions = { threshold: 0.3 };

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => { appearOnScroll.observe(fader); });

// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(link =>
