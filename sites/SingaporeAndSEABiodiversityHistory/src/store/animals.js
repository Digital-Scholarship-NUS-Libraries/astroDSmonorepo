import { readable, derived, writable } from 'svelte/store';
import { csv } from "d3";

const animals = readable([], function start(set) {
  csv("/data/20230405_animals.csv").then(d => set(d));
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
    plantTrade: true,
    biological: true,
    consumption: true,
    corridor: true,
    fishing: true,
    petTrade: true,
    hitchhiker: true,
    unknown: true,
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
        (animal["Intro_all"].split(" | ").includes("Plant trade") && $filterAttributes.introPathway.plantTrade) ||
        (animal["Intro_all"].split(" | ").includes("Biological control") && $filterAttributes.introPathway.biological) ||
        (animal["Intro_all"].split(" | ").includes("Consumption trade") && $filterAttributes.introPathway.consumption) ||
        (animal["Intro_all"].split(" | ").includes("Corridor") && $filterAttributes.introPathway.corridor) ||
        (animal["Intro_all"].split(" | ").includes("Fishing") && $filterAttributes.introPathway.fishing) ||
        (animal["Intro_all"].split(" | ").includes("Pet trade") && $filterAttributes.introPathway.petTrade) ||
        (animal["Intro_all"].split(" | ").includes("Hitchhiker") && $filterAttributes.introPathway.hitchhiker) ||
        (animal["Intro_all"].split(" | ").includes("Unknown") && $filterAttributes.introPathway.unknown)
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

export const animalsVisibility = writable(true);

export const toggleAnimalsVisibility = () => {
  animalsVisibility.update(visibility => !visibility)
}

export const toggleFaunaAves = () => {
  filterAttributes.update(attr => ({
    ...attr,
    fauna: {
      ...attr.fauna,
      aves: !attr.fauna.aves,
    }
  }))
}

export const toggleFaunaFreshwater = () => {
  filterAttributes.update(attr => ({
    ...attr,
    fauna: {
      ...attr.fauna,
      freshwater: !attr.fauna.freshwater
    }
  }))
}

export const toggleFaunaMarine = () => {
  filterAttributes.update(attr => ({
    ...attr,
    fauna: {
      ...attr.fauna,
      marine: !attr.fauna.marine
    }
  }))
}

export const toggleFaunaTerrestrial = () => {
  filterAttributes.update(attr => ({
    ...attr,
    fauna: {
      ...attr.fauna,
      terrestrial: !attr.fauna.terrestrial
    }
  }))
}

export const toggleIntroPathwayBiological = () => {
  filterAttributes.update(attr => ({
    ...attr,
    introPathway: {
      ...attr.introPathway,
      biological: !attr.introPathway.biological
    }
  }))
}

export const toggleIntroPathwayConsumption = () => {
  filterAttributes.update(attr => ({
    ...attr,
    introPathway: {
      ...attr.introPathway,
      consumption: !attr.introPathway.consumption
    }
  }))
}

export const toggleIntroPathwayCorridor = () => {
  filterAttributes.update(attr => ({
    ...attr,
    introPathway: {
      ...attr.introPathway,
      corridor: !attr.introPathway.corridor
    }
  }))
}

export const toggleIntroPathwayFishing = () => {
  filterAttributes.update(attr => ({
    ...attr,
    introPathway: {
      ...attr.introPathway,
      fishing: !attr.introPathway.fishing
    }
  }))
}

export const toggleIntroPathwayPlantTrade = () => {
  filterAttributes.update(attr => ({
    ...attr,
    introPathway: {
      ...attr.introPathway,
      plantTrade: !attr.introPathway.plantTrade
    }
  }))
}

export const toggleIntroPathwayPetTrade = () => {
  filterAttributes.update(attr => ({
    ...attr,
    introPathway: {
      ...attr.introPathway,
      petTrade: !attr.introPathway.petTrade
    }
  }))
}

export const toggleIntroPathwayHitchhiker = () => {
  filterAttributes.update(attr => ({
    ...attr,
    introPathway: {
      ...attr.introPathway,
      hitchhiker: !attr.introPathway.hitchhiker
    }
  }))
}

export const toggleIntroPathwayUnknown = () => {
  filterAttributes.update(attr => ({
    ...attr,
    introPathway: {
      ...attr.introPathway,
      unknown: !attr.introPathway.unknown
    }
  }))
}

export const toggleExtinction = () => {
  filterAttributes.update(attr => ({
    ...attr,
    extinction: !attr.extinction
  }))
}

export const toggleActiveRemoval = () => {
  filterAttributes.update(attr => ({
    ...attr,
    activeRemoval: !attr.activeRemoval
  }))
}
