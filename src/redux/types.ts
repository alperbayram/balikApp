// src/redux/types.ts
export interface AppState {
  items: Item[];
  favorites: Item[];
}
export interface Item {
  bilgi: {
    isim: string;
    arastirma: string;
    inglizceadi: string;
    yereladi: string;
    sinif: string;
    takim: string;
    aile: string;
    cins: string;
    tur: string;
    habitat: string;
    dagilim: string;
    tanim: string;
  };
  image: {
    src: string;
    alt: string;
  };
}
