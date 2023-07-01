<script lang="ts">
  import { filteredAnimalsGeoJSON } from "../store/animals";
  import {
    MapLibre,
    GeoJSON,
    CircleLayer,
    SymbolLayer,
    Popup,
    hoverStateFilter,
  } from "svelte-maplibre";
  import type { Feature } from "geojson";
  import { slide } from "svelte/transition";
  import PointPopup from "./PointPopup.svelte";
  import ClusterPopup from "./ClusterPopup.svelte";

  let selectedPoint: Feature | null = null;
  let clusterVisible: boolean = true;
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
        on:click={() => {
          clusterVisible = true;
          selectedPoint = null;
        }}
      >
        <Popup openOn={"click"} let:features>
          {#if clusterVisible}
            <ClusterPopup
              feature={features?.[0]}
              onSelectSpecies={(species) => {
                clusterVisible = false;
                selectedPoint = species;
              }}
            />
          {:else if selectedPoint && selectedPoint.properties}
            <div transition:slide>
              <PointPopup
                feature={selectedPoint.properties}
                closeButtonVisible={true}
                onClose={() => {
                  clusterVisible = true;
                }}
              />
            </div>
          {/if}
        </Popup>
      </CircleLayer>
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
        on:click={() => {
          clusterVisible = true;
          selectedPoint = null;
        }}
      >
        <Popup openOn={"click"} closeOnClickInside let:features>
          {#if features && features[0] && features[0].properties}
            <PointPopup
              feature={features[0].properties}
              closeButtonVisible={false}
            />
          {/if}
        </Popup>
      </CircleLayer>
    </GeoJSON>
  </MapLibre>
</div>
