<script lang="ts">
  import { GeoJSON, MarkerLayer, Popup } from "svelte-maplibre";
  import { ports } from "../../store/animalLayers";
</script>

<GeoJSON data={$ports.geoJSON}>
  {#if $ports.visible}
    <MarkerLayer interactive let:feature>
      <div>
        <svg height="40" viewBox="1.5 -1.75 39 45.75">
          <path
            stroke="#7F7F7F"
            stroke-width="3"
            fill={feature.properties?.["marker-color"]}
            d="M 21 41 L 4.5 34.375 L 4.5 7.875 C 4.5 4.215 11.8875 1.25 21 1.25 C 30.1125 1.25 37.5 4.215 37.5 7.875 L 37.5 34.375 Z"
          />
        </svg>
      </div>
      <Popup openOn="click">
        <ul>
          <li>
            <strong>Port name: </strong>{feature.properties?.["PortName"]}
          </li>
          <li>
            <strong>Port type: </strong>{feature.properties?.["PortType"]}
          </li>
          <li>
            <strong>Year Established: </strong>
            {feature.properties?.["YearEstablished"]}
          </li>
        </ul>
      </Popup>
    </MarkerLayer>
  {/if}
</GeoJSON>
