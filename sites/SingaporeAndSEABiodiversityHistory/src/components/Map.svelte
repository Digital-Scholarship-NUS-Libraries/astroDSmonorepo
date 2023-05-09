<script>
  // OpenLayers
  import "ol/ol.css";
  import Map from "ol/Map";
  import TileLayer from "ol/layer/Tile";
  import { OSM } from "ol/source";
  import { fromLonLat } from "ol/proj";

  import { Point } from "ol/geom";
  import { Feature } from "ol";
  import { Circle, Fill, Style } from "ol/style";
  import * as Layer from "ol/layer";
  import * as Source from "ol/source";

  // Svelte
  import { setContext } from "svelte";
  import View from "ol/View";

  import { filteredAnimals } from "../store/animals.js";

  // Exports
  export let lat;
  export let lon;
  export let zoom;

  let mapId = "olmap";
  // Local state
  let map = null;

  const setupMap = (node) => {
    const osmLayer = new TileLayer({
      source: new OSM(),
    });

    const markerSource = new Source.Vector();
    const markerLayer = new Layer.Vector({
      source: markerSource,
      style: new Style({
        image: new Circle({
          radius: 5,
          fill: new Fill({ color: "red" }),
        }),
      }),
    });

    map = new Map({
      target: node.id,
      layers: [osmLayer, markerLayer],
      view: new View({
        center: fromLonLat([lon, lat]),
        zoom: zoom,
      }),
    });

    filteredAnimals.subscribe((animals) => {
      markerSource.clear();
      animals.forEach((animal) => {
        if (
          animal["Longitude (First published)"] &&
          animal["Latitude (First published)"]
        ) {
          markerSource.addFeature(
            new Feature({
              geometry: new Point(
                fromLonLat([
                  animal["Longitude (First published)"],
                  animal["Latitude (First published)"],
                ])
              ),
            })
          );
        }
      });
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

<div id={mapId} class="map" use:setupMap>
  {#if map}
    <slot />
  {/if}
</div>

<style>
  .map {
    height: 70vh;
  }
</style>
