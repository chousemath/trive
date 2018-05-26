import * as R from 'ramda';

export const padSingleDigitString = (original: string): string => {
  return original.length === 1 ? '0' + original : original;
}

export const padNumber = (original: number | string): string => {
  const type: string = typeof original;
  if (type === 'string') return padSingleDigitString(original as string);
  else if (type === 'number') return padSingleDigitString('' + original);
  else return '';
};

export const assembleDateString = (
  year: number | string,
  month: number | string,
  day: number | string
): string => padNumber(year) + padNumber(month) + padNumber(day);

const regexCarNumber: RegExp = /^[0-9][0-9][^a-zA-Z0-9][0-9][0-9][0-9][0-9]+$/;
export const isValidCarNumber = (carNumber: string): boolean => regexCarNumber.test(carNumber) && carNumber.length === 7;