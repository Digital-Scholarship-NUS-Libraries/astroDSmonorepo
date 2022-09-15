import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader"

import { createNanoEvents } from 'nanoevents'

export default class Resources{
  constructor(sources){
    this.emitter = createNanoEvents()
    this.sources = sources

    //setup
    this.items = {}
    this.toLoad = this.sources.length
    this.loaded = 0

    this.setLoaders()

    this.startLoading()
  }

  once (event, callback) {
    const unbind = this.emitter.on(event, (...args) => {
      unbind()
      callback(...args)
    })
    return unbind
  }

  setLoaders(){
    this.loaders = {}
    this.loaders.gltfLoader = new GLTFLoader()
    this.loaders.textureLoader = new THREE.TextureLoader()
    this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader()
    this.loaders.gltfDracoLoader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco/")
    this.loaders.gltfDracoLoader.setDRACOLoader(dracoLoader);
  }

  sourceLoaded(source, file){
    this.items[source.name] = file
    this.loaded++

    if(this.loaded === this.toLoad){
      this.emitter.emit('ready')
    }
  }

  startLoading(){
    for(const source of this.sources){
      switch(source.type){
        case "gltfModel":
          this.loaders.gltfLoader.load(
            source.path,
            (file) => {
              this.sourceLoaded(source, file)
            }
          )
        case "gltfDracoModel":
          this.loaders.gltfDracoLoader.load(
            source.path,
            (file) => {
              this.sourceLoaded(source, file)
            }
          )
        case "texture":
          this.loaders.textureLoader.load(
            source.path,
            (file) => {
              this.sourceLoaded(source, file)
            }
          )
        case "cubeTexture":
          this.loaders.cubeTextureLoader.load(
            source.path,
            (file) => {
              this.sourceLoaded(source, file)
            }
          )
      }
    }
  }

}
