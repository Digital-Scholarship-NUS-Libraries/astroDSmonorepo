<script lang="ts">
  import { historicals } from "../../../store/animalLayers";
  import CogLayer from "../../COGLayer.svelte";
</script>

<div>
  {#each Object.entries($historicals) as [key, value]}
    {#if value.visible}
      <CogLayer cogURL={value.cogURL} />
    {/if}
  {/each}
</div>
