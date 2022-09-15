import Experience from "../Experience.js";
import Environment from "./Environment.js";
import Ruler from "./Ruler.js";
import Floor from "./Floor.js";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    // we could listent to the ready event elsewhere, it can be interesting to put it elsewhere to have elements display faster while resources are still loading
    this.resources.once("ready", () => {
      this.floor = new Floor();
      this.ruler = new Ruler();
      // we need to instantiate things the environment map will apply to before, so that they will get traversed
      this.environment = new Environment();
    });
  }

  update() {
    if (this.ruler) {
      this.ruler.update();
    }
  }
}
