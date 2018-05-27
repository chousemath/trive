export interface VehicleGen {
  active: string;
  key: string;
  vehicle: string;
  name: string;
  order: number;
  photos: [{
    caption: string;
    url: string;
  }];
  years: Array<string>;
  colors: [{
    key: string;
    name: string;
    code: string;
  }];
}
