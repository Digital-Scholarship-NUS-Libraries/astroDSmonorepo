import { readable, derived, writable } from 'svelte/store';
import { csv } from "d3";

const plants = readable([], function start(set) {
  csv("../data/20230405_plants.csv").then(d => set(d));
})

export const filterAttributes = writable({
  minYear: 1819,
  maxYear: 2023,
  residency: {
    naturalised: true,
    casual: true,
    cryptogenic: true,
  },
  extinction: false,
  activeRemoval: false,
})

export const filteredPlants = derived(
  [plants, filterAttributes],
  ([$plants, $filterAttributes], set) => {
    set($plants
      .filter(plant => (
        (Number(plant["Date_yyyy_Early"]) >= $filterAttributes.minYear) &&
        Number(plant["Date_yyyy_Early"]) <= $filterAttributes.maxYear
      ))
      .filter(plant => (
        (plant["Status"] === "Naturalised" && $filterAttributes.residency.naturalised) ||
        (plant["Status"] === "Casual" && $filterAttributes.residency.casual) ||
        (plant["Status"] === "Cryptogenic" && $filterAttributes.residency.cryptogenic)
      ))
      .filter(plant => (
        plant["Extinction_YN"] === ($filterAttributes.extinction ? "Y" : "N")
      ))
      .filter(plant => (
        plant["ActiveRemoval_YN"] === ($filterAttributes.activeRemoval ? "Y" : "N")
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

export const setResidencyNaturalised = () => {
  filterAttributes.update(attr => ({
    ...attr,
    residency: {
      ...attr.residency,
      naturalised: !attr.residency.naturalised
    }
  }))
}

export const setResidencyCasual = () => {
  filterAttributes.update(attr => ({
    ...attr,
    residency: {
      ...attr.residency,
      casual: !attr.residency.casual
    }
  }))
}

export const setResidencyCryptogenic = () => {
  filterAttributes.update(attr => ({
    ...attr,
    residency: {
      ...attr.residency,
      cryptogenic: !attr.residency.cryptogenic
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
