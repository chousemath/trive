export interface UserHeader {
  active: string;
  birthYear: string; // but is actually the year (an integer)
  gender: string; // male or female
  key: string;
  loginType: number;
  name: string;
  phone: string; // but is actually a number (an integer)
  pushOn: boolean; // not sure what this is
  s: Array<string>; // 0: key, 1: name, 2: phone
  st: { // push notification settings
    pushBoard: boolean;
    pushDealer: boolean;
    pushDriveDay: boolean;
    pushDriveHour: boolean;
    pushEstimate: boolean;
    pushHotdeal: boolean;
    pushNewBid: boolean;
    pushNotiMaxBidding: boolean;
    pushPromotion: boolean;
    pushWarnBid: boolean;
    subDealer: boolean;
  };
  timeCreate: number;
  timestamp: number;
  token: string;
  uid: string; // received from FirebaseAuth
  userType: string; // customer, dealer, agent, admin
}
