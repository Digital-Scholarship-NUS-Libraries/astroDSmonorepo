import { derived } from 'svelte/store';
import { filteredAnimals, filterAttributes } from "./animals";

export const filteredAnimalsGeoJSON = derived(
  [filteredAnimals, filterAttributes],
  ([$filteredAnimals, $filterAttributes], set) => {
    const animalsFeatures = $filteredAnimals
      .map(animal => {
        return {
          "type": "Feature",
          "geometry": { "type": "Point", "coordinates": [Number(animal["Long_FirstPub"]), Number(animal["Lat_FirstPub"])] },
          "properties": {
            "OID": animal["OID"],
            "Status": animal["Status"],
            "Name_Current": animal["Name_Current"],
            "Authority_Year": animal["Authority_Year"],
            "CommonName": animal["CommonName"],
            "PreviousNames": animal["PreviousNames"],
            "Fauna": animal["Fauna"],
            "Kingdom": animal["Kingdom"],
            "Phylum": animal["Phylum"],
            "Class": animal["Class"],
            "Order": animal["Order"],
            "Family": animal["Family"],
            "Genus": animal["Genus"],
            "Species": animal["Species"],
            "Native_biogeog": animal["Native_biogeog"],
            "Native_geog": animal["Native_geog"],
            "Name_FirstPub": animal["Name_FirstPub"],
            "Ref_FirstPub": animal["Ref_FirstPub"],
            "PageNo_FirstPub": animal["PageNo_FirstPub"],
            "Date_yyyy_FirstPub": Number(animal["Date_yyyy_FirstPub"]),
            "Lat_FirstPub": animal["Lat_FirstPub"],
            "Long_FirstPub": animal["Long_FirstPub"],
            "Location_FirstPub": animal["Location_FirstPub"],
            "Name_FirstSight": animal["Name_FirstSight"],
            "Ref_FirstSight": animal["Ref_FirstSight"],
            "Date_ddmmyyyy_FirstSight": animal["Date_ddmmyyyy_FirstSight"],
            "Year_FirstSight": animal["Year_FirstSight"],
            "Lat_FirstSight": animal["Lat_FirstSight"],
            "Long_FirstSight": animal["Long_FirstSight"],
            "Location_FirstSight": animal["Location_FirstSight"],
            "Intro_pathway": animal["Intro_pathway"],
            "Intro_mode": animal["Intro_mode"],
            "Intro_all": animal["Intro_all"],
            "IntroPathway_Ref": animal["IntroPathway_Ref"],
            "Extinction_YN": animal["Extinction_YN"],
            "Year_Extinction": animal["Year_Extinction"],
            "Extinction_Ref": animal["Extinction_Ref"],
            "ActiveRemoval_YN": animal["ActiveRemoval_YN"],
            "ActiveRemoval_Ref": animal["ActiveRemoval_Ref"],
            "Ref_SubsequentRecords": animal["Ref_SubsequentRecords"],
            "Add_Remarks": animal["Add_Remarks"]
          }
        };
      });
    set({
      "type": "FeatureCollection",
      "features": animalsFeatures
    });
  }
)
