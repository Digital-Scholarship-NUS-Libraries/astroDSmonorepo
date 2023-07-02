<script lang="ts">
  import AnimalToggles from "./AnimalToggles.svelte";

  export let toggleMap: () => void;
</script>

<div class="flex flex-col h-full">
  <img src="/public/assets/animal-banner.jpg" alt="animal-banner" />

  <label class="flex items-center justify-center pt-2 pb-2">
    <span>Data</span>
    <input
      type="checkbox"
      class="toggle mr-2 ml-2"
      checked={true}
      on:change={toggleMap}
    />
    <span>Map</span>
  </label>

  <div class="overflow-y-scroll mr-4 ml-4 mb-2">
    <AnimalToggles />
  </div>

  <div
    class="absolute h-screen w-4/12 bg-repeat bg-contain opacity-10 flex flex-col"
    style="z-index: -1; background-image: url('/public/assets/animal-background.jpg')"
  />
</div>
