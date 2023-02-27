import type { wayangCharacter } from '../types'

import { atom } from 'nanostores';

export const featuredCharactersAtom = atom<wayangCharacter[]>([]);

export function setFeaturedCharactersAtom(featuredCharacters: wayangCharacter[]){
  featuredCharactersAtom.set(featuredCharacters);
}

export const wayangTokohAtom = atom<wayangCharacter|null>(null);

export function setWayangTokohAtom(wayangTokoh: wayangCharacter){
  wayangTokohAtom.set(wayangTokoh)
}

export const aliasesAtom = atom<string[]>([]);

export function setAliasesAtom(aliases: string[]){
  aliasesAtom.set(aliases)
}
