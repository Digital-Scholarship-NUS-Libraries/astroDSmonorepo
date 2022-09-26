import { atom, map } from 'nanostores';

// export const isCartOpen = atom(false);

export type alias = {
  alias: string;
  explanation: string;
  ketrangan?: string;
  alias_type: string;
}

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

export function setFeaturedCharacters(featuredCharacters: wayangCharacter[]){
  featuredCharactersAtom.set(featuredCharacters);
}
