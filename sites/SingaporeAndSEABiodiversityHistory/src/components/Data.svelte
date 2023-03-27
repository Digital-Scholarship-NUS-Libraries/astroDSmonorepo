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

  <table class="table-auto">
    <tr>
      <th class="px-4 py-2">Common Name ({$filteredAnimals.length} animals)</th>
      <th class="px-4 py-2">Fauna</th>
      <th class="px-4 py-2">First published year</th>
      <th class="px-4 py-2">Introduction pathway</th>
      <th class="px-4 py-2">Extinction</th>
      <th class="px-4 py-2">Active Removal</th>
    </tr>
    {#each $filteredAnimals as animal}
      <tr>
        <td class="border px-4 py-2">{animal["Common Name"]}</td>
        <td class="border px-4 py-2">{animal["Fauna"]}</td>
        <td class="border px-4 py-2"
          >{animal["Date: yyyy (First published)"]}</td
        >
        <td class="border px-4 py-2">{animal["Introduction_all"]}</td>
        <td class="border px-4 py-2">{animal["Extinction (Y/N)"]}</td>
        <td class="border px-4 py-2">{animal["Active removal (Y/N)"]}</td>
      </tr>
    {/each}
  </table>
</div>
