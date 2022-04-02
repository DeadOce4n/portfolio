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
  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navbar.classList.add('even')
      } else {
        navbar.classList.remove('even')
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

document.addEventListener('DOMContentLoaded', () => {
  setupTextInterval()
  setupNavObserver()
})
