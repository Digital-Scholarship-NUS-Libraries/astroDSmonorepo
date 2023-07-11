<script lang="ts">
  import AnimalMap from "./AnimalMap.svelte";
  import AnimalSidebar from "./AnimalSidebar.svelte";
  import AnimalTable from "./AnimalTable.svelte";

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
    <AnimalSidebar toggleMap={() => (showMap = !showMap)} />
  </div>
</div>
