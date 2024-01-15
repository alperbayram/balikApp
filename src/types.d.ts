export interface Results {
  MalAdi: string;
  MalTipAdi: string;
  HalTuru: string;
  Birim: string;
  AsgariUcret: number;
  AzamiUcret: number;
}

export type StackScreens = {
  Home: undefined;
  Info: undefined;
  Modal: Results;
};
