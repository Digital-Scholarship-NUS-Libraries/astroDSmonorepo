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
    toggleIntroPathwayStowaway,
    toggleIntroPathwayUnknown,
  } from "../store/animals.js";
  import {
    analyticals,
    analyticalsToggles,
    ports,
    togglePorts,
    historicals,
    historicalsToggles,
  } from "../store/animalLayers.js";
</script>

<div class="prose max-w-none h-custom overflow-y-scroll mr-4 ml-4 mb-2">
  <h4>
    1. Locality of established non-native animal species first published records
    with location information (this layer is kept on by default).
  </h4>

  <h4>Description</h4>

  <ul class="list-disc">
    <li>
      This map illustrates the locality of first published records of
      established non-native animal species in Singapore from the nineteenth
      century to present, represented by orange point markers.
    </li>
    <li>
      Please note that the exact coordinates of most locality points may not be
      available in certain historical sources, hence they are represented by
      approximate locations.
    </li>
    <li>
      To enhance readability, points at the same location may appear as
      clustered points with a number indicating the number of localities. Points
      without numbers indicate a single locality.
    </li>
    <li>
      Due to the sensitivity of the site, the exact location of non-native
      species within Pulau Tekong has been redacted.
    </li>
    <li>
      Data is contributed courtesy of the Lee Kong Chian Natural History Museum.
    </li>
  </ul>

  <h4>
    Year range of interest (adjust desired year range by either keying in the
    years of interest the boxes or mousing over boxes to use the up/down toggle
    buttons)
  </h4>

  <input
    type="number"
    bind:value={$filterAttributes.minYear}
    min="1800"
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

  <h4>
    Fauna type (options are selected by default, click on the buttons to
    unselect them accordingly)
  </h4>

  <button
    class={$filterAttributes.fauna.aves
      ? "btn btn-xs text-white bg-gray-800 hover:bg-gray-500"
      : "btn btn-xs btn-outline hover:bg-gray-300"}
    on:click={toggleFaunaAves}
  >
    Aves
  </button>

  <button
    class={$filterAttributes.fauna.freshwater
      ? "btn btn-xs text-white bg-gray-800 hover:bg-gray-500"
      : "btn btn-xs btn-outline hover:bg-gray-300"}
    on:click={toggleFaunaFreshwater}
  >
    Freshwater
  </button>

  <button
    class={$filterAttributes.fauna.marine
      ? "btn btn-xs text-white bg-gray-800 hover:bg-gray-500"
      : "btn btn-xs btn-outline hover:bg-gray-300"}
    on:click={toggleFaunaMarine}
  >
    Marine
  </button>

  <button
    class={$filterAttributes.fauna.terrestrial
      ? "btn btn-xs text-white bg-gray-800 hover:bg-gray-500"
      : "btn btn-xs btn-outline hover:bg-gray-300"}
    on:click={toggleFaunaTerrestrial}
  >
    Terrestrial
  </button>

  <h4>
    Introduction pathway (options are selected by default, click on the buttons
    to unselect them accordingly)
  </h4>

  <button
    class={$filterAttributes.introPathway.biological
      ? "btn btn-xs text-white bg-gray-800 hover:bg-gray-500"
      : "btn btn-xs btn-outline hover:bg-gray-300"}
    on:click={toggleIntroPathwayBiological}
  >
    Biological
  </button>

  <button
    class={$filterAttributes.introPathway.consumption
      ? "btn btn-xs text-white bg-gray-800 hover:bg-gray-500"
      : "btn btn-xs btn-outline hover:bg-gray-300"}
    on:click={toggleIntroPathwayConsumption}
  >
    Consumption
  </button>

  <button
    class={$filterAttributes.introPathway.corridor
      ? "btn btn-xs text-white bg-gray-800 hover:bg-gray-500"
      : "btn btn-xs btn-outline hover:bg-gray-300"}
    on:click={toggleIntroPathwayCorridor}
  >
    Corridor
  </button>

  <button
    class={$filterAttributes.introPathway.fishing
      ? "btn btn-xs text-white bg-gray-800 hover:bg-gray-500"
      : "btn btn-xs btn-outline hover:bg-gray-300"}
    on:click={toggleIntroPathwayFishing}
  >
    Fishing
  </button>

  <button
    class={$filterAttributes.introPathway.petTrade
      ? "btn btn-xs text-white bg-gray-800 hover:bg-gray-500"
      : "btn btn-xs btn-outline hover:bg-gray-300"}
    on:click={toggleIntroPathwayPetTrade}
  >
    Pet Trade
  </button>

  <button
    class={$filterAttributes.introPathway.plantTrade
      ? "btn btn-xs text-white bg-gray-800 hover:bg-gray-400"
      : "btn btn-xs btn-outline hover:bg-gray-300"}
    on:click={toggleIntroPathwayPlantTrade}
  >
    Plant Trade
  </button>

  <button
    class={$filterAttributes.introPathway.stowaway
      ? "btn btn-xs text-white bg-gray-800 hover:bg-gray-500"
      : "btn btn-xs btn-outline hover:bg-gray-300"}
    on:click={toggleIntroPathwayStowaway}
  >
    Stowaway
  </button>

  <button
    class={$filterAttributes.introPathway.unknown
      ? "btn btn-xs text-white bg-gray-800 hover:bg-gray-500"
      : "btn btn-xs btn-outline hover:bg-gray-300"}
    on:click={toggleIntroPathwayUnknown}
  >
    Unknown
  </button>

  <div class="flex items-center mt-4">
    <input
      id="animal-visible"
      type="checkbox"
      checked={!$animalsVisibility}
      class="checkbox"
      on:change={toggleAnimalsVisibility}
    />
    <label for="animal-visible" class="ml-2">
      Hide layer (click on the checkbox to hide this layer)
    </label>
  </div>

  <h4>2. Maps with analysis.</h4>

  <h4>Description</h4>

  <body>
    Information from the project database and other relevant reliable sources
    are used to generate these maps which support the visual analysis of the
    data for research and exploration. The study area has been broken down into
    transverse hexagonal tessellations for consistency and summary maps of count
    and mean year of first published record for established species for
    respective fauna types, introductory pathways, and other information are
    generated. 1965 is used as reference as it is the year which Singapore has
    gained independence.
  </body>

  <h4>Legend</h4>

  <img
    class="max-h-60"
    src={`${import.meta.env.BASE_URL}assets/legend-species-maps.png`}
    alt="legend"
  />

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
    Introductory Pathways (note that the biological control introductory pathway
    does not have established species with known locality)
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

  <img
    class="max-h-20"
    src={`${import.meta.env.BASE_URL}assets/legend-ports.png`}
    alt="Ports"
  />

  <h4>3. Historical maps showing land use land cover</h4>

  <div class="mt-2 mb-2">
    <div class="flex items-center">
      <input
        id="historical-1913"
        type="checkbox"
        checked={$historicals.year1913.visible}
        class="checkbox"
        on:change={historicalsToggles.toggleYear1913}
      />
      <label for="historical-1913" class="ml-2">
        1913 map of Singapore and dependencies
      </label>
    </div>
    <body>
      Description: This layer illustrates the map of Singapore and her
      dependencies in the year 1913.
    </body>
  </div>

  <div>
    <div class="flex items-center">
      <input
        id="historical-1983"
        type="checkbox"
        checked={$historicals.year1983.visible}
        class="checkbox"
        on:change={historicalsToggles.toggleYear1983}
      />
      <label for="historical-1983" class="ml-2">
        1983 map of Singapore and dependencies
      </label>
    </div>
    <body>
      Description: This layer illustrates the map of Singapore and her
      dependencies in the year 1983.
    </body>
  </div>
</div>
