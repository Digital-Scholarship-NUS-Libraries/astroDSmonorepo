<script lang="ts">
  import { MapLibre, Layer } from "svelte-maplibre";
  import Animals from "./layers/Animals.svelte";
  import Analyticals from "./layers/Analyticals.svelte";
  import Ports from "./layers/Ports.svelte";
  import CogLayer from "../COGLayer.svelte";
</script>

<MapLibre
  style="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
  class="h-screen"
  center={[103.8, 1.35]}
  zoom={10.5}
  maxBounds={[
    [103.4, 1.0],
    [104.3, 1.7],
  ]}
  standardControls
>
  <CogLayer
    cogURL="https://s3.ap-southeast-1.amazonaws.com/static-content-libmaps.nus.edu.sg/1913.tif"
  />
  <CogLayer
    cogURL="https://s3.ap-southeast-1.amazonaws.com/static-content-libmaps.nus.edu.sg/1983.tif"
  />
  <Animals />
  <Analyticals />
  <Ports />
</MapLibre>
