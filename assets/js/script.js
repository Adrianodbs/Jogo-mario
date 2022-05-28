const mario = document.querySelector('.mario')
const cano = document.querySelector('.pipe')

const pular = () => {
  mario.classList.add('pular')

  setTimeout(() => {
    mario.classList.remove('pular')
  }, 500)
}

const loop = setInterval(() => {
  const canoPosicao = cano.offsetLeft
  // O simbolo de adição é para converter a string em número
  const marioPosicao = +window.getComputedStyle(mario).bottom.replace('px', '')

  if (canoPosicao <= 120 && canoPosicao > 0 && marioPosicao < 80) {
    cano.style.animation = 'none'
    cano.style.left = `${canoPosicao}px`

    mario.style.animation = 'none'
    mario.style.bottom = `${marioPosicao}px`

    mario.src = '../../assets/img/game-over.png'
    mario.style.width = '75px'
    mario.style.marginLeft = '50px'

    clearInterval(loop)
  }
}, 10)

document.addEventListener('keydown', pular)
