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
            A.equal(T.transformPrice(10000), '1만원');
            A.equal(T.transformPrice(19120), '1만 9,120원');
            A.equal(T.transformPrice(129120), '12만 9,120원');
            A.equal(T.transformPrice(99129120), '9,912만 9,120원');
            A.equal(T.transformPrice(600000000), '6억원');
            A.equal(T.transformPrice(600010000), '6억 1만원');
            A.equal(T.transformPrice(699129120), '6억 9,912만 9,120원');
            A.equal(T.transformPrice(55699129120), '556억 9,912만 9,120원');
            A.equal(T.transformPrice(255699129120), '2,556억 9,912만 9,120원');
        });
    });
    M.describe('#filterServicesMessageBuy', function () {
        M.it('should correctly filter services with the message buy label', function () {
            var input1 = [
                { type: 'used', status: 'noti-max-bidding' },
                { type: 'used', status: 'not-valid' }
            ];
            var input2 = [
                { type: 'used', status: 'noti-max-bidding' },
                { type: 'used', status: 'not-valid' },
                { type: 'used', status: 'noti-warn1' }
            ];
            var output1 = [{ type: 'used', status: 'noti-max-bidding' }];
            var output2 = [
                { type: 'used', status: 'noti-max-bidding' },
                { type: 'used', status: 'noti-warn1' }
            ];
            var output1Actual = T.filterServicesMessageBuy(input1);
            var output2Actual = T.filterServicesMessageBuy(input2);
            A.equal(output1Actual.length, output1.length);
            A.equal(output1Actual[0].type, output1[0].type);
            A.equal(output1Actual[0].status, output1[0].status);
            A.equal(output2Actual.length, output2.length);
            A.equal(output2Actual[0].type, output2[0].type);
            A.equal(output2Actual[0].status, output2[0].status);
            A.equal(output2Actual[1].type, output2[1].type);
            A.equal(output2Actual[1].status, output2[1].status);
        });
    });
    M.describe('#filterServicesBidSuccess', function () {
        M.it('should correctly filter services with the message buy label', function () {
            var input1 = [
                { type: 'used', status: 'successful-card' },
                { type: 'used', status: 'not-valid' }
            ];
            var input2 = [
                { type: 'used', status: 'successful-card' },
                { type: 'used', status: 'not-valid' },
                { type: 'used', status: 'noti-warn1' }
            ];
            var output1 = [{ type: 'used', status: 'successful-card' }];
            var output1Actual = T.filterServicesBidSuccess(input1);
            var output2Actual = T.filterServicesBidSuccess(input2);
            A.equal(output1Actual.length, output1.length);
            A.equal(output1Actual[0].type, output1[0].type);
            A.equal(output1Actual[0].status, output1[0].status);
            A.equal(output2Actual.length, output1.length);
            A.equal(output2Actual[0].type, output1[0].type);
        });
    });
    M.describe('#filterServicesBidFailure', function () {
        M.it('should correctly filter services with the message buy label', function () {
            var input1 = [
                { type: 'used', status: 'failure-card', data: 'x' },
                { type: 'used', status: 'not-valid' }
            ];
            var input2 = [
                { type: 'used', status: 'failure-card', data: 'x' },
                { type: 'used', status: 'not-valid' },
                { type: 'used', status: 'unselected-card', data: 'x' }
            ];
            var output1 = [{ type: 'used', status: 'failure-card' }];
            var output2 = [
                { type: 'used', status: 'failure-card' },
                { type: 'used', status: 'unselected-card' }
            ];
            var output1Actual = T.filterServicesBidFailure(input1);
            var output2Actual = T.filterServicesBidFailure(input2);
            A.equal(output1Actual.length, output1.length);
            A.equal(output1Actual[0].type, output1[0].type);
            A.equal(output1Actual[0].status, output1[0].status);
            A.equal(output2Actual.length, output2.length);
            A.equal(output2Actual[0].type, output2[0].type);
            A.equal(output2Actual[0].status, output2[0].status);
            A.equal(output2Actual[1].type, output2[1].type);
            A.equal(output2Actual[1].status, output2[1].status);
        });
    });
    M.describe('#filterServicesMessageSell', function () {
        M.it('should correctly filter services with the message buy label', function () {
            var input1 = [
                { type: 'used', status: 'review-accept' },
                { type: 'used', status: 'not-valid' }
            ];
            var input2 = [
                { type: 'used', status: 'review-accept' },
                { type: 'used', status: 'not-valid' },
                { type: 'inquiry', data: { tag: 'x' } }
            ];
            var output1 = [{ type: 'used', status: 'review-accept' }];
            var output2 = [
                { type: 'used', status: 'review-accept' },
                { type: 'inquiry', data: { tag: 'x' } }
            ];
            var output1Actual = T.filterServicesMessageSell(input1);
            var output2Actual = T.filterServicesMessageSell(input2);
            A.equal(output1Actual.length, output1.length);
            A.equal(output1Actual[0].type, output1[0].type);
            A.equal(output1Actual[0].status, output1[0].status);
            A.equal(output2Actual.length, output2.length);
            A.equal(output2Actual[0].type, output2[0].type);
            A.equal(output2Actual[0].status, output2[0].status);
            A.equal(output2Actual[1].type, output2[1].type);
            A.equal(output2Actual[1].data.tag, output2[1].data.tag);
        });
    });
    M.describe('#filterServiceMessagesService', function () {
        M.it('should correctly filter services with the message buy label', function () {
            var input1 = [
                { type: 'notice' },
                { type: 'used', status: 'not-valid' }
            ];
            var input2 = [
                { type: 'notice' },
                { type: 'used', status: 'not-valid' },
                { type: 'inquiry' }
            ];
            var output1 = [{ type: 'notice' }];
            var output2 = [
                { type: 'notice' },
                { type: 'inquiry' }
            ];
            var output1Actual = T.filterServicesMessageService(input1);
            var output2Actual = T.filterServicesMessageService(input2);
            A.equal(output1Actual.length, output1.length);
            A.equal(output1Actual[0].type, output1[0].type);
            A.equal(output2Actual.length, output2.length);
            A.equal(output2Actual[0].type, output2[0].type);
            A.equal(output2Actual[1].type, output2[1].type);
        });
    });
    M.describe('#reformatDateString', function () {
        M.it('should correctly reformat a date string', function () {
            A.equal(T.reformatDateString('19900707'), '1990.07.07');
            A.equal(T.reformatDateString('19891211'), '1989.12.11');
        });
    });
    M.describe('#obfuscatePhone', function () {
        M.it('should correctly obfuscate a phone number', function () {
            A.equal(T.obfuscatePhone('01068513003'), '010-****-3003');
            A.equal(T.obfuscatePhone('010-6851-3003'), '010-****-3003');
            A.equal(T.obfuscatePhone('123'), '');
            A.equal(T.obfuscatePhone('+123+'), '');
        });
    });
    M.describe('#mapServiceType', function () {
        M.it('should correctly map a service type to a korean name', function () {
            A.equal(T.mapServiceType('xxx'), '');
            A.equal(T.mapServiceType('publish'), '발송');
            A.equal(T.mapServiceType('fail'), '실패');
        });
    });
    M.describe('#mapCsType', function () {
        M.it('should correctly map a customer service type to a korean name', function () {
            A.equal(T.mapCsType('xxx'), '');
            A.equal(T.mapCsType('doing'), '처리중');
            A.equal(T.mapCsType('done'), '완료');
        });
    });
    M.describe('#handleMiscPipe', function () {
        M.it('should correctly map a misc pipe request to the appropriate string response', function () {
            A.equal(T.handleMiscPipe('doing', 'cs'), '처리중');
            A.equal(T.handleMiscPipe('done', 'cs'), '완료');
            A.equal(T.handleMiscPipe('publish', 'service'), '발송');
            A.equal(T.handleMiscPipe('fail', 'service'), '실패');
            A.equal(T.handleMiscPipe('01068513003', 'phone'), '010-****-3003');
            A.equal(T.handleMiscPipe('010-6851-3003', 'phone'), '010-****-3003');
            A.equal(T.handleMiscPipe('19900707', 'date'), '1990.07.07');
            A.equal(T.handleMiscPipe('19891211', 'date'), '1989.12.11');
        });
    });
    M.describe('#brandRows', function () {
        M.it('should return all brands for the brand picker', function () {
            A.equal(T.brandRows().length, 4);
        });
    });
    M.describe('#defaultDeviceStatus', function () {
        M.it('should return the default device status', function () {
            A.equal(T.defaultDeviceStatus().brake.oil_status, 'optimal');
        });
    });
    M.describe('#ensureNumber', function () {
        M.it('should return a number no matter what the input is', function () {
            A.equal(T.ensureNumber('123'), 123);
            A.equal(T.ensureNumber(123), 123);
            A.equal(T.ensureNumber('Hey baby~'), 0);
            A.equal(T.ensureNumber(0), 0);
        });
    });
    M.describe('#calculateDistance', function () {
        M.it('should calculate the correct distance between two longitude/latitude points', function () {
            A.equal(Math.round(100 * T.calculateDistance(32.9697, -96.80322, 29.46786, -98.53506, "K")) / 100, 422.74);
            A.equal(Math.round(100 * T.calculateDistance(32.9697, -96.80322, 29.46786, -98.53506, "N")) / 100, 228.11);
            A.equal(Math.round(100 * T.calculateDistance(32.9697, -96.80322, 29.46786, -98.53506, "")) / 100, 262.68);
            A.equal(Math.round(100 * T.calculateDistance(33.1234, -97.1234, 28.4321, -99.4321, "K")) / 100, 566.28);
            A.equal(Math.round(100 * T.calculateDistance(33.1234, -97.1234, 28.4321, -99.4321, "N")) / 100, 305.57);
            A.equal(Math.round(100 * T.calculateDistance(33.1234, -97.1234, 28.4321, -99.4321, "")) / 100, 351.87);
        });
    });
    M.describe('#colorKeyToHex', function () {
        M.it('should correctly map a color key to the corresponding hex colors', function () {
            var color1 = T.colorKeyToHex('others');
            var color2 = T.colorKeyToHex('Not A Real Color');
            A.equal(color1.backgroundColor, '#fff');
            A.equal(color1.border, 'silver');
            A.equal(color2.backgroundColor, '');
            A.equal(color2.border, '');
        });
    });
    M.describe('#getMaxBid', function () {
        M.it('should correctly extract the maximum bid for a collection of bids', function () {
            var testCase1 = {
                'kd2': {
                    'amount': 987,
                    'key': 'kd2',
                    'name': '김중고',
                    'time': 1528975141295,
                    'workplace': 'a'
                },
                'used1': {
                    'amount': 654,
                    'key': 'used1',
                    'name': 'Used1',
                    'time': 1528975168263,
                    'workplace': 'b'
                },
                'steve': {
                    'amount': 23,
                    'key': 'steve',
                    'name': 'STEVE',
                    'time': 1528975168263,
                    'workplace': 'c'
                },
                'bob': {
                    'amount': 15,
                    'key': 'bob',
                    'name': 'BOB',
                    'time': 1528975168263,
                    'workplace': 'd'
                }
            };
            var maxBid = T.getMaxBid(testCase1);
            A.equal(maxBid.key, 'kd2');
            A.equal(maxBid.amount, 987);
            A.equal(maxBid.workplace, 'a');
        });
    });
    M.describe('#getMinBid', function () {
        M.it('should correctly extract the minimum bid for a collection of bids', function () {
            var testCase1 = {
                'kd2': {
                    'amount': 987,
                    'key': 'kd2',
                    'name': '김중고',
                    'time': 1528975141295,
                    'workplace': 'a'
                },
                'used1': {
                    'amount': 654,
                    'key': 'used1',
                    'name': 'Used1',
                    'time': 1528975168263,
                    'workplace': 'b'
                },
                'steve': {
                    'amount': 23,
                    'key': 'steve',
                    'name': 'STEVE',
                    'time': 1528975168263,
                    'workplace': 'c'
                },
                'bob': {
                    'amount': 15,
                    'key': 'bob',
                    'name': 'BOB',
                    'time': 1528975168263,
                    'workplace': 'd'
                }
            };
            var minBid = T.getMinBid(testCase1);
            A.equal(minBid.key, 'bob');
            A.equal(minBid.amount, 15);
            A.equal(minBid.workplace, 'd');
        });
    });
    M.describe('#getBidCount', function () {
        M.it('should correctly extract the minimum bid for a collection of bids', function () {
            var testCase1 = {
                'kd2': {
                    'amount': 987,
                    'key': 'kd2',
                    'name': '김중고',
                    'time': 1528975141295,
                    'workplace': 'a'
                },
                'used1': {
                    'amount': 654,
                    'key': 'used1',
                    'name': 'Used1',
                    'time': 1528975168263,
                    'workplace': 'b'
                },
                'steve': {
                    'amount': 23,
                    'key': 'steve',
                    'name': 'STEVE',
                    'time': 1528975168263,
                    'workplace': 'c'
                },
                'bob': {
                    'amount': 15,
                    'key': 'bob',
                    'name': 'BOB',
                    'time': 1528975168263,
                    'workplace': 'd'
                }
            };
            A.equal(T.getBidCount(testCase1), 4);
        });
    });
    M.describe('#getBidInfo', function () {
        M.it('should correctly extract the minimum bid for a collection of bids', function () {
            var testCase1 = {
                'kd2': {
                    'amount': 987,
                    'key': 'kd2',
                    'name': '김중고',
                    'time': 1528975141295,
                    'workplace': 'a'
                },
                'used1': {
                    'amount': 654,
                    'key': 'used1',
                    'name': 'Used1',
                    'time': 1528975168263,
                    'workplace': 'b'
                },
                'steve': {
                    'amount': 23,
                    'key': 'steve',
                    'name': 'STEVE',
                    'time': 1528975168263,
                    'workplace': 'c'
                },
                'bob': {
                    'amount': 15,
                    'key': 'bob',
                    'name': 'BOB',
                    'time': 1528975168263,
                    'workplace': 'd'
                }
            };
            var bidInfo = T.getBidInfo(testCase1);
            A.equal(bidInfo.maxBid.key, 'kd2');
            A.equal(bidInfo.maxBid.amount, 987);
            A.equal(bidInfo.maxBid.workplace, 'a');
            A.equal(bidInfo.minBid.key, 'bob');
            A.equal(bidInfo.minBid.amount, 15);
            A.equal(bidInfo.minBid.workplace, 'd');
            A.equal(bidInfo.bidCount, 4);
        });
    });
});
