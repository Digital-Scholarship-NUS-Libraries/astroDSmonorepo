<script lang="ts">
  // import Map from "./Map.svelte";
  import AnimalFilterDrawer from "./AnimalFilterDrawer.svelte";
  import { filteredAnimalsGeoJSON } from "../store/animals";
  import {
    MapLibre,
    GeoJSON,
    CircleLayer,
    SymbolLayer,
    Popup,
    hoverStateFilter,
  } from "svelte-maplibre";

  // filteredAnimalsGeoJSON.subscribe((v) => console.log(v));
  $: console.log($filteredAnimalsGeoJSON);
  let clickedFeature: Record<string, any> | null = null;
</script>

<div class="flex h-screen">
  <!-- <div class="w-8/12"> -->
  <!--   <Map lon={103.8} lat={1.35} zoom={10} /> -->
  <!-- </div> -->
  <MapLibre
    style="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
    class="w-8/12"
    center={[103.8, 1.35]}
    zoom={11}
    maxBounds={[
      [103.4, 1.0],
      [104.3, 1.7],
    ]}
    standardControls
  >
    <GeoJSON
      id="animals"
      data={$filteredAnimalsGeoJSON}
      cluster={{ radius: 500, maxZoom: 16 }}
      generateId
    >
      <CircleLayer
        applyToClusters
        hoverCursor="pointer"
        paint={{
          // Use step expressions (https://maplibre.org/maplibre-gl-js-docs/style-spec/#expressions-step)
          // with three steps to implement three types of circles:
          //   * Blue, 20px circles when point count is less than 100
          //   * Yellow, 30px circles when point count is between 100 and 750
          //   * Pink, 40px circles when point count is greater than or equal to 750
          "circle-color": [
            "step",
            ["get", "point_count"],
            "#51bbd6",
            3,
            "#f1f075",
            4,
            "#f28cb1",
          ],
          "circle-radius": ["step", ["get", "point_count"], 20, 3, 30, 4, 40],
          "circle-stroke-color": "#f00",
          "circle-stroke-width": 1,
          "circle-stroke-opacity": hoverStateFilter(0, 1),
        }}
      />
      <SymbolLayer
        applyToClusters
        layout={{
          "text-field": ["format", ["get", "point_count_abbreviated"]],
          "text-size": 12,
          "text-offset": [0, -0.1],
        }}
      />
      <CircleLayer
        applyToClusters={false}
        hoverCursor="pointer"
        paint={{
          // "circle-color": "#11b4da",
          "circle-color": [
            "step",
            ["get", "Date_yyyy_FirstPub"],
            "#0000ff",
            1965,
            "#ff0000",
          ],
          "circle-radius": 5,
          "circle-stroke-width": 1,
          "circle-stroke-color": "#f00",
          "circle-stroke-opacity": hoverStateFilter(0, 1),
        }}
        on:click={(e) => (clickedFeature = e.detail.features?.[0]?.properties)}
      >
        <Popup openOn={"click"} closeOnClickInside let:features>
          {@const props = features?.[0]?.properties}
          <ul>
            {#each Object.entries(props) as [key, value]}
              {#if value}
                <li><strong>{key}:</strong> {value}</li>
              {/if}
            {/each}
          </ul>
        </Popup>
      </CircleLayer>
    </GeoJSON>
  </MapLibre>
  <div class="w-4/12">
    <AnimalFilterDrawer />
  </div>
</div>

<style>
  :global(.maplibregl-popup-content) {
    max-height: 300px;
    max-width: 250px;
    overflow: scroll;
  }
</style>
