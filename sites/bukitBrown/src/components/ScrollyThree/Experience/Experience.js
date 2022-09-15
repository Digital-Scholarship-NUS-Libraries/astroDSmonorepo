import * as THREE from 'three'

import Debug from './Utils/Debug.js'

import Sizes from './Utils/Sizes.js'
import Time from './Utils/Time.js'
import Camera from './Camera.js'
import Renderer from './Renderer.js'
import World from './World/World.js'
import Resources from './Utils/Resources.js'

import sources from './sources.json'

// let's make experience a singleton: there will only be one experience

let instance = null

export default class Experience{
  constructor(canvas){
    //this makes our class a singleton
    if(instance){
      return instance
    }
    instance = this

    // it can be useful to have this while developing so we can interact with things from the console
    window.experience = this

    this.canvas = canvas

    this.debug = new Debug()
    this.sizes = new Sizes()
    this.time = new Time()
    this.scene = new THREE.Scene()
    this.resources = new Resources(sources)
    // the camera needs the scene to exist
    this.camera = new Camera()
    this.renderer = new Renderer()
    this.world = new World()

    this.sizes.on('resize', () =>{
        this.resize()
      }
    )

    this.time.on('tick', () => {
      this.update()
    })
  }

  resize(){
    this.camera.resize()
    this.renderer.resize()
  }

  update(){
    this.camera.update()
    this.world.update()
    this.renderer.update()
  }

  destroy(){
    this.sizes.emitter.events = {}
    this.time.emitter.events = {}

//https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects
    this.scene.traverse((child) => {
      if(child instanceof THREE.Mesh){
        child.geometry.dispose()
        for(const key in child.material){
          const value = child.material[key]
          if(value && typeof value.dispose === 'function'){
            value.dispose()
          }
        }
      }
    })

    this.camera.controls.dispose()
    this.renderer.instance.dispose()
    if(this.debug.active){
      this.debug.ui.destroy()
    }
  }
}
