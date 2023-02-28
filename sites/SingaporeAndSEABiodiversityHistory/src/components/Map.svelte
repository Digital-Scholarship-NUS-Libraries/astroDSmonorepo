<script lang="ts">
  // OpenLayers
  import "ol/ol.css";
  import Map from "ol/Map";
  import TileLayer from "ol/layer/Tile";
  import { fromLonLat } from "ol/proj";

  // Svelte
  import View from "ol/View";
  import OSM from "ol/source/OSM";

  // Exports
  let mapId = "olmap";
  // Local state
  let map = null;

  // functions
  const setupMap = (node) => {
    const osmLayer = new TileLayer({
      source: new OSM(),
    });
    map = new Map({
      target: node.id,
      layers: [osmLayer],
      view: new View({
        center: fromLonLat([103.8, 1.35]),
        zoom: 10,
      }),
    });
    return {
      destroy() {
        if (map) {
          // as Map
          map.setTarget(null);
          map = null;
        }
      },
    };
  };
</script>

<div id={mapId} class="map" use:setupMap />

<style>
  .map {
    height: 400px;
  }
</style>
