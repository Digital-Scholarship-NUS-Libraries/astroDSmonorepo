import { derived, writable } from 'svelte/store';
import { filteredAnimals, filterAttributes } from "./animals";
import FaunaAves from "/src/data/geojsons/FaunaAves.json";
import FaunaFreshwater from "/src/data/geojsons/FaunaFreshwater.json";
import FaunaMarine from "/src/data/geojsons/FaunaMarine.json";
import FaunaTerrestrial from "/src/data/geojsons/FaunaTerrestrial.json";
import IntroConsumption from "/src/data/geojsons/IntroConsumption.json";
import IntroCorridor from "/src/data/geojsons/IntroCorridor.json";
import IntroFishing from "/src/data/geojsons/IntroFishing.json";
import IntroPet from "/src/data/geojsons/IntroPet.json";
import IntroPlant from "/src/data/geojsons/IntroPlant.json";
import IntroStowaway from "/src/data/geojsons/IntroStowaway.json";
import IntroUnknown from "/src/data/geojsons/IntroUnknown.json";
import OthersActiveRemoval from "/src/data/geojsons/OthersActiveRemoval.json";
import OthersExtinction from "/src/data/geojsons/OthersExtinction.json";
import SupplementaryPortsAroundSG from "/src/data/geojsons/SupplementaryPortsAroundSG.json";


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

export const historicals = writable({
  year1846: {
    visible: false,
    cogURL: "https://s3.ap-sou theast-1.amazonaws.com/static-content-libmaps.nus.edu.sg/1846.tif"
  },
  year1860: {
    visible: false,
    cogURL: "https://s3.ap-southeast-1.amazonaws.com/static-content-libmaps.nus.edu.sg/1860.tif"
  },
  year1862: {
    visible: false,
    cogURL: "https://s3.ap-southeast-1.amazonaws.com/static-content-libmaps.nus.edu.sg/1862.tif"
  },
  year1873: {
    visible: false,
    cogURL: "https://s3.ap-southeast-1.amazonaws.com/static-content-libmaps.nus.edu.sg/1873.tif"
  },
  year1911: {
    visible: false,
    cogURL: "https://s3.ap-southeast-1.amazonaws.com/static-content-libmaps.nus.edu.sg/1911.tif"
  },
  year1913: {
    visible: false,
    cogURL: "https://s3.ap-southeast-1.amazonaws.com/static-content-libmaps.nus.edu.sg/1913.tif"
  },
  year1914: {
    visible: false,
    cogURL: "https://s3.ap-southeast-1.amazonaws.com/static-content-libmaps.nus.edu.sg/1914.tif"
  },
  year1915: {
    visible: false,
    cogURL: "https://s3.ap-southeast-1.amazonaws.com/static-content-libmaps.nus.edu.sg/1915.tif"
  },
  year1930Sea: {
    visible: false,
    cogURL: "https://s3.ap-southeast-1.amazonaws.com/static-content-libmaps.nus.edu.sg/1930_sea_chart.tif"
  },
  year1930s: {
    visible: false,
    cogURL: "https://s3.ap-southeast-1.amazonaws.com/static-content-libmaps.nus.edu.sg/1930s.tif"
  },
  year1932: {
    visible: false,
    cogURL: "https://s3.ap-southeast-1.amazonaws.com/static-content-libmaps.nus.edu.sg/1932.tif"
  },
  year1943: {
    visible: false,
    cogURL: "https://s3.ap-southeast-1.amazonaws.com/static-content-libmaps.nus.edu.sg/1943.tif"
  },
  year1945: {
    visible: false,
    cogURL: "https://s3.ap-southeast-1.amazonaws.com/static-content-libmaps.nus.edu.sg/1945.tif"
  },
  year1950: {
    visible: false,
    cogURL: "https://s3.ap-southeast-1.amazonaws.com/static-content-libmaps.nus.edu.sg/1950.tif"
  },
  year1953: {
    visible: false,
    cogURL: "https://s3.ap-southeast-1.amazonaws.com/static-content-libmaps.nus.edu.sg/1953.tif"
  },
  year1958: {
    visible: false,
    cogURL: "https://s3.ap-southeast-1.amazonaws.com/static-content-libmaps.nus.edu.sg/1958.tif"
  },
  year1963: {
    visible: false,
    cogURL: "https://s3.ap-southeast-1.amazonaws.com/static-content-libmaps.nus.edu.sg/1963.tif"
  },
  year1966: {
    visible: false,
    cogURL: "https://s3.ap-southeast-1.amazonaws.com/static-content-libmaps.nus.edu.sg/1966.tif"
  },
  year1969: {
    visible: false,
    cogURL: "https://s3.ap-southeast-1.amazonaws.com/static-content-libmaps.nus.edu.sg/1969.tif"
  },
  year1971: {
    visible: false,
    cogURL: "https://s3.ap-southeast-1.amazonaws.com/static-content-libmaps.nus.edu.sg/1971.tif"
  },
  year1974: {
    visible: false,
    cogURL: "https://s3.ap-southeast-1.amazonaws.com/static-content-libmaps.nus.edu.sg/1974.tif"
  },
  year1974_50K: {
    visible: false,
    cogURL: "https://s3.ap-southeast-1.amazonaws.com/static-content-libmaps.nus.edu.sg/1974_50K.tif"
  },
  year1975: {
    visible: false,
    cogURL: "https://s3.ap-southeast-1.amazonaws.com/static-content-libmaps.nus.edu.sg/1975.tif"
  },
  year1978: {
    visible: false,
    cogURL: "https://s3.ap-southeast-1.amazonaws.com/static-content-libmaps.nus.edu.sg/1978.tif"
  },
  year1983: {
    visible: false,
    cogURL: "https://s3.ap-southeast-1.amazonaws.com/static-content-libmaps.nus.edu.sg/1983.tif"
  },
  year1987: {
    visible: false,
    cogURL: "https://s3.ap-southeast-1.amazonaws.com/static-content-libmaps.nus.edu.sg/1987.tif"
  },
  year1993: {
    visible: false,
    cogURL: "https://s3.ap-southeast-1.amazonaws.com/static-content-libmaps.nus.edu.sg/1993.tif"
  },
  year1998: {
    visible: false,
    cogURL: "https://s3.ap-southeast-1.amazonaws.com/static-content-libmaps.nus.edu.sg/1998.tif"
  },
  year2002: {
    visible: false,
    cogURL: "https://s3.ap-southeast-1.amazonaws.com/static-content-libmaps.nus.edu.sg/2002.tif"
  },
  year2005: {
    visible: false,
    cogURL: "https://s3.ap-southeast-1.amazonaws.com/static-content-libmaps.nus.edu.sg/2005.tif"
  },
  year2005_50K: {
    visible: false,
    cogURL: "https://s3.ap-southeast-1.amazonaws.com/static-content-libmaps.nus.edu.sg/2005_50K.tif"
  },
  year2010: {
    visible: false,
    cogURL: "https://s3.ap-southeast-1.amazonaws.com/static-content-libmaps.nus.edu.sg/2010.tif"
  },
})

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

