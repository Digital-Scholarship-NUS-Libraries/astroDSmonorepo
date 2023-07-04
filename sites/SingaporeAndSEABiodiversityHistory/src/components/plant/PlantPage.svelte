<script lang="ts">
  import PlantTable from "./PlantTable.svelte";
  import PlantSidebar from "./PlantSidebar.svelte";
</script>

<div class="flex h-screen">
  <div class="w-8/12">
    <PlantTable />
  </div>

  <div class="w-4/12">
    <PlantSidebar toggleMap={() => {}} />
  </div>
</div>
