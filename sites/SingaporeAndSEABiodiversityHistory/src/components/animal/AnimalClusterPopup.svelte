<script lang="ts">
  import type { Feature } from "geojson";
  import { mapContext } from "svelte-maplibre";

  export let feature: Feature | undefined;
  export let onSelectSpecies: (feature: Feature) => void;

  let visible = true;

  const { map, source } = mapContext();
  let innerFeatures: Feature[] = [];
  $: if ($map && $source) {
    $map
      ?.getSource($source)
      ?.getClusterLeaves(feature.id, 100, 0, (err, features) => {
        innerFeatures = features;
      });
  }

  let pointFeature = null;
</script>

<div class="max-h-80 w-80 overflow-y-scroll">
  <ul>
    {#each innerFeatures as feat}
      {#if feat}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li class="cursor-pointer" on:click={() => onSelectSpecies(feat)}>
          <strong>{feat.properties["Name_Current"]}</strong>
        </li>
      {/if}
    {/each}
  </ul>
</div>
