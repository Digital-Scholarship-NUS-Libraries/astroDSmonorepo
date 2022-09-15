import { createNanoEvents } from "nanoevents";

export default class Sizes
{
  constructor()
  {
    this.emitter = createNanoEvents()

    this.width = window.innerWidth
    this.height = window.innerHeight
    this.pixelRatio = Math.min(window.devicePixelRatio, 2)

    window.addEventListener('resize', () => {
      this.width = window.innerWidth
      this.height = window.innerHeight
      this.pixelRatio = Math.min(window.devicePixelRatio, 2)
      this.trigger('resize')
    })
  }

  on (event, callback) {
    return this.emitter.on(event, callback)
  }
}
