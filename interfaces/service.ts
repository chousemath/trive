export interface Service {
  key: string;

  deleted: boolean;

  type: string;
  subtype: string;
  status: string;
  body: string;

  timeRequest: Date;  // 요청자가 요청한 시간 
  timeResponse: Date; // 응답자가 응답한 시간
  timeReceive: Date;  // 해당 응답자에게 요청받은 시간
  timeRead: Date;

  responser: string;
  requester: string;
  data: any;

  vehicleModel: string;

  timeEstimate: Date;
  timePhone: Date;
  timeSMS: Date;

  // user가 admin일때만
  csStatus: string;        // 처리중/완료/취소(doing, done, cancel)
  dateFirstCall: Date;
  followup: string;

  //
  // 관리자페이지를 위해 추가할 사항
  requestorName: string;
  requestorPhone: string;
  province: string;

  when: string;
  discounts: any;
  payback: number;

  // added by joseph
  seller: string; // firebase id of the seller
}
