<script lang="ts">
  import type { Feature } from "geojson";
  import { mapContext } from "svelte-maplibre";

  export let feature: Feature;

  const { map, source } = mapContext();

  let innerFeatures: Feature[] = [];
  $: if ($map && $source) {
    $map
      ?.getSource($source)
      ?.getClusterLeaves(feature.id, 100, 0, (err, features) => {
        innerFeatures = features;
      });
  }
</script>

<div class="max-h-80 max-w-xs overflow-y-scroll">
  <ul>
    {#each innerFeatures as feat}
      {#if feat}
        <li><strong>{feat.properties["Name_Current"]}</strong></li>
      {/if}
    {/each}
  </ul>
</div>
