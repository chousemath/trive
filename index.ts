import * as R from 'ramda';
const mapIndexed = R.addIndex(R.map);
const joinBlank = R.join('');
import * as C from './data/common.js';
import { Service } from './interfaces/service.js';
import { Brand } from './interfaces/brand.js';
import { DeviceStatus } from './interfaces/device-status.js';
import { Device } from './data/device.js';

/**
 * Service: a general purpose type to represent message cards in the mobile application.
 * @typedef {Object} Service
 * @property {string} key - documentation in progress
 * @property {string} type - documentation in progress
 * @property {string} subtype - documentation in progress
 * @property {string} status - documentation in progress
 * @property {string} body - documentation in progress
 * @property {string} responser - documentation in progress
 * @property {string} requester - documentation in progress
 * @property {string} followup - documentation in progress
 * @property {string} requestorName - documentation in progress
 * @property {string} requestorPhone - documentation in progress
 * @property {string} province - documentation in progress
 * @property {string} when - documentation in progress
 * @property {string} seller - documentation in progress
 * @property {string} vehicleModel - documentation in progress
 * @property {string} csStatus - documentation in progress
 * @property {number} timeRequest - documentation in progress
 * @property {number} timeResponse - documentation in progress
 * @property {number} timeReceive - documentation in progress
 * @property {number} timeRead - documentation in progress
 * @property {number} timeEstimate - documentation in progress
 * @property {number} timePhone - documentation in progress
 * @property {number} timeSMS - documentation in progress
 * @property {number} dateFirstCall - documentation in progress
 * @property {number} payback - documentation in progress
 * @property {boolean} deleted - documentation in progress
 * @property {} discounts - documentation in progress
 * @property {} data - documentation in progress
 */

/**
 * Makes sure that a single digit numeric string is padded with a zero in front.
 * @constructor
 * @param {string} original - The original numeric string to change (or return).
 */
export const padSingleDigitString = (original: string): string => {
  return original.length === 1 ? '0' + original : original;
}

/**
 * Makes sure that a single digit numeric value (number or string) is padded with a zero in front.
 * @constructor
 * @param {(number|string)} original - The original numeric value (number or string) to change (or return).
 */
export const padNumber = (original: number | string): string => {
  if (!original) return '';
  const type: string = typeof original;
  if (type === 'string') return padSingleDigitString(original as string);
  else if (type === 'number') return padSingleDigitString('' + original);
  else return '';
};

/**
 * Formats a year, month, and day value into a string form appropriate for our database.
 * @constructor
 * @param {(number|string)} year - The year value of the date.
 * @param {(number|string)} month - The month value of the date.
 * @param {(number|string)} day - The day value of the date.
 */
export const assembleDateString = (
  year: number | string,
  month: number | string,
  day: number | string
): string => {
  if (!year || !month || !day) return '';
  return padNumber(year) + padNumber(month) + padNumber(day)
};

const regexCarNumber: RegExp = /^[0-9][0-9][^a-zA-Z0-9][0-9][0-9][0-9][0-9]+$/;
/**
 * Decides whether or not an input string is a valid, Korean license plate number (차량번호).
 * @constructor
 * @param {string} carNumber - The license plate number in question.
 */
export const isValidCarNumber = (carNumber: string): boolean => regexCarNumber.test(carNumber) && carNumber.length === 7;

/**
 * Converts a brand key (used in Firebase) to the appropriate, Korean brand name.
 * @constructor
 * @param {string} brandKey - The Firebase key for a particular brand.
 */
export const brandKeyToName = (brandKey: string): string => (brandKey in C.Common.Brand) ? C.Common.Brand[brandKey].name : brandKey;

/**
 * Converts a transmission key (used in Firebase) to the appropriate, Korean name for that transmission type.
 * @constructor
 * @param {string} transmissionKey - The Firebase key for a particular transmission type.
 */
