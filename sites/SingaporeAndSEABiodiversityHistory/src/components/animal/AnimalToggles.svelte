<script lang="ts">
  import {
    filterAttributes,
    animalsVisibility,
    toggleAnimalsVisibility,
    toggleFaunaAves,
    toggleFaunaFreshwater,
    toggleFaunaMarine,
    toggleFaunaTerrestrial,
    toggleIntroPathwayBiological,
    toggleIntroPathwayConsumption,
    toggleIntroPathwayCorridor,
    toggleIntroPathwayFishing,
    toggleIntroPathwayPlantTrade,
    toggleIntroPathwayPetTrade,
    toggleExtinction,
    toggleActiveRemoval,
    toggleIntroPathwayHitchhiker,
    toggleIntroPathwayUnknown,
  } from "../../store/animals.js";
  import {
    analyticals,
    analyticalsToggles,
    ports,
    togglePorts,
  } from "../../store/animalLayers.js";
</script>

<div class="h-full overflow-y-scroll">
  <article class="prose">
    <h4>
      1. Locality of established non-native animal species first published
      records with location information (this layer is kept on by default).
    </h4>

    <h4>Description</h4>

    <ul class="list-disc">
      <li>
        This map illustrates the locality of first published records of
        established non-native animal species in Singapore from 1819 to present.
      </li>
      <li>
        Note that most locality points on the maps provide the species'
        approximate location as certain historical sources only provide
        approximate location details and not the exact coordinates.
      </li>
      <li>
        Points at the same location may also be presented in a spaced out manner
        for better readability.
      </li>
      <li>
        For non-native species within Pulau Tekong, exact location of the record
        has been redacted due to sensitivity of the site.
      </li>
      <li>
        Data is contributed courtesy of the Lee Kong Chian Natural History
        Museum.
      </li>
    </ul>

    <div class="flex items-center">
      <input
        id="animal-visible"
        type="checkbox"
        checked={$animalsVisibility}
        class="checkbox"
        on:change={toggleAnimalsVisibility}
      />
      <label for="animal-visible" class="ml-2">Show Animals</label>
    </div>

    <img src="/public/assets/legend-points.png" alt="Animal legend" />

    <h4>Years (Largest Range: 1819 - 2023)</h4>

    <input
      type="number"
      bind:value={$filterAttributes.minYear}
      min="1819"
      max={$filterAttributes.maxYear}
      placeholder="Start"
      class="input input-bordered input-sm max-w-xs"
    />
    -
    <input
      type="number"
      bind:value={$filterAttributes.maxYear}
      min={$filterAttributes.minYear}
      max="2023"
      placeholder="End"
      class="input input-bordered input-sm max-w-xs"
    />

    <h4>Fauna</h4>

    <button
      class={$filterAttributes.fauna.aves
        ? "btn btn-xs btn text-white bg-gray-800 hover:bg-gray-500"
        : "btn btn-xs btn-outline hover:bg-gray-300"}
      on:click={toggleFaunaAves}
    >
      Aves
    </button>

    <button
      class={$filterAttributes.fauna.freshwater
        ? "btn btn-xs btn text-white bg-gray-800 hover:bg-gray-500"
        : "btn btn-xs btn-outline hover:bg-gray-300"}
      on:click={toggleFaunaFreshwater}
    >
      Freshwater
    </button>

    <button
      class={$filterAttributes.fauna.marine
        ? "btn btn-xs btn text-white bg-gray-800 hover:bg-gray-500"
        : "btn btn-xs btn-outline hover:bg-gray-300"}
      on:click={toggleFaunaMarine}
    >
      Marine
    </button>

    <button
      class={$filterAttributes.fauna.terrestrial
        ? "btn btn-xs btn text-white bg-gray-800 hover:bg-gray-500"
        : "btn btn-xs btn-outline hover:bg-gray-300"}
      on:click={toggleFaunaTerrestrial}
    >
      Terrestrial
    </button>

    <h4>Pathway</h4>

    <button
      class={$filterAttributes.introPathway.biological
        ? "btn btn-xs btn text-white bg-gray-800 hover:bg-gray-500"
        : "btn btn-xs btn-outline hover:bg-gray-300"}
      on:click={toggleIntroPathwayBiological}
    >
      Biological
    </button>

    <button
      class={$filterAttributes.introPathway.consumption
        ? "btn btn-xs btn text-white bg-gray-800 hover:bg-gray-500"
        : "btn btn-xs btn-outline hover:bg-gray-300"}
      on:click={toggleIntroPathwayConsumption}
    >
      Consumption
    </button>

    <button
      class={$filterAttributes.introPathway.corridor
        ? "btn btn-xs btn text-white bg-gray-800 hover:bg-gray-500"
        : "btn btn-xs btn-outline hover:bg-gray-300"}
      on:click={toggleIntroPathwayCorridor}
    >
      Corridor
    </button>

    <button
      class={$filterAttributes.introPathway.fishing
        ? "btn btn-xs btn text-white bg-gray-800 hover:bg-gray-500"
        : "btn btn-xs btn-outline hover:bg-gray-300"}
      on:click={toggleIntroPathwayFishing}
    >
      Fishing
    </button>

    <button
      class={$filterAttributes.introPathway.petTrade
        ? "btn btn-xs btn text-white bg-gray-800 hover:bg-gray-500"
        : "btn btn-xs btn-outline hover:bg-gray-300"}
      on:click={toggleIntroPathwayPetTrade}
    >
      Pet Trade
    </button>

    <button
      class={$filterAttributes.introPathway.plantTrade
        ? "btn btn-xs btn text-white bg-gray-800 hover:bg-gray-400"
        : "btn btn-xs btn-outline hover:bg-gray-300"}
      on:click={toggleIntroPathwayPlantTrade}
    >
      Plant Trade
    </button>

    <button
      class={$filterAttributes.introPathway.hitchhiker
        ? "btn btn-xs btn text-white bg-gray-800 hover:bg-gray-500"
        : "btn btn-xs btn-outline hover:bg-gray-300"}
      on:click={toggleIntroPathwayHitchhiker}
    >
      Stowaway
    </button>

    <button
      class={$filterAttributes.introPathway.unknown
        ? "btn btn-xs btn text-white bg-gray-800 hover:bg-gray-500"
        : "btn btn-xs btn-outline hover:bg-gray-300"}
      on:click={toggleIntroPathwayUnknown}
    >
      Unknown
    </button>

    <h4>Others</h4>

    <button
      class={$filterAttributes.activeRemoval
        ? "btn btn-xs btn text-white bg-gray-800 hover:bg-gray-500"
        : "btn btn-xs btn-outline hover:bg-gray-300"}
      on:click={toggleActiveRemoval}
    >
      Active Removal
    </button>

    <button
      class={$filterAttributes.extinction
        ? "btn btn-xs btn text-white bg-gray-800 hover:bg-gray-500"
        : "btn btn-xs btn-outline hover:bg-gray-300"}
      on:click={toggleExtinction}
    >
      Extinct
    </button>

    <h4>2. Maps with analysis.</h4>

    <h4>Description</h4>

    <body>
      Information from the SSRTG project database and other relevant reliable
      sources are used to generate these maps which support the visual analysis
      of the data for research and exploration. The study area has been broken
      down into transverse hexagonal tessellations for consistency and summary
      maps of count and mean year of first published record for established
      species for respective fauna types, introductory pathways, and other
      information are generated.
    </body>

    <h4>Legend</h4>

    <img src="/public/assets/legend-species-maps.png" alt="legend" />

    <h4>Fauna Types</h4>

    <div class="flex items-center">
      <input
        id="aves-fauna-map"
        type="checkbox"
        checked={$analyticals.faunaAves.visible}
        class="checkbox"
        on:change={analyticalsToggles.toggleFaunaAves}
      />
      <label for="aves-fauna-map" class="ml-2">Aves</label>
    </div>

    <div class="flex items-center">
      <input
        id="aves-freshwater-map"
        type="checkbox"
        checked={$analyticals.faunaFreshwater.visible}
        class="checkbox"
        on:change={analyticalsToggles.toggleFaunaFreshwater}
      />
      <label for="aves-freshwater-map" class="ml-2">Freshwater</label>
    </div>

    <div class="flex items-center">
      <input
        id="aves-marine-map"
        type="checkbox"
        checked={$analyticals.faunaMarine.visible}
        class="checkbox"
        on:change={analyticalsToggles.toggleFaunaMarine}
      />
      <label for="aves-marine-map" class="ml-2">Marine</label>
    </div>

    <div class="flex items-center">
      <input
        id="aves-terrestrial-map"
        type="checkbox"
        checked={$analyticals.faunaTerrestrial.visible}
        class="checkbox"
        on:change={analyticalsToggles.toggleFaunaTerrestrial}
      />
      <label for="aves-terrestrial-map" class="ml-2">Terrestrial</label>
    </div>

    <h4>
      Introductory Pathways (note that the biological control introductory
      pathway does not have established species with known locality)
    </h4>

    <div class="flex items-center">
      <input
        id="intro-consumption-trade-map"
        type="checkbox"
        checked={$analyticals.introConsumption.visible}
        class="checkbox"
        on:change={analyticalsToggles.toggleIntroConsumption}
      />
      <label for="intro-consumption-trade-map" class="ml-2">Consumption</label>
    </div>

    <div class="flex items-center">
      <input
        id="intro-corridor-map"
        type="checkbox"
        checked={$analyticals.introCorridor.visible}
        class="checkbox"
        on:change={analyticalsToggles.toggleIntroCorridor}
      />
      <label for="intro-corridor-map" class="ml-2">Corridor</label>
    </div>

    <div class="flex items-center">
      <input
        id="intro-fishing-map"
        type="checkbox"
        checked={$analyticals.introFishing.visible}
        class="checkbox"
        on:change={analyticalsToggles.toggleIntroFishing}
      />
      <label for="intro-fishing-map" class="ml-2">Fishing</label>
    </div>

    <div class="flex items-center">
      <input
        id="intro-pet-trade-map"
        type="checkbox"
        checked={$analyticals.introPet.visible}
        class="checkbox"
        on:change={analyticalsToggles.toggleIntroPet}
      />
      <label for="intro-pet-trade-map" class="ml-2">Pet Trade</label>
    </div>

    <div class="flex items-center">
      <input
        id="intro-plant-trade-map"
        type="checkbox"
        checked={$analyticals.introPlant.visible}
        class="checkbox"
        on:change={analyticalsToggles.toggleIntroPlant}
      />
      <label for="intro-plant-trade-map" class="ml-2">Plant Trade</label>
    </div>

    <div class="flex items-center">
      <input
        id="intro-stowaway-map"
        type="checkbox"
        checked={$analyticals.introStowaway.visible}
        class="checkbox"
        on:change={analyticalsToggles.toggleIntroStowaway}
      />
      <label for="intro-stowaway-map" class="ml-2">Stowaway</label>
    </div>

    <div class="flex items-center">
      <input
        id="intro-unknown-map"
        type="checkbox"
        checked={$analyticals.introUnknown.visible}
        class="checkbox"
        on:change={analyticalsToggles.toggleIntroUnknown}
      />
      <label for="intro-unknown-map" class="ml-2">Unknown</label>
    </div>

    <h4>Active Removal and Extinction</h4>

    <div class="flex items-center">
      <input
        id="other-active-removal-map"
        type="checkbox"
        checked={$analyticals.othersActiveRemoval.visible}
        class="checkbox"
        on:change={analyticalsToggles.toggleOthersActiveRemoval}
      />
      <label for="other-active-removal-map" class="ml-2">
        Active Removal
      </label>
    </div>

    <div class="flex items-center mt-2">
      <input
        id="other-extinction-map"
        type="checkbox"
        checked={$analyticals.othersExtinction.visible}
        class="checkbox"
        on:change={analyticalsToggles.toggleOthersExtinction}
      />
      <label for="other-extinction-map" class="ml-2">
        Extinction (instead of count, year of extinction is considered where
        before 1965 would be the lower bound and 1965 onwards would be the upper
        bound)
      </label>
    </div>

    <h4>
      Other supplementary information which may be useful for further analysis
      include
    </h4>

    <div class="flex items-center">
      <input
        id="other-ports"
        type="checkbox"
        checked={$ports.visible}
        class="checkbox"
        on:change={togglePorts}
      />
      <label for="other-ports" class="ml-2">
        Location of ports around and in Singapore
      </label>
    </div>

    <img src="/public/assets/legend-ports.png" alt="Ports" />
  </article>
</div>
