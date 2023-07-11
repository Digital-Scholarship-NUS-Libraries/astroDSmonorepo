<script lang="ts">
  import { GeoJSON, LineLayer, FillLayer } from "svelte-maplibre";
  import { analyticals } from "../../store/animalLayers";
</script>

{#each Object.entries($analyticals) as [key, value]}
  {#if value.visible}
    <GeoJSON data={value.geoJSON}>
      <LineLayer
        paint={{
          "line-color": ["get", "stroke-color"],
          "line-width": ["get", "stroke-width"],
          "line-opacity": ["get", "stroke-opacity"],
        }}
      />
      <FillLayer
        paint={{
          "fill-color": ["get", "fill"],
          "fill-opacity": ["get", "fill-opacity"],
        }}
      />
    </GeoJSON>
  {/if}
{/each}
