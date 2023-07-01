<script lang="ts">
  import { filteredAnimalsGeoJSON } from "../../../store/animalLayers";
  import {
    GeoJSON,
    CircleLayer,
    SymbolLayer,
    Popup,
    hoverStateFilter,
  } from "svelte-maplibre";
  import type { Feature } from "geojson";
  import { slide } from "svelte/transition";
  import AnimalPointPopup from "./popups/AnimalPointPopup.svelte";
  import AnimalClusterPopup from "./popups/AnimalClusterPopup.svelte";

  let selectedPoint: Feature | null = null;
  let clusterVisible: boolean = true;
</script>

<div>
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
          <AnimalClusterPopup
            feature={features?.[0]}
            onSelectSpecies={(species) => {
              clusterVisible = false;
              selectedPoint = species;
            }}
          />
        {:else if selectedPoint && selectedPoint.properties}
          <div transition:slide>
            <AnimalPointPopup
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
          <AnimalPointPopup
            feature={features[0].properties}
            closeButtonVisible={false}
          />
        {/if}
      </Popup>
    </CircleLayer>
  </GeoJSON>
</div>
