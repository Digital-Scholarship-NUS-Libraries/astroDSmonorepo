<script lang="ts">
  export let vertexSource: string;
  export let fragmentSource: string;
  export let glContext: glContext;
  import { onMount } from "svelte";

  interface glContext extends WebGL2RenderingContext {
    fClear: Function;
    fSetSize: Function;
  }

  onMount(() => {
    const vertexShader = glContext.createShader(glContext.VERTEX_SHADER);
    if (!vertexShader) {
      throw new Error("Unable to create the vertex shader");
    }
    glContext.shaderSource(vertexShader, vertexSource);
    glContext.compileShader(vertexShader);
    if (!glContext.getShaderParameter(vertexShader, glContext.COMPILE_STATUS)) {
      console.error(
        "Error compiling vertex shader : " + vertexSource,
        glContext.getShaderInfoLog(vertexShader)
      );
      glContext.deleteShader(vertexShader);
      return null;
    }

    const fragmentShader = glContext.createShader(glContext.FRAGMENT_SHADER);
    if (!fragmentShader) {
      throw new Error("Unable to create the fragment shader");
    }
    glContext.shaderSource(fragmentShader, fragmentSource);
    glContext.compileShader(fragmentShader);
    if (
      !glContext.getShaderParameter(fragmentShader, glContext.COMPILE_STATUS)
    ) {
      console.error(
        "Error compiling fragment shader : " + fragmentSource,
        glContext.getShaderInfoLog(fragmentShader)
      );
      glContext.deleteShader(fragmentShader);
      return null;
    }

    const shaderProgram = glContext.createProgram();
    if (!shaderProgram) {
      throw new Error("Unable to create the shader program");
    }
    glContext.attachShader(shaderProgram, vertexShader);
    glContext.attachShader(shaderProgram, fragmentShader);
    glContext.linkProgram(shaderProgram);
    //Check if successful
    if (!glContext.getProgramParameter(shaderProgram, glContext.LINK_STATUS)) {
      console.error(
        "Error creating shader program.",
        glContext.getProgramInfoLog(shaderProgram)
      );
      glContext.deleteProgram(shaderProgram);
      return null;
    }

    //Only do this for additional debugging.
    glContext.validateProgram(shaderProgram);
    if (
      !glContext.getProgramParameter(shaderProgram, glContext.VALIDATE_STATUS)
    ) {
      console.error(
        "Error validating program",
        glContext.getProgramInfoLog(shaderProgram)
      );
      glContext.deleteProgram(shaderProgram);
      return null;
    }

    //Can delete the shaders since the program has been made.
    glContext.detachShader(shaderProgram, vertexShader);
    glContext.detachShader(shaderProgram, fragmentShader);
    glContext.deleteShader(vertexShader);
    glContext.deleteShader(fragmentShader);

    glContext.useProgram(shaderProgram);
    const uTimeLocation = glContext.getUniformLocation(shaderProgram, "uTime");
    const renderLoop = (elapsedTime: DOMHighResTimeStamp) => {
      requestAnimationFrame(renderLoop),
        glContext.uniform1f(uTimeLocation, elapsedTime / 1e3),
        glContext.fClear();
      glContext.drawArrays(glContext.TRIANGLES, 0, 3);
    };
    renderLoop(0);
  });
</script>
