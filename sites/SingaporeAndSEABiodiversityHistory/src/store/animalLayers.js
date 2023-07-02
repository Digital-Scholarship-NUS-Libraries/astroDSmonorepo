import { derived, writable } from 'svelte/store';
import { filteredAnimals, filterAttributes } from "./animals";
import FaunaAves from "/public/data/geojsons/FaunaAves.json";
import FaunaFreshwater from "/public/data/geojsons/FaunaFreshwater.json";
import FaunaMarine from "/public/data/geojsons/FaunaMarine.json";
import FaunaTerrestrial from "/public/data/geojsons/FaunaTerrestrial.json";
import IntroConsumption from "/public/data/geojsons/IntroConsumption.json";
import IntroCorridor from "/public/data/geojsons/IntroCorridor.json";
import IntroFishing from "/public/data/geojsons/IntroFishing.json";
import IntroPet from "/public/data/geojsons/IntroPet.json";
import IntroPlant from "/public/data/geojsons/IntroPlant.json";
import IntroStowaway from "/public/data/geojsons/IntroStowaway.json";
import IntroUnknown from "/public/data/geojsons/IntroUnknown.json";
import OthersActiveRemoval from "/public/data/geojsons/OthersActiveRemoval.json";
import OthersExtinction from "/public/data/geojsons/OthersExtinction.json";
import SupplementaryPortsAroundSG from "/public/data/geojsons/SupplementaryPortsAroundSG.json";


export const animals = derived(
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
);

export const analyticals = writable({
  faunaAves: {
    visible: false,
    geoJSON: FaunaAves,
  },
  faunaFreshwater: {
    visible: false,
    geoJSON: FaunaFreshwater,
  },
  faunaMarine: {
    visible: false,
    geoJSON: FaunaMarine,
  },
  faunaTerrestrial: {
    visible: false,
    geoJSON: FaunaTerrestrial,
  },
  introConsumption: {
    visible: false,
    geoJSON: IntroConsumption,
  },
  introCorridor: {
    visible: false,
    geoJSON: IntroCorridor,
  },
  introFishing: {
    visible: false,
    geoJSON: IntroFishing,
  },
  introPet: {
    visible: false,
    geoJSON: IntroPet,
  },
  introPlant: {
    visible: false,
    geoJSON: IntroPlant,
  },
  introStowaway: {
    visible: false,
    geoJSON: IntroStowaway,
  },
  introUnknown: {
    visible: false,
    geoJSON: IntroUnknown,
  },
  othersActiveRemoval: {
    visible: false,
    geoJSON: OthersActiveRemoval,
  },
  othersExtinction: {
    visible: false,
    geoJSON: OthersExtinction,
  },
});

export const ports = writable({
  visible: false,
  geoJSON: SupplementaryPortsAroundSG,
});

export const analyticalsToggles = {
  toggleFaunaAves: () => {
    analyticals.update(m => ({
      ...m,
      faunaAves: {
        ...m.faunaAves,
        visible: !m.faunaAves.visible,
      },
    }));
  },

  toggleFaunaFreshwater: () => {
    analyticals.update(m => ({
      ...m,
      faunaFreshwater: {
        ...m.faunaFreshwater,
        visible: !m.faunaFreshwater.visible,
      },
    }));
  },

  toggleFaunaMarine: () => {
    analyticals.update(m => ({
      ...m,
      faunaMarine: {
        ...m.faunaMarine,
        visible: !m.faunaMarine.visible,
      },
    }));
  },

  toggleFaunaTerrestrial: () => {
    analyticals.update(m => ({
      ...m,
      faunaTerrestrial: {
        ...m.faunaTerrestrial,
        visible: !m.faunaTerrestrial.visible,
      },
    }));
  },

  toggleIntroConsumption: () => {
    analyticals.update(m => ({
      ...m,
      introConsumption: {
        ...m.introConsumption,
        visible: !m.introConsumption.visible,
      },
    }));
  },

  toggleIntroCorridor: () => {
    analyticals.update(m => ({
      ...m,
      introCorridor: {
        ...m.introCorridor,
        visible: !m.introCorridor.visible,
      },
    }));
  },

  toggleIntroFishing: () => {
    analyticals.update(m => ({
      ...m,
      introFishing: {
        ...m.introFishing,
        visible: !m.introFishing.visible,
      },
    }));
  },

  toggleIntroPet: () => {
    analyticals.update(m => ({
      ...m,
      introPet: {
        ...m.introPet,
        visible: !m.introPet.visible,
      },
    }));
  },

  toggleIntroPlant: () => {
    analyticals.update(m => ({
      ...m,
      introPlant: {
        ...m.introPlant,
        visible: !m.introPlant.visible,
      },
    }));
  },

  toggleIntroStowaway: () => {
    analyticals.update(m => ({
      ...m,
      introStowaway: {
        ...m.introStowaway,
        visible: !m.introStowaway.visible,
      },
    }));
  },

  toggleIntroUnknown: () => {
    analyticals.update(m => ({
      ...m,
      introUnknown: {
        ...m.introUnknown,
        visible: !m.introUnknown.visible,
      },
    }));
  },

  toggleOthersActiveRemoval: () => {
    analyticals.update(m => ({
      ...m,
      othersActiveRemoval: {
        ...m.othersActiveRemoval,
        visible: !m.othersActiveRemoval.visible,
      },
    }));
  },

  toggleOthersExtinction: () => {
    analyticals.update(m => ({
      ...m,
      othersExtinction: {
        ...m.othersExtinction,
        visible: !m.othersExtinction.visible,
      },
    }));
  },
}

export const togglePorts = () => {
  ports.update(m => ({
    ...m,
    visible: !m.visible,
  }));
}
