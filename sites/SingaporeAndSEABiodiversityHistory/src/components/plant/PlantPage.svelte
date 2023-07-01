<script lang="ts">
  import PlantFilter from "./PlantFilter.svelte";
  import PlantTable from "./PlantTable.svelte";
</script>

<div class="flex h-screen">
  <div class="w-8/12">
    <PlantTable />
  </div>

  <div class="w-4/12">
    <PlantFilter />
  </div>
</div>
