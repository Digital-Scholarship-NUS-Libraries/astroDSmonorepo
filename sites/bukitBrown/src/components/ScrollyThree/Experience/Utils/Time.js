import { createNanoEvents } from "nanoevents";

export default class Time
{
  constructor()
  {
    this.emitter = createNanoEvents()

    this.start = Date.now()
    this.current = this.start
    this.elapsed = 0
    this.delta = 16 // 0 here causes issues sometimes

    //this instead of calling tick directly allows to wait one frame before starting ticking
    // this is so that we don't get a delta of 0 on the first frame
    window.requestAnimationFrame(() => {
      this.tick()
    })
  }
  
  on (event, callback) {
    return this.emitter.on(event, callback)
  }

  tick()
  {
    const currentTime = Date.now()
    this.delta = currentTime - this.current
    this.current = currentTime
    this.elapsed = this.current - this.start

    this.emitter.emit('tick')

    window.requestAnimationFrame(() =>
      {
      this.tick()
      }
    )
  }
}
