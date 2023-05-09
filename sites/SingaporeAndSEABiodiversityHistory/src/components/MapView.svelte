<script lang="ts">
  import Map from "./Map.svelte";
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

<div>
  <p>
    Fauna:
    <label>
      <input
        type="checkbox"
        on:change={setFaunaAves}
        checked={$filterAttributes.fauna.aves}
      />
      Aves
    </label>
    <label>
      <input
        type="checkbox"
        on:change={setFaunaFreshwater}
        checked={$filterAttributes.fauna.freshwater}
      />
      Freshwater
    </label>
    <label>
      <input
        type="checkbox"
        on:change={setFaunaMarine}
        checked={$filterAttributes.fauna.marine}
      />
      Marine
    </label>

    <label>
      <input
        type="checkbox"
        on:change={setFaunaTerrestrial}
        checked={$filterAttributes.fauna.terrestrial}
      />
      Terrestrial
    </label>
  </p>

  <p>
    Pathway:

    <label>
      <input
        type="checkbox"
        on:change={setIntroPathwayAgricultural}
        checked={$filterAttributes.introPathway.agricultural}
      />
      Agricultural
    </label>

    <label>
      <input
        type="checkbox"
        on:change={setIntroPathwayBiological}
        checked={$filterAttributes.introPathway.biological}
      />
      Biological
    </label>

    <label>
      <input
        type="checkbox"
        on:change={setIntroPathwayConsumption}
        checked={$filterAttributes.introPathway.consumption}
      />
      Consumption
    </label>

    <label>
      <input
        type="checkbox"
        on:change={setIntroPathwayCorridor}
        checked={$filterAttributes.introPathway.corridor}
      />
      Corridor
    </label>

    <label>
      <input
        type="checkbox"
        on:change={setIntroPathwayFishing}
        checked={$filterAttributes.introPathway.fishing}
      />
      Fishing
    </label>

    <label>
      <input
        type="checkbox"
        on:change={setIntroPathwayHorticultural}
        checked={$filterAttributes.introPathway.horticultural}
      />
      Horticultural
    </label>

    <label>
      <input
        type="checkbox"
        on:change={setIntroPathwayMercyRelease}
        checked={$filterAttributes.introPathway.mercyRelease}
      />
      Mercy Release
    </label>

    <label>
      <input
        type="checkbox"
        on:change={setIntroPathwayPetTrade}
        checked={$filterAttributes.introPathway.petTrade}
      />
      Pet Trade
    </label>

    <label>
      <input
        type="checkbox"
        on:change={setIntroPathwayTransport}
        checked={$filterAttributes.introPathway.transport}
      />
      Transport
    </label>
  </p>

  <p>
    Others:
    <label>
      <input
        type="checkbox"
        on:change={setExtinction}
        checked={$filterAttributes.extinction}
      />
      Extinct
    </label>

    <label>
      <input
        type="checkbox"
        on:change={setActiveRemoval}
        checked={$filterAttributes.activeRemoval}
      />
      Active Removal
    </label>
  </p>

  <Map lon={103.8} lat={1.35} zoom={10} />
</div>
