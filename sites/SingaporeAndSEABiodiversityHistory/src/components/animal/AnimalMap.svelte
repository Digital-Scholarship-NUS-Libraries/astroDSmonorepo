<script lang="ts">
  import { MapLibre } from "svelte-maplibre";
  import Animals from "./layers/Animals.svelte";
  import Analyticals from "./layers/Analyticals.svelte";
  import Ports from "./layers/Ports.svelte";
</script>

<div>
  <MapLibre
    style="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
    class="h-screen"
    center={[103.8, 1.35]}
    zoom={11}
    maxBounds={[
      [103.4, 1.0],
      [104.3, 1.7],
    ]}
    standardControls
  >
    <Animals />
    <Analyticals />
    <Ports />
  </MapLibre>
</div>
