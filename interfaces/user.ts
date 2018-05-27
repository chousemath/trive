import { Address } from './address';

export interface UserSetting { // header/st 와 연동
  subDealer: boolean;     // 한 번 이상 견적을 요청한 딜러에게 프로모션이나 이벤트 광모 메시지를 받는다.
  pushDealer: boolean;    // 한 번 이상 견적을 요청한 딜러에게 프로모션이나 이벤트 광모 푸쉬를 받는다.

  pushDriveHour: boolean; // 시승 예약 한시간전에 알림
  pushDriveDay: boolean;  // 시승 예약 하루전에 알림

  pushEstimate: boolean;  // 좋아요를 표시한 차에 새로운 견적서가 등록되면 푸쉬로 알림
  pushPromotion: boolean; // 좋요요를 표시한 차에 새로운 프로모션이 등록되면 푸시로 알림
  pushHotdeal: boolean;   // 새로운 핫딜이 등록되면 푸시로 알림
  pushBoard: boolean;

  //
  // agent
  pushNewBid: boolean;          // 새로운 경매 알림
  pushNotiMaxBidding: boolean;  // 입찰한 경매 종료전 알림
  pushWarnBid: boolean;         // 입찰 최고가 갱신시 알림
}

export interface User {
  key: string;
  timeCreate: Date;
  timeUpdate: Date;
  s: [string];
  uid: string;
  active: string;
  userType: string; // agent, customer, guest (anonymous sign in)
  token: string;

  pushOn: boolean;
  loginType: number; // 0: 일반, 1: 카카오

  // [dealer]
  isVerifiedBusinesscard: boolean;
  coolTime: Date;
  requestCount: number;
  rejectCount: number;

  name: string;
  phone: string;
  gender: string;
  birthYear: string;
  badge: number;

  // body
  isVerifiedPhone: boolean;

  nickname: string;
  password: string;

  accessToken: string;
  deviceType: string;
  // ! deviceToken: string;


  setting: UserSetting;
  accountName: string;

  // [customer]
  own: string; // 소유차량
  home: string; // province
  address: Address;
  isHandicapped: boolean;
  isNationalMerit: boolean;
  isMultiChild: boolean;

  // [agent]
  workplace: string;
  bidUseds: {}; // 입찰한 중고차
  failedBidUseds: {}; // 실패(수수료)한 중고차

  introduces: any;

  comments: any;

  slotPolicyAgree: boolean;

  slotBonus: number;
  /**
    base: number;
    added: number;
    payment: number;
   */
  slotInfo: any;
  slotInfoNext: any;

  profile: string; // 딜러의 프로필 사진

  // [dealer]
  showrooms: {};
  photoBusinesscard: string;
  photoBusinesscard2: string;
  customers: {};
  drives: {};

  // [공통]
  readVehicles: {};
  likeVehicles: {};

  reviews: {};
  likeReviews: {};

  readUseds: {};
  likeUseds: {};

  used: string;

  logs: any;
}
