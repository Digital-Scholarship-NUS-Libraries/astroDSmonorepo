<script lang="ts">
  import { filteredAnimals } from "../store/animals.js";
</script>

<div class="h-custom w-full overflow-y-scroll">
  <table class="table-auto">
    <tr>
      <th class="px-4 py-2">Current Name ({$filteredAnimals.length} animals)</th
      >
      <th class="px-4 py-2">Fauna</th>
      <th class="px-4 py-2">First Published Year</th>
      <th class="px-4 py-2">Introduction Pathway</th>
      <th class="px-4 py-2">First Published Latitude</th>
      <th class="px-4 py-2">First Published Longitude</th>
    </tr>
    {#each $filteredAnimals as animal}
      <tr>
        <td class="border px-4 py-2"><em>{animal["Name_Current"]}</em></td>
        <td class="border px-4 py-2">{animal["Fauna"]}</td>
        <td class="border px-4 py-2">{animal["Date_yyyy_FirstPub"]}</td>
        <td class="border px-4 py-2">{animal["Intro_all"]}</td>
        <td class="border px-4 py-2">{animal["Lat_FirstPub"]}</td>
        <td class="border px-4 py-2">{animal["Long_FirstPub"]}</td>
      </tr>
    {/each}
  </table>
</div>
