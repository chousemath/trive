export interface DeviceStatus {
  motor: {
    ops: string;
    oil: string;
    cylinderhead: string;
    cylinderblock: string;
    oil_status: string;
    cylinderblock2: string;
    gasket: string;
    pump: string;
    cooler: string;
    water_status: string;
    cmn_rail: string;
  };
  trans: {
    at_oil_leak: string;
    at_oil_status: string;
    at_ops: string;
    mt_oil_leak: string;
    mt_shift: string;
    mt_oil_status: string;
    mt_ops: string;
  };
  pts: {
    clutch: string;
    joint: string;
    shaft: string;
  };
  steering: {
    oil_leak: string;
    gear: string;
    pump: string;
    tierodend: string;
  };
  brake: {
    oil_status: string;
    oil_leak: string;
    booster: string;
  };
  electric: {
    output: string;
    starting: string;
    wiper: string;
    fan: string;
    radiator: string;
  };
  misc: {
    fuel_leak: string;
    window_motor: string;
  };
}