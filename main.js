const header = document.querySelector('#header');
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');
const links = document.querySelectorAll('nav ul li a');
const home = document.querySelector('#home');
const sections = document.querySelectorAll('main section[id]');
const backToTopButton = document.querySelector('#back-to-top');

/* Open and close menu when icon (hamburger || X) is clicked. */

for (const element of toggle) {
  element.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
}

/* Close menu when menu item is clicked. */
for (const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show');
  });
}

/* On Scroll */
window.addEventListener('scroll', () => {
  changeHeaderOnScroll();
  backToTop();
  activateLink();
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
  loop: false,

  // Control
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
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
    #contact .text, #contact .links,
    footer .brand, footer .social`,
  { interval: 100 }
);

function changeHeaderOnScroll() {
  if (window.scrollY >= 1) {
    header.classList.add('scroll');
  } else {
    header.classList.remove('scroll');
  }
}

function backToTop() {
  if (window.scrollY >= home.offsetHeight - header.offsetHeight) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
}

/* COME BACK HERE TO UNDERSTAND */
function activateLink() {
  const checkpoint = scrollY + (window.innerHeight / 8) * 4;

  for (const section of sections) {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

    const linkToSection = document.querySelector(
      `nav ul li a[href*=${sectionId}]`
    );

    if (checkpointStart && checkpointEnd) {
      linkToSection.classList.add('active');
    } else {
      linkToSection.classList.remove('active');
    }
  }
}
