const setupTextInterval = () => {
  const phrases = [
    'web developer',
    'linux enthusiast',
    'vim wizard',
    'geek'
  ]
  const subtitle = document.getElementById('subtitle')
  let counter = 1
  setInterval(() => {
    subtitle.innerText = `a ${phrases[counter]}`
    counter += 1
    if (counter === phrases.length) {
      counter = 0
    }
  }, 3000)
}

const setupNavObserver = () => {
  const navbar = document.querySelector('.navbar')
  const burger = document.querySelector('.burger')
  const navLinks = document.querySelectorAll('.nav-link')
  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navbar.classList.add('even')
        burger.classList.add('even')
        for (const navLink of navLinks) {
          navLink.classList.add('even')
        }
      } else {
        navbar.classList.remove('even')
        burger.classList.remove('even')
        for (const navLink of navLinks) {
          navLink.classList.remove('even')
        }
      }
    })
  }
  const options = {
    root: document.querySelector('.scroll-container'),
    rootMargin: '0px',
    threshold: 0.8
  }
  const observer = new IntersectionObserver(callback, options)
  const targets = document.querySelectorAll('.even')
  if (targets.length) {
    for (const target of targets) {
      observer.observe(target)
    }
  }
}

const setupBurger = () => {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.nav-menu')

  burger.addEventListener('click', () => {
    burger.classList.toggle('visible')
    menu.classList.toggle('visible')
  })
}

const setupNavEvents = () => {
  const navLinks = document.querySelectorAll('.nav-link')
  const navMenu = document.querySelector('.nav-menu')
  const scrollContainer = document.querySelector('.scroll-container')

  for (const navLink of navLinks) {
    navLink.addEventListener('click', () => {
      navMenu.classList.toggle('visible')
    })
  }

  scrollContainer.addEventListener('scroll', () => {
    if (navMenu.classList.contains('visible')) {
      navMenu.classList.remove('visible')
    }
  })
}

const setupNavLinks = () => {
  const navLinks = document.querySelectorAll('.nav-link')
  for (const navLink of navLinks) {
    navLink.addEventListener('mouseenter', () => {
      navLink.lastChild.classList.add('visible')
    })
    navLink.addEventListener('mouseleave', () => {
      navLink.lastChild.classList.remove('visible')
    })
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setupTextInterval()
  setupNavObserver()
  setupBurger()
  setupNavEvents()
  setupNavLinks()
})
