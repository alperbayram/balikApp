export interface Results {
  MalAdi: string;
  MalTipAdi: string;
  HalTuru: string;
  Birim: string;
  AsgariUcret: number;
  AzamiUcret: number;
}
export interface FishItem {
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

export type StackScreens = {
  Home: undefined;
  Info: undefined;
  Modal: Results;
};
