import { atom } from 'nanostores';

export type alias = {
  alias: string;
  explanation: string;
  ketrangan?: string;
  alias_type: string;
}

export type singleAlias = string;

export type image = {
  url: string;
  tr_box_number: string;
  tms_number: string;
  set_name: string;
  box_no: string;
  angst_set_id: string;
  angst_puppet_id: string;
  artist: string;
  provenance: string;
  culture: string;
  date: string;
  status: string;
  canonical_referent: string;
  tied_to_alias: string;
}

export type wayangCharacter = {
  canonical_name: string;
  description: string;
  deskripsi: string;
  sources: string;
  other_names: alias[];
  images: image[];
}

export const featuredCharactersAtom = atom<wayangCharacter[]>([]);

export function setFeaturedCharactersAtom(featuredCharacters: wayangCharacter[]){
  featuredCharactersAtom.set(featuredCharacters);
}

export const wayangTokohAtom = atom<wayangCharacter|null>(null);

export function setWayangTokohAtom(wayangTokoh: wayangCharacter){
  wayangTokohAtom.set(wayangTokoh)
}

export const aliasesAtom = atom<singleAlias[]>([]);

export function setAliasesAtom(aliases: singleAlias[]){
  aliasesAtom.set(aliases)
}
