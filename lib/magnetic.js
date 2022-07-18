import gsap from 'gsap'

export class Magnetic {
  constructor(element, options = {}) {
    this.element = element
    const op = this.element.dataset.magnetic || options
    this.options = {
      y: 0.2,
      x: 0.2,
      s: 0.1,
      rs: 0.4,
      ...op,
    }

    this.y = 0
    this.x = 0
    this.width = 0
    this.height = 0

    if (this.element.dataset['magneticInit']) return
    this.element.dataset.magneticInit = true

    this.bindEvents()
  }

  move(x, y, speed) {
    gsap.to(this.element, {
      y,
      x,
      force3D: true,
      overwrite: true,
      duration: speed,
    })
  }

  bindEvents() {
    this.element.addEventListener('mouseenter', () => {
      this.y = this.element.offsetTop - window.scrollY
      this.x = this.element.offsetLeft - window.scrollX
      this.width = this.element.offsetWidth
      this.height = this.element.offsetHeight
    })

    this.element.addEventListener('mousemove', (e) => {
      const y = (e.clientY - this.y - this.height / 2) * this.options.y
      const x = (e.clientX - this.x - this.width / 2) * this.options.x

      this.move(x, y, this.options.s)
    })

    this.element.addEventListener('mouseleave', () => {
      this.move(0, 0, this.options.rs)
    })
  }
}
