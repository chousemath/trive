export interface Event {
  key: string;
  order: number;
  leafletType: string;
  displayType: string;
  param: string;
  photo: string;
  photoSub: string;
  hidden: boolean; // determines whether or not a leaflet is hidden from view
}
