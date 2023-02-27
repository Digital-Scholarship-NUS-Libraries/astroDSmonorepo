export interface alias {
  alias: string,
  explanation: string,
  keterangan: string,
  canonical_referent: string,
  alias_interface: string,
  id: number
}

export interface canonical {
  canonical_name: string,
  description: string,
  deskripsi: string,
  sources: string,
  id: number,
  other_names: alias[]
}

export interface image {
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

export interface wayangCharacter {
  canonical_name: string;
  description: string;
  deskripsi: string;
  sources: string;
  other_names: alias[];
  images: image[];
}