export const transmissionKeyToName = (transmissionKey: string): string => (transmissionKey in C.Common.Transmission) ? C.Common.Transmission[transmissionKey].name : transmissionKey;

const transformNumericString = (original: string): string => {
  if (!original) return '';
  const limit: number = original.length - 1;
  const reversedWithCommas: Array<string> = mapIndexed((val, idx) => {
    const cond1: boolean = (idx + 1) % 3 === 0;
    const cond2: boolean = idx !== limit;
    return (cond1 && cond2) ? ',' + val : val;
  }, R.reverse(original));
  return joinBlank(R.reverse(reversedWithCommas));
};

/**
 * Format a number or numeric string to be divided every three digits by a comma.
 * @constructor
 * @param {(number|string)} original - The number or numeric string.
 */
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

/**
 * Format a number to be divided every three digits by a comma, and divided by Korean, monetary notation.
 * @constructor
 * @param {number} price - The raw price number (in Korean won).
 */
export const transformPrice = (price: number): string => {
  const hundredMillionsNum: number = Math.floor(price / 100000000);
  const hundredMillions: string = hundredMillionsNum ? formatPrice(hundredMillionsNum, '억') : '';
  const tenThousandsNum: number = Math.floor((price % 100000000) / 10000);
  const tenThousands: string = tenThousandsNum ? formatPrice(tenThousandsNum, '만') : '';
  const onesNum: number = Math.floor((price % 100000000) % 10000);
  const ones: string = onesNum || (hundredMillionsNum === 0 && tenThousandsNum === 0) ? formatPrice(onesNum, '원') : '';
  return (hundredMillions + tenThousands + ones).trim() + (((hundredMillionsNum || tenThousandsNum) && (onesNum === 0)) ? '원' : '');
}

const statusesServiceMessageBuy: Array<string> = ['noti-max-bidding', 'noti-success', 'noti-failure', 'noti-warn1', 'noti-warn2', 'winning', 'successful', 'failure', 'unselected'];
const filterServiceMessageBuy = (service: Service): boolean => {
  if (!service) return false;
  const correctType: boolean = 'type' in service && service.type === 'used';
  const correctStatus: boolean = 'status' in service && R.find((x) => x === service.status, statusesServiceMessageBuy);
  return correctType && correctStatus
};

/**
 * Filter services by the 'buy' category.
 * @constructor
 * @param {Array.<Service>} services - List of service messages.
 */
export const filterServicesMessageBuy = (services: Array<Service>): Array<Service> => R.filter(filterServiceMessageBuy, services);

const filterServiceBidSuccess = (service: Service): boolean => {
  if (!service) return false;
  const correctType: boolean = 'type' in service && service.type === 'used';
  const correctStatus: boolean = 'status' in service && service.status === 'successful-card';
  return correctType && correctStatus;
};

/**
 * Filter services by the 'successful bid' category.
 * @constructor
 * @param {Array.<Service>} services - List of service messages.
 */
export const filterServicesBidSuccess = (services: Array<Service>): Array<Service> => R.filter(filterServiceBidSuccess, services);

const statusesServiceBidFailure: Array<string> = ['failure-card', 'unselected-card'];
const filterServiceBidFailure = (service: Service): boolean => {
  if (!service) return false;
  const correctType: boolean = 'type' in service && service.type === 'used';
  const correctStatus: boolean = 'status' in service && R.find((x) => x === service.status, statusesServiceBidFailure);
  return correctType && correctStatus && 'data' in service;
};

/**
 * Filter services by the 'failed bid' category.
 * @constructor
 * @param {Array.<Service>} services - List of service messages.
 */
export const filterServicesBidFailure = (services: Array<Service>): Array<Service> => R.filter(filterServiceBidFailure, services);

