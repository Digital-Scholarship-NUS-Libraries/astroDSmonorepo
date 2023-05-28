<script lang="ts">
  import {
    filteredAnimals,
    filterAttributes,
    setFaunaAves,
    setFaunaFreshwater,
    setFaunaMarine,
    setFaunaTerrestrial,
    setIntroPathwayAgricultural,
    setIntroPathwayBiological,
    setIntroPathwayConsumption,
    setIntroPathwayCorridor,
    setIntroPathwayFishing,
    setIntroPathwayHorticultural,
    setIntroPathwayMercyRelease,
    setIntroPathwayPetTrade,
    setIntroPathwayTransport,
    setExtinction,
    setActiveRemoval,
  } from "../store/animals.js";
</script>

<div class="pl-4 pr-4 pb-4 h-full overflow-y-scroll">
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

    <h4>Fauna</h4>

    <button
      class={$filterAttributes.fauna.aves
        ? "btn btn-xs btn"
        : "btn btn-xs btn-outline"}
      on:click={setFaunaAves}
    >
      Aves
    </button>

    <button
      class={$filterAttributes.fauna.freshwater
        ? "btn btn-xs btn"
        : "btn btn-xs btn-outline"}
      on:click={setFaunaFreshwater}
    >
      Freshwater
    </button>

    <button
      class={$filterAttributes.fauna.marine
        ? "btn btn-xs btn"
        : "btn btn-xs btn-outline"}
      on:click={setFaunaMarine}
    >
      Marine
    </button>

    <button
      class={$filterAttributes.fauna.terrestrial
        ? "btn btn-xs btn"
        : "btn btn-xs btn-outline"}
      on:click={setFaunaTerrestrial}
    >
      Terrestrial
    </button>

    <h4>Pathway</h4>

    <button
      class={$filterAttributes.introPathway.agricultural
        ? "btn btn-xs btn"
        : "btn btn-xs btn-outline"}
      on:click={setIntroPathwayAgricultural}
    >
      Agricultural
    </button>

    <button
      class={$filterAttributes.introPathway.biological
        ? "btn btn-xs btn"
        : "btn btn-xs btn-outline"}
      on:click={setIntroPathwayBiological}
    >
      Biological
    </button>

    <button
      class={$filterAttributes.introPathway.consumption
        ? "btn btn-xs btn"
        : "btn btn-xs btn-outline"}
      on:click={setIntroPathwayConsumption}
    >
      Consumption
    </button>

    <button
      class={$filterAttributes.introPathway.corridor
        ? "btn btn-xs btn"
        : "btn btn-xs btn-outline"}
      on:click={setIntroPathwayCorridor}
    >
      Corridor
    </button>

    <button
      class={$filterAttributes.introPathway.fishing
        ? "btn btn-xs btn"
        : "btn btn-xs btn-outline"}
      on:click={setIntroPathwayFishing}
    >
      Fishing
    </button>

    <button
      class={$filterAttributes.introPathway.horticultural
        ? "btn btn-xs btn"
        : "btn btn-xs btn-outline"}
      on:click={setIntroPathwayHorticultural}
    >
      Horticultural
    </button>

    <button
      class={$filterAttributes.introPathway.mercyRelease
        ? "btn btn-xs btn"
        : "btn btn-xs btn-outline"}
      on:click={setIntroPathwayMercyRelease}
    >
      Mercy Release
    </button>

    <button
      class={$filterAttributes.introPathway.petTrade
        ? "btn btn-xs btn"
        : "btn btn-xs btn-outline"}
      on:click={setIntroPathwayPetTrade}
    >
      Pet Trade
    </button>

    <button
      class={$filterAttributes.introPathway.transport
        ? "btn btn-xs btn"
        : "btn btn-xs btn-outline"}
      on:click={setIntroPathwayTransport}
    >
      Transport
    </button>

    <h4>Others</h4>

    <button
      class={$filterAttributes.activeRemoval
        ? "btn btn-xs btn"
        : "btn btn-xs btn-outline"}
      on:click={setActiveRemoval}
    >
      Active Removal
    </button>

    <button
      class={$filterAttributes.extinction
        ? "btn btn-xs btn"
        : "btn btn-xs btn-outline"}
      on:click={setExtinction}
    >
      Extinct
    </button>
  </article>
</div>
