<script lang="ts">
  import {
    filterAttributes,
    setActiveRemoval,
    setExtinction,
    setResidencyCasual,
    setResidencyCryptogenic,
    setResidencyNaturalised,
  } from "../../store/plants.js";
</script>

<div class="pl-4 pr-4 pb-4 h-full overflow-y-scroll">
  <article class="prose">
    <h4>
      Locality of established non-native plant species first published records
      in Singapore with location information.
    </h4>

    <h4>Description</h4>

    <ul class="list-disc">
      <li>
        This map illustrates the locality of first published records of
        introduced non-native plant species in Singapore from 1819 to present.
      </li>
      <li>
        Note that most locality points on the maps provide the species'
        approximate location as certain historical sources only provide
        approximate location details and not the exact coordinates.
      </li>
      <li>
        Points at the same location may also be presented in a clustered manner
        for better readability, where multiple points may be joined together
        with a single marker and a number indicating the number of points at a
        certain map view extent.
      </li>
      <li>Data is contributed courtesy of the National Parks Board</li>
    </ul>

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
      class={$filterAttributes.residency.casual
        ? "btn btn-xs btn text-white bg-gray-800 hover:bg-gray-500"
        : "btn btn-xs btn-outline hover:bg-gray-300"}
      on:click={setResidencyCasual}
    >
      Casual
    </button>

    <button
      class={$filterAttributes.residency.cryptogenic
        ? "btn btn-xs btn text-white bg-gray-800 hover:bg-gray-500"
        : "btn btn-xs btn-outline hover:bg-gray-300"}
      on:click={setResidencyCryptogenic}
    >
      Cryptogenic
    </button>

    <button
      class={$filterAttributes.residency.naturalised
        ? "btn btn-xs btn text-white bg-gray-800 hover:bg-gray-500"
        : "btn btn-xs btn-outline hover:bg-gray-300"}
      on:click={setResidencyNaturalised}
    >
      Naturalised
    </button>

    <h4>Others</h4>

    <button
      class={$filterAttributes.activeRemoval
        ? "btn btn-xs btn text-white bg-gray-800 hover:bg-gray-500"
        : "btn btn-xs btn-outline hover:bg-gray-300"}
      on:click={setActiveRemoval}
    >
      Active Removal
    </button>

    <button
      class={$filterAttributes.extinction
        ? "btn btn-xs btn text-white bg-gray-800 hover:bg-gray-500"
        : "btn btn-xs btn-outline hover:bg-gray-300"}
      on:click={setExtinction}
    >
      Extinct
    </button>
  </article>
</div>
