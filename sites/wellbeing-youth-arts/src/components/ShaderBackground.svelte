<script lang="ts">
  import GlCanvas from "./GLCanvas.svelte";
  import Shader from "./Shader.svelte";
  import fragmentShaderSource from "../shaders/fragmentShader.glsl?raw";
  import vertexShaderSource from "../shaders/vertexShader.glsl?raw";
</script>

<GlCanvas let:glContext>
  {#if !!glContext}
    <Shader
      {glContext}
      vertexSource={vertexShaderSource}
      fragmentSource={fragmentShaderSource}
    />
  {/if}
</GlCanvas>
