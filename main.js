/* OPEN/CLOSE MENU */
const nav = document.querySelector('#header nav')
const menuToggle = document.querySelectorAll('nav .menu-toggle')

for (const element of menuToggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* HIDE MENU WHEN CLICKING ONE OF THE OPTIONS */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* APPLY SHADOW IN THE PAGE HEADER WHEN SCROLL */

function headerShadowWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

/* SCROLL REVEAL */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .text, #home .image,
   #me .text,
   #somethings .text, #somethings .image,
   #academic .text,
   #professional .text, #professional .button,
   #skills .hardSkills, #skills .softSkills,
   footer, footer .social, footer .copyright
  `,
  { interval: 100 }
)

/* BACK TO TOP BUTTON*/

function backToTopWhenScroll() {
  const backToTopButton = document.querySelector('.back-to-top')

  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

window.addEventListener('scroll', function () {
  headerShadowWhenScroll()
  backToTopWhenScroll()
})
