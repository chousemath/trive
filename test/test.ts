import * as A from 'assert';
import * as M from 'mocha';
import * as T from '../index';

M.describe('Trive', () => {
  M.describe('#padSingleDigitString', () => {
    M.it('should pad a string when it has length 1', () => {
      A.equal(T.padSingleDigitString('1'), '01');
      A.equal(T.padSingleDigitString('2'), '02');
      A.equal(T.padSingleDigitString('3'), '03');
      A.equal(T.padSingleDigitString('4'), '04');
      A.equal(T.padSingleDigitString('5'), '05');
      A.equal(T.padSingleDigitString('6'), '06');
      A.equal(T.padSingleDigitString('7'), '07');
      A.equal(T.padSingleDigitString('8'), '08');
      A.equal(T.padSingleDigitString('9'), '09');
    });
  });
  M.describe('#padNumber', () => {
    M.it('should pad a number and convert it to a string when it is single digit', () => {
      A.equal(T.padNumber(1), '01');
      A.equal(T.padNumber(2), '02');
      A.equal(T.padNumber(3), '03');
      A.equal(T.padNumber(4), '04');
      A.equal(T.padNumber(5), '05');
      A.equal(T.padNumber(6), '06');
      A.equal(T.padNumber(7), '07');
      A.equal(T.padNumber(8), '08');
      A.equal(T.padNumber(9), '09');
    });
    M.it('should pad a string when it has length 1', () => {
      A.equal(T.padNumber('1'), '01');
      A.equal(T.padNumber('2'), '02');
      A.equal(T.padNumber('3'), '03');
      A.equal(T.padNumber('4'), '04');
      A.equal(T.padNumber('5'), '05');
      A.equal(T.padNumber('6'), '06');
      A.equal(T.padNumber('7'), '07');
      A.equal(T.padNumber('8'), '08');
      A.equal(T.padNumber('9'), '09');
    });
    M.it('should return the original number as a string when it is two or more digits', () => {
      A.equal(T.padNumber(10), '10');
      A.equal(T.padNumber(11), '11');
      A.equal(T.padNumber(12), '12');
      A.equal(T.padNumber(13), '13');
      A.equal(T.padNumber(14), '14');
      A.equal(T.padNumber(15), '15');
      A.equal(T.padNumber(16), '16');
      A.equal(T.padNumber(17), '17');
      A.equal(T.padNumber(18), '18');
      A.equal(T.padNumber(19), '19');
      A.equal(T.padNumber(100), '100');
    });
  });
  M.describe('#assembleDateString', () => {
    M.it('should return a correctly formatted date string', () => {
      A.equal(T.assembleDateString(1990, 7, 7), '19900707');
      A.equal(T.assembleDateString('1990', 7, 7), '19900707');
      A.equal(T.assembleDateString(1990, '7', 7), '19900707');
      A.equal(T.assembleDateString(1990, 7, '7'), '19900707');
      A.equal(T.assembleDateString('1990', 7, '7'), '19900707');
      A.equal(T.assembleDateString(1990, '7', '7'), '19900707');
      A.equal(T.assembleDateString('1990', '7', '7'), '19900707');
    });
  });
  M.describe('#isValidCarNumber', () => {
    M.it('should correctly judge whether or not a vehicle number is valid', () => {
      A.equal(T.isValidCarNumber('11헐1111'), true);
      A.equal(T.isValidCarNumber('1111111'), false);
      A.equal(T.isValidCarNumber('111헐111'), false);
      A.equal(T.isValidCarNumber('11헐11111'), false);
      A.equal(T.isValidCarNumber('11헐111헐'), false);
    });
  });
});