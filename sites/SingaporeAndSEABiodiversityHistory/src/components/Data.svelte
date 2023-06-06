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
  <article>
    <h4>Years (Largest Range: 1800 - 2022)</h4>

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
      max="2022"
      placeholder="End"
      class="input input-bordered input-sm max-w-xs"
    />

    <h4>Fauna</h4>

    <button
      class={$filterAttributes.fauna.aves
        ? "btn btn-xs btn hover:bg-gray-400"
        : "btn btn-xs btn-outline hover:bg-gray-400"}
      on:click={setFaunaAves}
    >
      Aves
    </button>

    <button
      class={$filterAttributes.fauna.freshwater
       ? "btn btn-xs btn hover:bg-gray-400"
        : "btn btn-xs btn-outline hover:bg-gray-400"}
      on:click={setFaunaFreshwater}
    >
      Freshwater
    </button>

    <button
      class={$filterAttributes.fauna.marine
        ? "btn btn-xs btn hover:bg-gray-400"
        : "btn btn-xs btn-outline hover:bg-gray-400"}
      on:click={setFaunaMarine}
    >
      Marine
    </button>

    <button
      class={$filterAttributes.fauna.terrestrial
        ? "btn btn-xs btn hover:bg-gray-400"
        : "btn btn-xs btn-outline hover:bg-gray-400"}
      on:click={setFaunaTerrestrial}
    >
      Terrestrial
    </button>

    <h4>Pathway</h4>

    <button
      class={$filterAttributes.introPathway.agricultural
        ? "btn btn-xs btn hover:bg-gray-400"
        : "btn btn-xs btn-outline hover:bg-gray-400"}
      on:click={setIntroPathwayAgricultural}
    >
      Agricultural
    </button>

    <button
      class={$filterAttributes.introPathway.biological
        ? "btn btn-xs btn hover:bg-gray-400"
        : "btn btn-xs btn-outline hover:bg-gray-400"}
      on:click={setIntroPathwayBiological}
    >
      Biological
    </button>

    <button
      class={$filterAttributes.introPathway.consumption
        ? "btn btn-xs btn hover:bg-gray-400"
        : "btn btn-xs btn-outline hover:bg-gray-400"}
      on:click={setIntroPathwayConsumption}
    >
      Consumption
    </button>

    <button
      class={$filterAttributes.introPathway.corridor
        ? "btn btn-xs btn hover:bg-gray-400"
        : "btn btn-xs btn-outline hover:bg-gray-400"}
      on:click={setIntroPathwayCorridor}
    >
      Corridor
    </button>

    <button
      class={$filterAttributes.introPathway.fishing
        ? "btn btn-xs btn hover:bg-gray-400"
        : "btn btn-xs btn-outline hover:bg-gray-400"}
      on:click={setIntroPathwayFishing}
    >
      Fishing
    </button>

    <button
      class={$filterAttributes.introPathway.horticultural
        ? "btn btn-xs btn hover:bg-gray-400"
        : "btn btn-xs btn-outline hover:bg-gray-400"}
      on:click={setIntroPathwayHorticultural}
    >
      Horticultural
    </button>

    <button
      class={$filterAttributes.introPathway.mercyRelease
        ? "btn btn-xs btn hover:bg-gray-400"
        : "btn btn-xs btn-outline hover:bg-gray-400"}
      on:click={setIntroPathwayMercyRelease}
    >
      Mercy Release
    </button>

    <button
      class={$filterAttributes.introPathway.petTrade
        ? "btn btn-xs btn hover:bg-gray-400"
        : "btn btn-xs btn-outline hover:bg-gray-400"}
      on:click={setIntroPathwayPetTrade}
    >
      Pet Trade
    </button>

    <button
      class={$filterAttributes.introPathway.transport
        ? "btn btn-xs btn hover:bg-gray-400"
        : "btn btn-xs btn-outline hover:bg-gray-400"}
      on:click={setIntroPathwayTransport}
    >
      Transport
    </button>

    <h4>Others</h4>

    <button
      class={$filterAttributes.activeRemoval
        ? "btn btn-xs btn hover:bg-gray-400"
        : "btn btn-xs btn-outline hover:bg-gray-400"}
      on:click={setActiveRemoval}
    >
      Active Removal
    </button>

    <button
      class={$filterAttributes.extinction
        ? "btn btn-xs btn hover:bg-gray-400"
        : "btn btn-xs btn-outline hover:bg-gray-400"}
      on:click={setExtinction}
    >
      Extinct
    </button>
  </article>

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
        <td class="border px-4 py-2">{animal["CommonName"]}</td>
        <td class="border px-4 py-2">{animal["Fauna"]}</td>
        <td class="border px-4 py-2"
          >{animal["Date_yyyy_FirstPub"]}</td
        >
        <td class="border px-4 py-2">{animal["Intro_all"]}</td>
        <td class="border px-4 py-2">{animal["Extinction_YN"]}</td>
        <td class="border px-4 py-2">{animal["ActiveRemoval_YN"]}</td>
      </tr>
    {/each}
  </table>
</div>
