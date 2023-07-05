<script lang="ts">
  import { MapLibre, Layer } from "svelte-maplibre";
  import Animals from "./layers/Animals.svelte";
  import Analyticals from "./layers/Analyticals.svelte";
  import Ports from "./layers/Ports.svelte";
  import CogLayer from "../COGLayer.svelte";
  import RasterSource from "../RasterSource.svelte";
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
  <RasterSource
    tiles={[
      "https://libmaps.nus.edu.sg/gis/rest/services/Sing_Hist_Maps/1975/MapServer/tile/{z}/{y}/{x}",
    ]}
  >
    <Layer type="raster" />
  </RasterSource>
  <Animals />
  <Analyticals />
  <Ports />
  <CogLayer
    cogURL="https://s3.ap-southeast-1.amazonaws.com/static-content-libmaps.nus.edu.sg/1983.tif"
  />
</MapLibre>
