<script lang="ts">
  import AnimalMap from "./AnimalMap.svelte";
  import AnimalTable from "./AnimalTable.svelte";
  import AnimalToggles from "./AnimalToggles.svelte";

  let showMap: boolean = true;
</script>

<div class="flex h-screen">
  {#if showMap}
    <div class="w-8/12">
      <AnimalMap />
    </div>
  {:else}
    <div class="w-8/12">
      <AnimalTable />
    </div>
  {/if}

  <div class="w-4/12">
    <AnimalToggles toggleMap={() => (showMap = !showMap)} />
  </div>
</div>
