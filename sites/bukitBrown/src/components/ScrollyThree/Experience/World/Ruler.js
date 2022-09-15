import * as THREE from 'three'

import Experience from '../Experience.js'

export default class Ruler{
  constructor(){
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.resources = this.experience.resources
    this.time = this.experience.time

    this.resource = this.resources.items.rulerModel

    this.setModel()
  }

  setModel(){
    this.model = this.resource.scene
    this.model.scale.set(0.02, 0.02, 0.02)
    this.scene.add(this.model)

    this.model.traverse((child) => {
      if(child instanceof THREE.Mesh){
        child.castShadow = true
      }
    })
  }
}
