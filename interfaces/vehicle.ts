export interface Vehicle {
  key: string;
  active: string;
  brand: string;
  name: string;
  photoModel: string;
  promotion: {
    discount: number;
    message: string;
  };
  readCount: number;
  priceCashAvg: string;
}
