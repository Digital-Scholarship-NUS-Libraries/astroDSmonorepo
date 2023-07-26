<script lang="ts">
  import { onMount } from "svelte";

  interface glContext extends WebGL2RenderingContext {
    fClear: Function;
    fSetSize: Function;
  }

  let canvasElement: HTMLCanvasElement;
  let glContext: glContext;

  const resizeObserver = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      glContext.fSetSize(
        entry.contentBoxSize[0].inlineSize,
        entry.contentBoxSize[0].blockSize
      );
    });
  });

  onMount(() => {
    glContext = canvasElement.getContext("webgl2") as glContext;
    glContext.clearColor(1.0, 1.0, 1.0, 1.0);
    glContext.fClear = function () {
      this.clear(this.COLOR_BUFFER_BIT | this.DEPTH_BUFFER_BIT);
      return this;
    };
    glContext.fSetSize = function (w: number, h: number) {
      this.viewport(0, 0, w, h);
      return this;
    };

    resizeObserver.observe(canvasElement);
  });
</script>

<canvas bind:this={canvasElement} />
<slot {glContext} />

<style>
  canvas {
    margin: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: absolute;
    top: 0;
    position: fixed;
    z-index: -1;
  }
</style>
