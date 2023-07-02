<script lang="ts">
  import { GeoJSON, LineLayer, FillLayer } from "svelte-maplibre";
  export let layer: any;
</script>

<div>
  <GeoJSON data={layer}>
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
</div>
