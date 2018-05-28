import * as R from 'ramda';
const mapIndexed = R.addIndex(R.map);
const joinBlank = R.join('');
import * as C from './data/common.js';
import { Service } from './interfaces/service.js';

export const padSingleDigitString = (original: string): string => {
  return original.length === 1 ? '0' + original : original;
}

export const padNumber = (original: number | string): string => {
  if (!original) return '';
  const type: string = typeof original;
  if (type === 'string') return padSingleDigitString(original as string);
  else if (type === 'number') return padSingleDigitString('' + original);
  else return '';
};

export const assembleDateString = (
  year: number | string,
  month: number | string,
  day: number | string
): string => {
  if (!year || !month || !day) return '';
  return padNumber(year) + padNumber(month) + padNumber(day)
};

const regexCarNumber: RegExp = /^[0-9][0-9][^a-zA-Z0-9][0-9][0-9][0-9][0-9]+$/;
export const isValidCarNumber = (carNumber: string): boolean => regexCarNumber.test(carNumber) && carNumber.length === 7;

export const brandKeyToName = (brandKey: string): string => (brandKey in C.Common.Brand) ? C.Common.Brand[brandKey].name : brandKey;
export const transmissionKeyToName = (transmissionKey: string): string => (transmissionKey in C.Common.Transmission) ? C.Common.Transmission[transmissionKey].name : transmissionKey;

const transformNumericString = (original: string): string => {
  const limit: number = original.length - 1;
  const reversedWithCommas: Array<string> = mapIndexed((val, idx) => {
    const cond1: boolean = (idx + 1) % 3 === 0;
    const cond2: boolean = idx !== limit;
    return (cond1 && cond2) ? ',' + val : val;
  }, R.reverse(original));
  return joinBlank(R.reverse(reversedWithCommas));
};
export const transformNumber = (original: number | string): string => {
  if (original === undefined || original === null) return '';
  const type: string = typeof original;
  if (type === 'string') return transformNumericString(original as string);
  if (type === 'number') return transformNumericString(original.toString());
  else return '';
};
const formatPrice = (price: number, unit: string): string => {
  if (price === undefined || price === null || typeof price !== 'number') return '';
  return transformNumericString(price.toString()) + unit + (unit === '원' ? '' : ' ');
}
export const transformPrice = (price: number): string => {
  const hundredMillionsNum: number = Math.floor(price / 100000000);
  const hundredMillions: string = hundredMillionsNum ? formatPrice(hundredMillionsNum, '억') : '';
  const tenThousandsNum: number = Math.floor((price % 100000000) / 10000);
  const tenThousands: string = tenThousandsNum ? formatPrice(tenThousandsNum, '만') : '';
  const ones: string = formatPrice(Math.floor((price % 100000000) % 10000), '원');
  return hundredMillions + tenThousands + ones;
}

const statusesServiceMessageBuy: Array<string> = ['noti-max-bidding', 'noti-success', 'noti-failure', 'noti-warn1', 'noti-warn2', 'winning', 'successful', 'failure', 'unselected'];
const filterServiceMessageBuy = (service: Service): boolean => {
  const correctType: boolean = 'type' in service && service.type === 'used';
  const correctStatus: boolean = 'status' in service && R.find((x) => x === service.status, statusesServiceMessageBuy);
  return correctType && correctStatus
};
export const filterServicesMessageBuy = (services: Array<Service>): Array<Service> => R.filter(filterServiceMessageBuy, services);

const filterServiceBidSuccess = (service: Service): boolean => {
  const correctType: boolean = 'type' in service && service.type === 'used';
  const correctStatus: boolean = 'status' in service && service.status === 'successful-card';
  return correctType && correctStatus;
};
export const filterServicesBidSuccess = (services: Array<Service>): Array<Service> => R.filter(filterServiceBidSuccess, services);

const statusesServiceBidFailure: Array<string> = ['failure-card', 'unselected-card'];
const filterServiceBidFailure = (service: Service): boolean => {
  const correctType: boolean = 'type' in service && service.type === 'used';
  const correctStatus: boolean = 'status' in service && R.find((x) => x === service.status, statusesServiceBidFailure);
  return correctType && correctStatus && 'data' in service;
};
export const filterServicesBidFailure = (services: Array<Service>): Array<Service> => R.filter(filterServiceBidFailure, services);

const statusesServiceMessageSell: Array<string> = ['review-accept', 'review-reject', 'booking-agent'];
const filterServiceMessageSell = (service: Service): boolean => {
  const correctType1: boolean = 'type' in service && service.type === 'inquiry';
  const correctType2: boolean = 'type' in service && service.type === 'used';
  const hasDataTag: boolean = 'data' in service && 'tag' in service.data;
  const correctStatus: boolean = 'status' in service && R.find((x) => x === service.status, statusesServiceMessageSell);
  return (correctType1 && hasDataTag) || (correctType2 && correctStatus);
};
export const filterServicesMessageSell = (services: Array<Service>): Array<Service> => R.filter(filterServiceMessageSell, services);

const filterServiceMessageService = (service: Service): boolean => {
  const correctType1: boolean = 'type' in service && service.type === 'inquiry';
  const correctType2: boolean = 'type' in service && (service.type === 'notice' || service.type === 'slot');
  const noDataTag: boolean = !(service.data) || !(service.data.tag);
  return (correctType1 && noDataTag) || correctType2;
};
export const filterServicesMessageService = (services: Array<Service>): Array<Service> => R.filter(filterServiceMessageService, services);

// const tempImageArray = _.clone(this.vehicleImages); // defensive copying
// _.remove(tempImageArray, i => i === selectedImageUrl); // mutate tempImageArray
// const organizedImageArray = _.concat(selectedImageUrl, tempImageArray);

// export const reorganizeImages = (selectedImage: string, imageArray: Array<string>): Array<string> => {

// };