<script lang="ts">
  import type { GeoJsonProperties } from "geojson";

  export let feature: GeoJsonProperties;
  export let closeButtonVisible: boolean;
  export let onClose = () => {};
</script>

<div>
  {#if closeButtonVisible}
    <button class="mb-2 top-2 left-2" on:click={onClose}>X</button>
  {/if}
  <div class="max-h-80 w-80 overflow-y-scroll overscroll-contain">
    {#if feature}
      <ul>
        <strong class="underline underline-offset-1">General</strong>
        <li>
          <strong>Species Name (Current Accepted): </strong>
          <em>{feature["Name_Current"]}</em>
        </li>
        <li><strong>Authority, Year: </strong>{feature["Authority_Year"]}</li>
        <li>
          <strong>Common Name: </strong>{feature["CommonName"]}
        </li>
        <li>
          <strong>Species Name (Previous Names): </strong>
          <em>{feature["PreviousNames"]}</em>
        </li>
        <li><strong>Kingdom: </strong>{feature["Kingdom"]}</li>
        <li><strong>Phylum: </strong>{feature["Phylum"]}</li>
        <li><strong>Class: </strong>{feature["Class"]}</li>
        <li><strong>Order: </strong>{feature["Order"]}</li>
        <li><strong>Family: </strong>{feature["Family"]}</li>
        <li><strong>Genus: </strong>{feature["Genus"]}</li>
        <li><strong>Species: </strong>{feature["Species"]}</li>
        <li>
          <strong>Native Biogeographic Region: </strong>{feature[
            "Native_biogeog"
          ]}
        </li>
        <li>
          <strong>Native Geographic Range: </strong>
          {feature["Native_geog"]}
        </li>
        <br />

        <li>
          <strong class="underline underline-offset-1">First Published</strong>
        </li>
        <li>
          <strong>Species name (First Published): </strong>
          <em>{feature["Name_FirstPub"]}</em>
        </li>
        <li>
          <strong>Reference (First Published): </strong>
          {feature["Ref_FirstPub"]}
        </li>
        <li>
          <strong>Specific Page No. (First Published): </strong>
          {feature["PageNo_FirstPub"]}
        </li>
        <li>
          <strong>Date: yyyy (First Published): </strong>
          {feature["Date_yyyy_FirstPub"]}
        </li>
        <li>
          <strong>Latitude (First Published): </strong>
          {feature["Lat_FirstPub"]}
        </li>
        <li>
          <strong>Longitude (First Published): </strong>
          {feature["Long_FirstPub"]}
        </li>
        <li>
          <strong>Location (First published): </strong>
          {feature["Location_FirstPub"]}
        </li>
        <br />

        <li>
          <strong class="underline underline-offset-1">
            Introduction Pathway
          </strong>
        </li>
        <li><strong>Introduction Pathway: </strong>{feature["Intro_all"]}</li>
      </ul>
    {/if}
  </div>
</div>
