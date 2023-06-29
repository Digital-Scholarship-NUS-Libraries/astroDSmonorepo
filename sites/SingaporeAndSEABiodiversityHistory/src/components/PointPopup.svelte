<script lang="ts">
  import { animalHeaderToLabelMap } from "../data/animals";
  import type { GeoJsonProperties } from "geojson";

  export let feature: GeoJsonProperties;
  export let closeButtonVisible: boolean;
  export let onClose = () => {};
</script>

<div class="max-h-80 max-w-xs overflow-y-scroll">
  <ul>
    {#if closeButtonVisible}
      <button class="absolute top-2 right-2" on:click={onClose}> X </button>
    {/if}
    {#each Object.entries(feature) as [key, value]}
      {#if value}
        <li><strong>{animalHeaderToLabelMap[key]}:</strong> {value}</li>
      {/if}
    {/each}
  </ul>
</div>
