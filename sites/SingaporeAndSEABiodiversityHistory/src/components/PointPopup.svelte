<script lang="ts">
  import { animalHeaderToLabelMap } from "../data/animals";
  import type { Feature } from "geojson";

  export let feature: Feature;
</script>

<div class="max-h-80 max-w-xs overflow-y-scroll">
  <ul>
    {#each Object.entries(feature) as [key, value]}
      {#if value}
        <li><strong>{animalHeaderToLabelMap[key]}:</strong> {value}</li>
      {/if}
    {/each}
  </ul>
</div>