export const historicalsToggles = {
  toggleYear1846: () => {
    historicals.update(m => ({
      ...m,
      year1846: {
        ...m.year1846,
        visible: !m.year1846.visible,
      }
    }));
  },

  toggleYear1860: () => {
    historicals.update(m => ({
      ...m,
      year1860: {
        ...m.year1860,
        visible: !m.year1860.visible,
      }
    }));
  },

  toggleYear1862: () => {
    historicals.update(m => ({
      ...m,
      year1862: {
        ...m.year1862,
        visible: !m.year1862.visible,
      }
    }));
  },

  toggleYear1873: () => {
    historicals.update(m => ({
      ...m,
      year1873: {
        ...m.year1873,
        visible: !m.year1873.visible,
      }
    }));
  },

  toggleYear1911: () => {
    historicals.update(m => ({
      ...m,
      year1911: {
        ...m.year1911,
        visible: !m.year1911.visible,
      }
    }));
  },

  toggleYear1913: () => {
    historicals.update(m => ({
      ...m,
      year1913: {
        ...m.year1913,
        visible: !m.year1913.visible,
      }
    }));
  },

  toggleYear1914: () => {
    historicals.update(m => ({
      ...m,
      year1914: {
        ...m.year1914,
        visible: !m.year1914.visible,
      }
    }));
  },

  toggleYear1915: () => {
    historicals.update(m => ({
      ...m,
      year1915: {
        ...m.year1915,
        visible: !m.year1915.visible,
      }
    }));
  },

  toggleYear1930Sea: () => {
    historicals.update(m => ({
      ...m,
      year1930Sea: {
        ...m.year1930Sea,
        visible: !m.year1930Sea.visible,
      }
    }));
  },

  toggleYear1930s: () => {
    historicals.update(m => ({
      ...m,
      year1930s: {
        ...m.year1930s,
        visible: !m.year1930s.visible,
      }
    }));
  },

  toggleYear1932: () => {
    historicals.update(m => ({
      ...m,
      year1932: {
        ...m.year1932,
        visible: !m.year1932.visible,
      }
    }));
  },

  toggleYear1943: () => {
    historicals.update(m => ({
      ...m,
      year1943: {
        ...m.year1943,
        visible: !m.year1943.visible,
      }
    }));
  },

  toggleYear1945: () => {
    historicals.update(m => ({
      ...m,
      year1945: {
        ...m.year1945,
        visible: !m.year1945.visible,
      }
    }));
  },

  toggleYear1950: () => {
    historicals.update(m => ({
      ...m,
      year1950: {
        ...m.year1950,
        visible: !m.year1950.visible,
      }
    }));
  },

  toggleYear1953: () => {
    historicals.update(m => ({
      ...m,
      year1953: {
        ...m.year1953,
        visible: !m.year1953.visible,
      }
    }));
  },

  toggleYear1958: () => {
    historicals.update(m => ({
      ...m,
      year1958: {
        ...m.year1958,
        visible: !m.year1958.visible,
      }
    }));
  },

  toggleYear1963: () => {
    historicals.update(m => ({
      ...m,
      year1963: {
        ...m.year1963,
        visible: !m.year1963.visible,
      }
    }));
  },

  toggleYear1966: () => {
    historicals.update(m => ({
      ...m,
      year1966: {
        ...m.year1966,
        visible: !m.year1966.visible,
      }
    }));
  },

  toggleYear1969: () => {
    historicals.update(m => ({
      ...m,
      year1969: {
        ...m.year1969,
        visible: !m.year1969.visible,
      }
    }));
  },

  toggleYear1971: () => {
    historicals.update(m => ({
      ...m,
      year1971: {
        ...m.year1971,
        visible: !m.year1971.visible,
      }
    }));
  },

  toggleYear1974: () => {
    historicals.update(m => ({
      ...m,
      year1974: {
        ...m.year1974,
        visible: !m.year1974.visible,
      }
    }));
  },

  toggleYear1974_50K: () => {
    historicals.update(m => ({
      ...m,
      year1974_50K: {
        ...m.year1974_50K,
        visible: !m.year1974_50K.visible,
      }
    }));
  },

  toggleYear1975: () => {
    historicals.update(m => ({
      ...m,
      year1975: {
        ...m.year1975,
        visible: !m.year1975.visible,
      }
    }));
  },

  toggleYear1978: () => {
    historicals.update(m => ({
      ...m,
      year1978: {
        ...m.year1978,
        visible: !m.year1978.visible,
      }
    }));
  },


  toggleYear1983: () => {
    historicals.update(m => ({
      ...m,
      year1983: {
        ...m.year1983,
        visible: !m.year1983.visible,
      }
    }));
  },

  toggleYear1987: () => {
    historicals.update(m => ({
      ...m,
      year1987: {
        ...m.year1987,
        visible: !m.year1987.visible,
      }
    }));
  },

  toggleYear1993: () => {
    historicals.update(m => ({
      ...m,
      year1993: {
        ...m.year1993,
        visible: !m.year1993.visible,
      }
    }));
  },

  toggleYear1998: () => {
    historicals.update(m => ({
      ...m,
      year1998: {
        ...m.year1998,
        visible: !m.year1998.visible,
      }
    }));
  },

  toggleYear2002: () => {
    historicals.update(m => ({
      ...m,
      year2002: {
        ...m.year2002,
        visible: !m.year2002.visible,
      }
    }));
  },

  toggleYear2005: () => {
    historicals.update(m => ({
      ...m,
      year2005: {
        ...m.year2005,
        visible: !m.year2005.visible,
      }
    }));
  },

  toggleYear2005_50K: () => {
    historicals.update(m => ({
      ...m,
      year2005_50K: {
        ...m.year2005_50K,
        visible: !m.year2005_50K.visible,
      }
    }));
  },

  toggleYear2010: () => {
    historicals.update(m => ({
      ...m,
      year2010: {
        ...m.year2010,
        visible: !m.year2010.visible,
      }
    }));
  },
}

export const togglePorts = () => {
  ports.update(m => ({
    ...m,
    visible: !m.visible,
  }));
}
