export interface VehicleModel {
  key: string;

  active: string;
  vehicleGen: string;

  price: number;

  mileage: number; //연비(km/l)

  order: number;
  name: string;
  fuel: string;

  zerobeak: string; //제로백
  cost: number; //1달 유지비

  engine: string; //엔진형식
  charger: string; //과급방식

  displacement: number; //배기량(cc)

  driverType: string; //구동형식
  transmission: string; //변속기

  maximumPower: string; //최대출력
  maximumToque: string; //최대토크
  maximumSpeed: string; //최고속도
  gasEmission: string; //CO2배출량(g/km)

  overallLength: string; //전장(mm)
  overallWidth: string; //전폭(mm)
  overallHeight: string; //전고(mm)
  wheelbase: string; //축거(mm)
  frontThread: string; //윤거전(mm)
  rearThread: string; //윤거후(mm)

  emptyVehicleWeight: string; //공차중량(kg)
  capacity: string; //승차인원
  frontTire: string; //전륜타이어
  rearTire: string; //후륜타이어

  fuelCategory: string;

  options: [{
    key: string;
    name: string;
    price: number;
  }];

  basicOptions: {
  }
}
