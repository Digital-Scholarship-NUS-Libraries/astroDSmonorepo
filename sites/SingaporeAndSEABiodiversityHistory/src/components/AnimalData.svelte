<script lang="ts">
  import { filteredAnimals } from "../store/animals.js";
</script>

<div class="h-screen w-full overflow-y-scroll">
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
        <td class="border px-4 py-2">{animal["Date_yyyy_FirstPub"]}</td>
        <td class="border px-4 py-2">{animal["Intro_all"]}</td>
        <td class="border px-4 py-2">{animal["Extinction_YN"]}</td>
        <td class="border px-4 py-2">{animal["ActiveRemoval_YN"]}</td>
      </tr>
    {/each}
  </table>
</div>
