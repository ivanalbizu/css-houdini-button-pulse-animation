window.CSS.registerProperty({
  name: '--x',
  syntax: '<integer>',
  inherits: false,
  initialValue: '-20'
})
window.CSS.registerProperty({
  name: '--y',
  syntax: '<integer>',
  inherits: false,
  initialValue: '-20'
})
window.CSS.registerProperty({
  name: '--rad',
  syntax: '<integer>',
  inherits: false,
  initialValue: '0'
})
window.CSS.registerProperty({
  name: '--pulse-rad',
  syntax: '<integer>',
  inherits: false,
  initialValue: '0'
})
window.CSS.registerProperty({
  name: '--fill',
  syntax: '<color>',
  inherits: false,
  initialValue: 'rgba(0,0,0,.4)'
})
window.CSS.registerProperty({
  name: '--pulse-stroke-color',
  syntax: '<color>',
  inherits: false,
  initialValue: 'rgba(255, 255, 255, 1)'
})

CSS.paintWorklet.addModule('./src/js/btn-pulse.js')

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll('.button')
  buttons.forEach(button => {
    button.addEventListener('click', event => {
      const rad = parseInt(getComputedStyle(event.target).getPropertyValue('--rad'), 10)
      const pulseRad = parseInt(getComputedStyle(event.target).getPropertyValue('--pulse-rad'), 10)
      event.target.style.setProperty('--rad', `${rad + 5}`)
      event.target.style.setProperty('--pulse-rad', `${pulseRad + 5}`)
    })
    button.addEventListener('mousemove', event => {
      event.target.style.setProperty('--x', event.offsetX)
      event.target.style.setProperty('--y', event.offsetY)
    })
    button.addEventListener('mouseenter', event => {
      event.target.classList.add('hover')
      event.target.style.setProperty('--rad', 10)
    })
    button.addEventListener('mouseleave', event => {
      event.target.classList.remove('hover')
      event.target.style.setProperty('--rad', 0)
      event.target.style.setProperty('--pulse-rad', 0)
    })
  })
})
