import { Vehicle } from './vehicle';
import { UsedVehicle } from './used-vehicle';

export interface SideMenu {
  pageName: string; // name of the page to which you are navigating
  vehicle: Vehicle; // vehicle data necessary to render a vehicle card
  usedVehicle: UsedVehicle; // used vehicle data necessary to render an used vehicle card
}
