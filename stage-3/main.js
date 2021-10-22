/* Open and close menu when icon (hamburger || X) is clicked. */
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for (const element of toggle) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
}

/* Close menu when menu item is clicked. */
const links = document.querySelectorAll('nav ul li a');

for (const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show');
  });
}

/* Cast shadow from header when not on top of page. */
const header = document.querySelector('#header');
const navHeight = header.offsetHeight;

window.addEventListener('scroll', () => {
  if (window.scrollY >= 1) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
});

/* Swiper: Make carousel slider for testimonials */
const swiper = new Swiper('.swiper', {
  // Slide style
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    dynamicBullets: true
  },
  loop: true,

  // Control
  mousewheel: true,
  keyboard: true
});

/* ScrollReveal: Show elements on scroll */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 750,
  reset: true
});

scrollReveal.reveal(
  ` #home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links `,
  { interval: 100 }
);
