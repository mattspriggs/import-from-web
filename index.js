import './styles.css'
import { animate, stagger } from 'motion'

const numSegments = document.querySelectorAll('.segment').length

/**
 * Stagger offset (in seconds)
 * Decrease this to speed the animation up or increase
 * to slow it down.
 */
const offset = 0.09

setTimeout(() => {
  animate(
    '.segment',
    { opacity: [0, 1, 0] },
    {
      offset: [0, 0.1, 1],
      duration: numSegments * offset,
      delay: stagger(offset),
      repeat: Infinity,
    }
  )
}, 1000)
