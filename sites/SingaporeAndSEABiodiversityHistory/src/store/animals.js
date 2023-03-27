import { readable, derived, writable } from 'svelte/store';
import { csv } from "d3";

const animals = readable([], function start(set) {
  csv("data/SG_Animal_Naturalised.csv").then(d => set(d));
})

export const filterAttributes = writable({
  minYear: 1800,
  maxYear: 2022,
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
        (Number(animal["Date: yyyy (First published)"]) >= $filterAttributes.minYear) &&
        Number(animal["Date: yyyy (First published)"]) <= $filterAttributes.maxYear
      ))
      .filter(animal => (
        (animal["Fauna"] === "Aves" && $filterAttributes.fauna.aves) ||
        (animal["Fauna"] === "Freshwater" && $filterAttributes.fauna.freshwater) ||
        (animal["Fauna"] === "Marine" && $filterAttributes.fauna.marine) ||
        (animal["Fauna"] === "Terrestrial" && $filterAttributes.fauna.terrestrial)
      ))
      .filter(animal => (
        (animal["Introduction_all"].split(" | ").includes("Agricultural trade") && $filterAttributes.introPathway.agricultural) ||
        (animal["Introduction_all"].split(" | ").includes("Biological control") && $filterAttributes.introPathway.biological) ||
        (animal["Introduction_all"].split(" | ").includes("Consumption trade") && $filterAttributes.introPathway.consumption) ||
        (animal["Introduction_all"].split(" | ").includes("Corridors") && $filterAttributes.introPathway.corridor) ||
        (animal["Introduction_all"].split(" | ").includes("Fishing") && $filterAttributes.introPathway.fishing) ||
        (animal["Introduction_all"].split(" | ").includes("Horticultural trade") && $filterAttributes.introPathway.horticultural) ||
        (animal["Introduction_all"].split(" | ").includes("Mercy release") && $filterAttributes.introPathway.mercyRelease) ||
        (animal["Introduction_all"].split(" | ").includes("Pet trade") && $filterAttributes.introPathway.petTrade) ||
        (animal["Introduction_all"].split(" | ").includes("Transport") && $filterAttributes.introPathway.transport)
      ))
      .filter(animal => (
        animal["Extinction (Y/N)"] === ($filterAttributes.extinction ? "Y" : "N")
      ))
      .filter(animal => (
        animal["Active removal (Y/N)"] === ($filterAttributes.activeRemoval ? "Y" : "N")
      ))
    )
  }
)

export const setMinYear = (year) => {
  if (year > filterAttributes.maxYear) {
    return filterAttributes;
  }

  return filterAttributes.update(attr => ({
    ...attr,
    minYear: year > filterAttributes.maxYear
  }))
}

export const setMaxYear = (year) => {
  if (year < filterAttributes.minYear) {
    return filterAttributes;
  }
  filterAttributes.update(attr => ({
    ...attr,
    maxYear: year
  }))
}

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
