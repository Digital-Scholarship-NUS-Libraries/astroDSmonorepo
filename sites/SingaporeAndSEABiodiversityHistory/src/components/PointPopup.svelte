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
  <div class="max-h-80 w-80 overflow-y-scroll">
    {#if feature}
      <ul>
        <strong>General</strong>
        <li><strong>Status: </strong>{feature["Status"]}</li>
        <li>
          <strong>Species Name (Current Accepted): </strong>{feature[
            "Name_Current"
          ]}
        </li>
        <li><strong>Authority, Year: </strong>{feature["Authority_Year"]}</li>
        <li>
          <strong>Common Name: </strong>{feature["CommonName"]}
        </li>
        <li>
          <strong>Species Name (Previous Names): </strong>{feature[
            "PreviousNames"
          ]}
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
          <strong>Native Geographic Range: </strong>{feature["Native_geog"]}
        </li>
        <br />

        <li><strong>First Published</strong></li>
        <li>
          <strong>Species name (First Published): </strong>{feature[
            "Name_FirstPub"
          ]}
        </li>
        <li>
          <strong>Reference (First Published): </strong>{feature[
            "Ref_FirstPub"
          ]}
        </li>
        <li>
          <strong>Specific Page No. (First Published): </strong>{feature[
            "PageNo_FirstPub"
          ]}
        </li>
        <li>
          <strong>Date: yyyy (First Published): </strong>{feature[
            "Date_yyyy_FirstPub"
          ]}
        </li>
        <li>
          <strong>Latitude (First Published): </strong>{feature["Lat_FirstPub"]}
        </li>
        <li>
          <strong>Longitude (First Published): </strong>{feature[
            "Long_FirstPub"
          ]}
        </li>
        <li>
          <strong>Location (First published): </strong>{feature[
            "Location_FirstPub"
          ]}
        </li>
        <br />

        <li><strong>First Sighting</strong></li>
        <li>
          <strong>Species name (First sighting): </strong>{feature[
            "Name_FirstSight"
          ]}
        </li>
        <li>
          <strong>Reference (First sighting): </strong>{feature[
            "Ref_FirstSight"
          ]}
        </li>
        <li>
          <strong>Date: dd/mm/yyyy (First sighting): </strong>{feature[
            "Date_ddmmyyyy_FirstSight"
          ]}
        </li>
        <br />

        <li>
          <strong>Year (First sighting) : </strong>{feature["Year_FirstSight"]}
        </li>
        <li>
          <strong>Latitude (First sighting) : </strong>{feature[
            "Lat_FirstSight"
          ]}
        </li>
        <li>
          <strong>Longitude (First sighting) : </strong>{feature[
            "Long_FirstSight"
          ]}
        </li>
        <li>
          <strong>Location (First sighting): </strong>{feature[
            "Location_FirstSight"
          ]}
        </li>
        <br />

        <li><strong>Introduction Pathway</strong></li>
        <li>
          <strong>Introduction Pathway: </strong>{feature["Intro_pathway"]}
        </li>
        <li><strong>Introduction Mode: </strong>{feature["Intro_mode"]}</li>
        <li><strong>Introduction All: </strong>{feature["Intro_all"]}</li>
        <br />

        <li><strong> Extinction </strong></li>
        <li><strong>Extinction (Y/N): </strong>{feature["Extinction_YN"]}</li>
        <li>
          <strong>Year (Extinction): </strong>{feature["Year_Extinction"]}
        </li>
        <li>
          <strong>Extinction Reference: </strong>{feature["Extinction_Ref"]}
        </li>
        <br />

        <li><strong> Active Removal </strong></li>
        <li>
          <strong>Active removal (Y/N): </strong>{feature["ActiveRemoval_YN"]}
        </li>
        <li>
          <strong>Active removal Reference: </strong>{feature[
            "ActiveRemoval_Ref"
          ]}
        </li>
        <br />

        <li><strong>General</strong></li>
        <li>
          <strong
            >References: Subsequent records (Surname, journal short form,
            vol(issue) (year) page):
          </strong>{feature["Ref_SubsequentRecords"]}
        </li>
        <li><strong>Additional Remarks: </strong>{feature["Add_Remarks"]}</li>
      </ul>
    {/if}
  </div>
</div>
