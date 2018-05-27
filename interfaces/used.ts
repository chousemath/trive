export interface Used {

  // [header]
  brand: string;
  active: string;
  deleted: boolean;
  completeUser: string; // 가져간 유저(딜러의 통계에 사용됨)
  status: string;
  adPrice: string;    // 비슷한 가격의 중고차를 위한것
  adVehicle: string; // 이 차의 중고매물

  timeUpdate: number; // status 가 변하는 시점
  reject: boolean;
  timeDue: number;
  likeCount: number; // 좋아요(My Trive 확인 가능)
  photoModel: string; // 카드 사진 한장(사진들에서 한장 가져온다)
  maxBiddingPrice: number; // 최고 입찰가
  dealerCount: number; // 입찰중인 딜러 갯수
  lastLog: string;
  insuranceCount: number;
  accidentCount: number;

  appearance: string; // functions 에서
  vehicleName: string; // functions 에서
  vehicleModelName: string; // functions 에서
  vehicle: string; // functions 에서
  vehicleGen: string;

  key: string;
  user: string; // 판매자
  carNumber: string;
  price: number;
  vehicleModel: string;

  // more or less the first year this particular car was placed on
  // the market (put up for sale), purchased by some customer, and
  // a usage history was started
  year: string; // see above
  month: string;
  mileage: number;
  displacement: number; // 배기량
  where: string; // province, 판매 장소
  usedType: string; // dealer, market, ad

  // [body]
  photos: any;
  options: any;
  deviceStatus: any;
  repairStatus: any;
  repairAccident: boolean;
  logs: any;
  rejectComment: string;
  sellPlace: string; // market 공개전에 필수 항목, ad type의 판매장소로도 쓰임
  sellSubPlace: string; // ad type의 세부 판매장소

  completeType: string; // agent용 판매 타입(misc or trive)
  dealers: {};
  likes: {}; // p.35
  reviewPlace: string;
  timeReview: Date;
  timeRegist: Date;
  tradingRequests: any;
  bookingRequests: any;
  notiMarkets: any; // 마켓에 공개하면 알려주기

  color: string;
  fuel: string;
  transmission: string; // 변속기
  driveType: string; // 구동방식
  accidentDesc: string; // 사고내역 기타 참고 사항
  howToBuy: string;
  sellType: string; // 판매 유형 입력
  comment: string;

  reportRegistNumber: string; // 제시신고번호
  reportYear: string; // 형식연도
  reportDashboardStatus: string; // 계기상태 (양호, 작동 불량)
  reportValidTimeFrom: string; // 검사 유효기간 시작
  reportValidTimeTo: string;  // 검사 유효기간 종료
  reportRegistTime: string; // 차량 등록일
  reportEngine: string; // 원동기 형식
  reportTransmission: string; // 변속기 종류
  reportTempNumber: string; // 차대번호
  reportGuaranty: string; // 보증유형
  reportCheck: string; // 동일성확인(양호, 상이, 부식, 훼손(오손), 변조(변타), 도말)
  reportIllegal: string; // 불법구조변경(없음, 있음)
  reportAccident: string; // 사고유무(없음, 있음) <--자동차 상태 표시영 향
  reportFlooding: string; // 침수유무(없음, 있음)
  reportSelfEngine: string; // 자가진단 - 엔진(양호, 정비요)
  reportSelfTransmission: string; // 자가진단 - 변속기(양호, 정비요)
  reportCO2: string; // 이산화탄소 배출(%)
  reportHC: string; // 탄화수소 배출(ppm)
  reportGas: string; // 매연배출량 (%)
  reportOpinion: string; // 특이사항 및 점검자 의견
  reportTime: string; // 성능기록부 작성일
  reportWriter: string; // 중고차 성능/상태 점검자
  reportReporter: string; // 중고차 성능/상태 고지자
  pageAdvertisement: {
    textLeft: string;
    textRight: string;
    links: Array<string>
  };
  fuelCategory: string; // should be a duplicate of the vehicleModel's fuelCategory

  // [local]
  _status: any;
  liked: boolean;
  groupData: any;
  usedCount: number;
  rejected: {
    selected: any;
    others: any;
  };

  // ADDED BY JOSEPH
  adminRejected1: number; // indicates that '유찰' has been selected by an admin
  extensionCurrentState: string; // current auction state of the used vehicle
  extensionCurrentBids: any; // all the bids made on this used vehicle to this moment
  extensionReviewRejectedComment: string; // the comment that the admin inputs when pressing '반려'
}
