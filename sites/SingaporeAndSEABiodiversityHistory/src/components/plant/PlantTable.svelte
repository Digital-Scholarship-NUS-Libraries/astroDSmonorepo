<script lang="ts">
  import { filteredPlants } from "../../store/plants.js";
</script>

<div class="h-screen w-full overflow-y-scroll">
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
        <td class="border px-4 py-2">{plant["Date_yyyy_Early"]}</td>
        <td class="border px-4 py-2">{plant["Status"]}</td>
        <td class="border px-4 py-2">{plant["Extinction_YN"]}</td>
        <td class="border px-4 py-2">{plant["ActiveRemoval_YN"]}</td>
      </tr>
    {/each}
  </table>
</div>
