<script lang="ts">
  import Map from "./Map.svelte";
  import AnimalFilterDrawer from "./AnimalFilterDrawer.svelte";
</script>

<div class="flex h-screen">
  <div class="w-8/12">
    <Map lon={103.8} lat={1.35} zoom={10} />
  </div>
  <div class="w-4/12">
    <AnimalFilterDrawer />
  </div>
</div>
