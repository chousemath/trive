import * as R from 'ramda';
const mapIndexed = R.addIndex(R.map);
const joinBlank = R.join('');
import { Common } from './data/common';

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

export const brandKeyToName = (brandKey: string): string => (brandKey in Common.Brand) ? Common.Brand[brandKey].name : brandKey;
export const transmissionKeyToName = (transmissionKey: string): string => (transmissionKey in Common.Transmission) ? Common.Transmission[transmissionKey].name : transmissionKey;

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