const statusesServiceMessageSell: Array<string> = ['review-accept', 'review-reject', 'booking-agent'];
const filterServiceMessageSell = (service: Service): boolean => {
  if (!service) return false;
  const correctType1: boolean = 'type' in service && service.type === 'inquiry';
  const correctType2: boolean = 'type' in service && service.type === 'used';
  const hasDataTag: boolean = 'data' in service && 'tag' in service.data;
  const correctStatus: boolean = 'status' in service && R.find((x) => x === service.status, statusesServiceMessageSell);
  return (correctType1 && hasDataTag) || (correctType2 && correctStatus);
};

/**
 * Filter services by the 'sell' category.
 * @constructor
 * @param {Array.<Service>} services - List of service messages.
 */
export const filterServicesMessageSell = (services: Array<Service>): Array<Service> => R.filter(filterServiceMessageSell, services);

const filterServiceMessageService = (service: Service): boolean => {
  if (!service) return false;
  const correctType1: boolean = 'type' in service && service.type === 'inquiry';
  const correctType2: boolean = 'type' in service && (service.type === 'notice' || service.type === 'slot');
  const noDataTag: boolean = !(service.data) || !(service.data.tag);
  return (correctType1 && noDataTag) || correctType2;
};

/**
 * Filter services by the 'misc' category.
 * @constructor
 * @param {Array.<Service>} services - List of service messages.
 */
export const filterServicesMessageService = (services: Array<Service>): Array<Service> => R.filter(filterServiceMessageService, services);

/**
 * Format a date string into a dot separated version.
 * @constructor
 * @param {string} dateString - String representing the year, month, and day.
 */
export const reformatDateString = (dateString: string): string => {
  if (!dateString) return '';
  const year: string = dateString.slice(0, 4);
  const month: string = dateString.slice(4, 6);
  const day: string = dateString.slice(6, 8);
  return year + '.' + month + '.' + day;
}

/**
 * Obfuscate a phone number.
 * @constructor
 * @param {string} phone - String representing a phone number.
 */
export const obfuscatePhone = (phone: string): string => {
  if (!phone) return '';
  const cleanPhone: string = phone.replace(/[^0-9.]/g, '');
  if (cleanPhone.length !== 11) return '';
  return cleanPhone.slice(0, 3) + '-****-' + cleanPhone.slice(7, 11);
};

/**
 * Maps a service type to that service's name.
 * @constructor
 * @param {string} serviceType - Service type.
 */
export const mapServiceType = (serviceType: string): string => {
  if (!serviceType || !(serviceType in C.Common.ServiceTypes)) return '';
  return C.Common.ServiceTypes[serviceType].name;
}

/**
 * Maps a customer service type to that service's name.
 * @constructor
 * @param {string} csType - Customer service type.
 */
export const mapCsType = (csType: string): string => {
  if (!csType || !(csType in C.Common.CSStatus)) return '';
  return C.Common.CSStatus[csType].name;
};

const miscPipeHandlers = {
  date: (value: string): string => reformatDateString(value),
  phone: (value: string): string => obfuscatePhone(value),
  service: (value: string): string => mapServiceType(value),
  cs: (value: string): string => mapCsType(value)
};

/**
 * Maps some action to a string.
 * @constructor
 * @param {string} value - Action value.
 * @param {string} pipeType - Action type.
 */
export const handleMiscPipe = (value: string, pipeType: string): string => {
  if (pipeType in miscPipeHandlers) return miscPipeHandlers[pipeType](value);
  return '';
};

/**
 * Returns all the rows of the brand picker.
 * @constructor
 */
export const brandRows = (): Array<Array<Brand>> => {
  return [
    C.Common.BrandsFirst,
    C.Common.BrandsSecond,
    C.Common.BrandsThird,
    C.Common.BrandsFourth
  ];
};

/**
 * Returns the default device status of an used vehicle.
 * @constructor 
 */
export const defaultDeviceStatus = (): DeviceStatus => Device.DefaultStatus;

/**
 * Ensures that the input is a numeric value
 * @constructor
 * @param {(number|string)} original - The original input value
 */
export const ensureNumber = (original: number | string): number => original ? +original || 0 : 0;