<script lang="ts">
 import {
  filteredPlants,
  filterAttributes,
  setActiveRemoval,
  setExtinction,
  setResidencyCasual,
  setResidencyCryptogenic,
  setResidencyNaturalised,
 } from "../store/plants.js";
</script>

<div>
  <article>
    <h4>Years (Largest Range: 1819 - 2023)</h4>

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

    <h4>Residency Status</h4>

    <button
      class={$filterAttributes.residency.naturalised
        ? "btn btn-xs btn hover:bg-gray-500"
        : "btn btn-xs btn-outline hover:bg-gray-300"}
      on:click={setResidencyNaturalised}
    >
      Naturalised
    </button>

    <button
      class={$filterAttributes.residency.casual
        ? "btn btn-xs btn hover:bg-gray-500"
        : "btn btn-xs btn-outline hover:bg-gray-300"}
      on:click={setResidencyCasual}
    >
      Casual
    </button>

    <button
      class={$filterAttributes.residency.cryptogenic
        ? "btn btn-xs btn hover:bg-gray-500"
        : "btn btn-xs btn-outline hover:bg-gray-300"}
      on:click={setResidencyCryptogenic}
    >
      Cryptogenic
    </button>

    <h4>Others</h4>

    <button
      class={$filterAttributes.activeRemoval
        ? "btn btn-xs btn hover:bg-gray-500"
        : "btn btn-xs btn-outline hover:bg-gray-300"}
      on:click={setActiveRemoval}
    >
      Active Removal
    </button>

    <button
      class={$filterAttributes.extinction
        ? "btn btn-xs btn hover:bg-gray-500"
        : "btn btn-xs btn-outline hover:bg-gray-300"}
      on:click={setExtinction}
    >
      Extinct
    </button>
  </article>

  <table class="table-auto">
    <tr>
      <th class="px-4 py-2">Common Name ({$filteredPlants.length} animals)</th>
      <th class="px-4 py-2">Early year</th>
      <th class="px-4 py-2">Residency Status</th>
      <th class="px-4 py-2">Extinction</th>
      <th class="px-4 py-2">Active Removal</th>
    </tr>
    {#each $filteredPlants as plant}
      <tr>
        <td class="border px-4 py-2">{plant["CommonName"]}</td>
        <td class="border px-4 py-2"
          >{plant["Date_yyyy_Early"]}</td
        >
        <td class="border px-4 py-2">{plant["Status"]}</td>
        <td class="border px-4 py-2">{plant["Extinction_YN"]}</td>
        <td class="border px-4 py-2">{plant["ActiveRemoval_YN"]}</td>
      </tr>
    {/each}
  </table>
</div>
