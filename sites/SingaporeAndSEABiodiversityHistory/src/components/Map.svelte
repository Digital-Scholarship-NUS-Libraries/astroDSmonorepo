<script lang="ts">
  // OpenLayers
  import "ol/ol.css";
  import Map from "ol/Map";
  import TileLayer from "ol/layer/Tile";
  import { fromLonLat } from "ol/proj";

  import { Feature } from "ol";
  import { Point } from "ol/geom";
  import * as Source from "ol/source";
  import * as Layer from "ol/layer";
  import { Circle, Fill, Style } from "ol/style";

  // Svelte
  import View from "ol/View";
  import OSM from "ol/source/OSM";

  import { csv } from "d3";

  // Exports
  let mapId = "olmap";
  // Local state
  let map = null;

  // functions
  let features : Point = [];
  const setupMap = (node) => {
    const osmLayer = new TileLayer({
      source: new OSM(),
    });

    csv("/data/SG_Animal_Naturalised.csv").then((animals) => {
      animals.forEach((animal) => {
        // console.log(animal);
        const longitude = animal["Longitude (First published)"];
        const latitude = animal["Latitude (First published)"];
        features = [
          ...features,
          new Feature({
            geometry: new Point(fromLonLat([longitude, latitude])),
          }),
        ];
      });
    });

    const vectorSource = new Source.Vector({
      features,
    });
    const vectorLayer = new Layer.Vector({
      source: vectorSource,
      style: new Style({
        image: new Circle({
          radius: 3,
          fill: new Fill({ color: "red" }),
        }),
      }),
    });

    map = new Map({
      target: node.id,
      layers: [osmLayer, vectorLayer],
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
    height: 70vh;
  }
</style>
