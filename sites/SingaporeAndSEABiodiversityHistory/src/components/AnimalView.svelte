<script lang="ts">
  import AnimalMap from "./AnimalMap.svelte";
  import AnimalData from "./AnimalData.svelte";
  import AnimalFilterDrawer from "./AnimalFilterDrawer.svelte";
  import { fade } from "svelte/transition";

  let showMap: boolean = true;
</script>

<div class="flex h-screen">
  {#if showMap}
    <div class="w-8/12">
      <AnimalMap />
    </div>
  {:else}
    <div class="w-8/12">
      <AnimalData />
    </div>
  {/if}

  <div class="w-4/12">
    <AnimalFilterDrawer
      toggleMap={() => {
        showMap = !showMap;
      }}
    />
  </div>
</div>
