<script lang="ts">
  import AnimalToggles from "./AnimalToggles.svelte";

  export let toggleMap: () => void;
</script>

<!-- FIXME the base path is harcoded here instead of using import.meta.env.BASE_URL -->
<!-- it could be that tailwind generates its classes before astro has replaced the value here -->
<!-- the class we need wouldn't exist then, yet we still see the expected value in the generated code -->
<div
  class={`flex flex-col h-full bg-repeat bg-contain bg-[url('/nuslibraries/dsprojects/sea-biodiversity/assets/background-animal.jpg')]`}
>
  <img
    src={`${import.meta.env.BASE_URL}assets/banner-animal.jpg`}
    alt="animal-banner"
  />

  <p class="prose max-w-none text-center">
    Click on button to toggle data table or map area view:
  </p>
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
</div>
