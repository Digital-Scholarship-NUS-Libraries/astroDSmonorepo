import { readable, derived, writable } from 'svelte/store';
import { csv } from "d3";

const animals = readable([], function start(set) {
  csv("../data/20230405_animals.csv").then(d => set(d));
})

export const filterAttributes = writable({
  minYear: 1819,
  maxYear: 2023,
  fauna: {
    aves: true,
    freshwater: true,
    marine: true,
    terrestrial: true
  },
  introPathway: {
    agricultural: true,
    biological: true,
    consumption: true,
    corridor: true,
    fishing: true,
    horticultural: true,
    mercyRelease: true,
    petTrade: true,
    transport: true
  },
  extinction: false,
  activeRemoval: false,
})

export const filteredAnimals = derived(
  [animals, filterAttributes],
  ([$animals, $filterAttributes], set) => {
    set($animals
      .filter(animal => (
        (Number(animal["Date_yyyy_FirstPub"]) >= $filterAttributes.minYear) &&
        Number(animal["Date_yyyy_FirstPub"]) <= $filterAttributes.maxYear
      ))
      .filter(animal => (
        (animal["Fauna"] === "Aves" && $filterAttributes.fauna.aves) ||
        (animal["Fauna"] === "Freshwater" && $filterAttributes.fauna.freshwater) ||
        (animal["Fauna"] === "Marine" && $filterAttributes.fauna.marine) ||
        (animal["Fauna"] === "Terrestrial" && $filterAttributes.fauna.terrestrial)
      ))
      .filter(animal => (
        (animal["Intro_all"].split(" | ").includes("Agricultural trade") && $filterAttributes.introPathway.agricultural) ||
        (animal["Intro_all"].split(" | ").includes("Biological control") && $filterAttributes.introPathway.biological) ||
        (animal["Intro_all"].split(" | ").includes("Consumption trade") && $filterAttributes.introPathway.consumption) ||
        (animal["Intro_all"].split(" | ").includes("Corridors") && $filterAttributes.introPathway.corridor) ||
        (animal["Intro_all"].split(" | ").includes("Fishing") && $filterAttributes.introPathway.fishing) ||
        (animal["Intro_all"].split(" | ").includes("Horticultural trade") && $filterAttributes.introPathway.horticultural) ||
        (animal["Intro_all"].split(" | ").includes("Mercy release") && $filterAttributes.introPathway.mercyRelease) ||
        (animal["Intro_all"].split(" | ").includes("Pet trade") && $filterAttributes.introPathway.petTrade) ||
        (animal["Intro_all"].split(" | ").includes("Transport") && $filterAttributes.introPathway.transport)
      ))
      .filter(animal => (
        animal["Extinction_YN"] === ($filterAttributes.extinction ? "Y" : "N")
      ))
      .filter(animal => (
        animal["ActiveRemoval_YN"] === ($filterAttributes.activeRemoval ? "Y" : "N")
      ))
    )
  }
)

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
    const animalsGeoJSON = {
      "type": "FeatureCollection",
      "features": animalsFeatures
    };
    set(animalsGeoJSON);
  }
)

export const setFaunaAves = () => {
  filterAttributes.update(attr => ({
    ...attr,
    fauna: {
      ...attr.fauna,
      aves: !attr.fauna.aves,
    }
  }))
}

export const setFaunaFreshwater = () => {
  filterAttributes.update(attr => ({
    ...attr,
    fauna: {
      ...attr.fauna,
      freshwater: !attr.fauna.freshwater
    }
  }))
}

export const setFaunaMarine = () => {
  filterAttributes.update(attr => ({
    ...attr,
    fauna: {
      ...attr.fauna,
      marine: !attr.fauna.marine
    }
  }))
}

export const setFaunaTerrestrial = () => {
  filterAttributes.update(attr => ({
    ...attr,
    fauna: {
      ...attr.fauna,
      terrestrial: !attr.fauna.terrestrial
    }
  }))
}

export const setIntroPathwayAgricultural = () => {
  filterAttributes.update(attr => ({
    ...attr,
    introPathway: {
      ...attr.introPathway,
      agricultural: !attr.introPathway.agricultural
    }
  }))
}

export const setIntroPathwayBiological = () => {
  filterAttributes.update(attr => ({
    ...attr,
    introPathway: {
      ...attr.introPathway,
      biological: !attr.introPathway.biological
    }
  }))
}

export const setIntroPathwayConsumption = () => {
  filterAttributes.update(attr => ({
    ...attr,
    introPathway: {
      ...attr.introPathway,
      consumption: !attr.introPathway.consumption
    }
  }))
}

export const setIntroPathwayCorridor = () => {
  filterAttributes.update(attr => ({
    ...attr,
    introPathway: {
      ...attr.introPathway,
      corridor: !attr.introPathway.corridor
    }
  }))
}

export const setIntroPathwayFishing = () => {
  filterAttributes.update(attr => ({
    ...attr,
    introPathway: {
      ...attr.introPathway,
      fishing: !attr.introPathway.fishing
    }
  }))
}

export const setIntroPathwayHorticultural = () => {
  filterAttributes.update(attr => ({
    ...attr,
    introPathway: {
      ...attr.introPathway,
      horticultural: !attr.introPathway.horticultural
    }
  }))
}

export const setIntroPathwayMercyRelease = () => {
  filterAttributes.update(attr => ({
    ...attr,
    introPathway: {
      ...attr.introPathway,
      mercyRelease: !attr.introPathway.mercyRelease
    }
  }))
}

export const setIntroPathwayPetTrade = () => {
  filterAttributes.update(attr => ({
    ...attr,
    introPathway: {
      ...attr.introPathway,
      petTrade: !attr.introPathway.petTrade
    }
  }))
}

export const setIntroPathwayTransport = () => {
  filterAttributes.update(attr => ({
    ...attr,
    introPathway: {
      ...attr.introPathway,
      transport: !attr.introPathway.transport
    }
  }))
}

export const setExtinction = () => {
  filterAttributes.update(attr => ({
    ...attr,
    extinction: !attr.extinction
  }))
}

export const setActiveRemoval = () => {
  filterAttributes.update(attr => ({
    ...attr,
    activeRemoval: !attr.activeRemoval
  }))
}
