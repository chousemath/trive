"use strict";
exports.__esModule = true;
var A = require("assert");
var M = require("mocha");
var T = require("../index");
M.describe('Trive', function () {
    M.describe('#padSingleDigitString', function () {
        M.it('should pad a string when it has length 1', function () {
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
    M.describe('#padNumber', function () {
        M.it('should pad a number and convert it to a string when it is single digit', function () {
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
        M.it('should pad a string when it has length 1', function () {
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
        M.it('should return the original number as a string when it is two or more digits', function () {
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
    M.describe('#assembleDateString', function () {
        M.it('should return a correctly formatted date string', function () {
            A.equal(T.assembleDateString(1990, 7, 7), '19900707');
            A.equal(T.assembleDateString('1990', 7, 7), '19900707');
            A.equal(T.assembleDateString(1990, '7', 7), '19900707');
            A.equal(T.assembleDateString(1990, 7, '7'), '19900707');
            A.equal(T.assembleDateString('1990', 7, '7'), '19900707');
            A.equal(T.assembleDateString(1990, '7', '7'), '19900707');
            A.equal(T.assembleDateString('1990', '7', '7'), '19900707');
        });
    });
    M.describe('#isValidCarNumber', function () {
        M.it('should correctly judge whether or not a vehicle number is valid', function () {
            A.equal(T.isValidCarNumber('11헐1111'), true);
            A.equal(T.isValidCarNumber('1111111'), false);
            A.equal(T.isValidCarNumber('111헐111'), false);
            A.equal(T.isValidCarNumber('11헐11111'), false);
            A.equal(T.isValidCarNumber('11헐111헐'), false);
        });
    });
    M.describe('#brandKeyToName', function () {
        M.it('should correctly retrieve the official name of a brand by its key', function () {
            A.equal(T.brandKeyToName('kia'), '기아');
            A.equal(T.brandKeyToName('infiniti'), '인피니티');
            A.equal(T.brandKeyToName(''), '');
            A.equal(T.brandKeyToName('not-a-real-brand'), 'not-a-real-brand');
        });
    });
    M.describe('#transmissionKeyToName', function () {
        M.it('should correctly retrieve the official name of a transmission type by its key', function () {
            A.equal(T.transmissionKeyToName('automatic_'), '자동');
            A.equal(T.transmissionKeyToName('manual_'), '수동');
            A.equal(T.transmissionKeyToName(''), '');
            A.equal(T.transmissionKeyToName('not-a-real-transmission'), 'not-a-real-transmission');
        });
    });
    M.describe('#transformNumber', function () {
        M.it('should correctly format a number or number string to a number string with commas', function () {
            A.equal(T.transformNumber('0'), '0');
            A.equal(T.transformNumber('1'), '1');
            A.equal(T.transformNumber('12'), '12');
            A.equal(T.transformNumber('123'), '123');
            A.equal(T.transformNumber(0), '0');
            A.equal(T.transformNumber(1), '1');
            A.equal(T.transformNumber(12), '12');
            A.equal(T.transformNumber(123), '123');
            A.equal(T.transformNumber('1000'), '1,000');
            A.equal(T.transformNumber('9999999'), '9,999,999');
            A.equal(T.transformNumber(1000), '1,000');
            A.equal(T.transformNumber(9999999), '9,999,999');
            A.equal(T.transformNumber(91919191919191), '91,919,191,919,191');
        });
    });
    M.describe('#transformPrice', function () {
        M.it('should correctly format a price number to a string with commas', function () {
            A.equal(T.transformPrice(0), '0원');
            A.equal(T.transformPrice(990), '990원');
            A.equal(T.transformPrice(1120), '1,120원');
            A.equal(T.transformPrice(19120), '1만 9,120원');
            A.equal(T.transformPrice(129120), '12만 9,120원');
            A.equal(T.transformPrice(99129120), '9,912만 9,120원');
            A.equal(T.transformPrice(699129120), '6억 9,912만 9,120원');
            A.equal(T.transformPrice(55699129120), '556억 9,912만 9,120원');
            A.equal(T.transformPrice(255699129120), '2,556억 9,912만 9,120원');
        });
    });
});
