import * as A from 'assert';
import * as M from 'mocha';
import * as T from '../index';
import { Service } from '../interfaces/service';
import { Brand } from '../interfaces/brand';

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
  M.describe('#brandKeyToName', () => {
    M.it('should correctly retrieve the official name of a brand by its key', () => {
      A.equal(T.brandKeyToName('kia'), '기아');
      A.equal(T.brandKeyToName('infiniti'), '인피니티');
      A.equal(T.brandKeyToName(''), '');
      A.equal(T.brandKeyToName('not-a-real-brand'), 'not-a-real-brand');
    });
  });
  M.describe('#transmissionKeyToName', () => {
    M.it('should correctly retrieve the official name of a transmission type by its key', () => {
      A.equal(T.transmissionKeyToName('automatic_'), '자동');
      A.equal(T.transmissionKeyToName('manual_'), '수동');
      A.equal(T.transmissionKeyToName(''), '');
      A.equal(T.transmissionKeyToName('not-a-real-transmission'), 'not-a-real-transmission');
    });
  });
  M.describe('#transformNumber', () => {
    M.it('should correctly format a number or number string to a number string with commas', () => {
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
  M.describe('#transformPrice', () => {
    M.it('should correctly format a price number to a string with commas', () => {
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
  M.describe('#filterServicesMessageBuy', () => {
    M.it('should correctly filter services with the message buy label', () => {
      const input1: Array<any> = [
        { type: 'used', status: 'noti-max-bidding' },
        { type: 'used', status: 'not-valid' }
      ];
      const input2: Array<any> = [
        { type: 'used', status: 'noti-max-bidding' },
        { type: 'used', status: 'not-valid' },
        { type: 'used', status: 'noti-warn1' }
      ];
      const output1: Array<any> = [{ type: 'used', status: 'noti-max-bidding' }];
      const output2: Array<any> = [
        { type: 'used', status: 'noti-max-bidding' },
        { type: 'used', status: 'noti-warn1' }
      ];
      const output1Actual: Array<Service> = T.filterServicesMessageBuy(input1);
      const output2Actual: Array<Service> = T.filterServicesMessageBuy(input2);
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
  M.describe('#filterServicesBidSuccess', () => {
    M.it('should correctly filter services with the message buy label', () => {
      const input1: Array<any> = [
        { type: 'used', status: 'successful-card' },
        { type: 'used', status: 'not-valid' }
      ];
      const input2: Array<any> = [
        { type: 'used', status: 'successful-card' },
        { type: 'used', status: 'not-valid' },
        { type: 'used', status: 'noti-warn1' }
      ];
      const output1: Array<any> = [{ type: 'used', status: 'successful-card' }];
      const output1Actual: Array<Service> = T.filterServicesBidSuccess(input1);
      const output2Actual: Array<Service> = T.filterServicesBidSuccess(input2);
      A.equal(output1Actual.length, output1.length);
      A.equal(output1Actual[0].type, output1[0].type);
      A.equal(output1Actual[0].status, output1[0].status);
      A.equal(output2Actual.length, output1.length);
      A.equal(output2Actual[0].type, output1[0].type);
    });
  });
  M.describe('#filterServicesBidFailure', () => {
    M.it('should correctly filter services with the message buy label', () => {
      const input1: Array<any> = [
        { type: 'used', status: 'failure-card', data: 'x' },
        { type: 'used', status: 'not-valid' }
      ];
      const input2: Array<any> = [
        { type: 'used', status: 'failure-card', data: 'x' },
        { type: 'used', status: 'not-valid' },
        { type: 'used', status: 'unselected-card', data: 'x' }
      ];
      const output1: Array<any> = [{ type: 'used', status: 'failure-card' }];
      const output2: Array<any> = [
        { type: 'used', status: 'failure-card' },
        { type: 'used', status: 'unselected-card' }
      ];
      const output1Actual: Array<Service> = T.filterServicesBidFailure(input1);
      const output2Actual: Array<Service> = T.filterServicesBidFailure(input2);
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
  M.describe('#filterServicesMessageSell', () => {
    M.it('should correctly filter services with the message buy label', () => {
      const input1: Array<any> = [
        { type: 'used', status: 'review-accept' },
        { type: 'used', status: 'not-valid' }
      ];
      const input2: Array<any> = [
        { type: 'used', status: 'review-accept' },
        { type: 'used', status: 'not-valid' },
        { type: 'inquiry', data: { tag: 'x' } }
      ];
      const output1: Array<any> = [{ type: 'used', status: 'review-accept' }];
      const output2: Array<any> = [
        { type: 'used', status: 'review-accept' },
        { type: 'inquiry', data: { tag: 'x' } }
      ];
      const output1Actual: Array<Service> = T.filterServicesMessageSell(input1);
      const output2Actual: Array<Service> = T.filterServicesMessageSell(input2);
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
  M.describe('#filterServiceMessagesService', () => {
    M.it('should correctly filter services with the message buy label', () => {
      const input1: Array<any> = [
        { type: 'notice' },
        { type: 'used', status: 'not-valid' }
      ];
      const input2: Array<any> = [
        { type: 'notice' },
        { type: 'used', status: 'not-valid' },
        { type: 'inquiry' }
      ];
      const output1: Array<any> = [{ type: 'notice' }];
      const output2: Array<any> = [
        { type: 'notice' },
        { type: 'inquiry' }
      ];
      const output1Actual: Array<Service> = T.filterServicesMessageService(input1);
      const output2Actual: Array<Service> = T.filterServicesMessageService(input2);
      A.equal(output1Actual.length, output1.length);
      A.equal(output1Actual[0].type, output1[0].type);
      A.equal(output2Actual.length, output2.length);
      A.equal(output2Actual[0].type, output2[0].type);
      A.equal(output2Actual[1].type, output2[1].type);
    });
  });
  M.describe('#reformatDateString', () => {
    M.it('should correctly reformat a date string', () => {
      A.equal(T.reformatDateString('19900707'), '1990.07.07');
      A.equal(T.reformatDateString('19891211'), '1989.12.11');
    });
  });
  M.describe('#obfuscatePhone', () => {
    M.it('should correctly obfuscate a phone number', () => {
      A.equal(T.obfuscatePhone('01068513003'), '010-****-3003');
      A.equal(T.obfuscatePhone('010-6851-3003'), '010-****-3003');
      A.equal(T.obfuscatePhone('123'), '');
      A.equal(T.obfuscatePhone('+123+'), '');
    });
  });
  M.describe('#mapServiceType', () => {
    M.it('should correctly map a service type to a korean name', () => {
      A.equal(T.mapServiceType('xxx'), '');
      A.equal(T.mapServiceType('publish'), '발송');
      A.equal(T.mapServiceType('fail'), '실패');
    });
  });
  M.describe('#mapCsType', () => {
    M.it('should correctly map a customer service type to a korean name', () => {
      A.equal(T.mapCsType('xxx'), '');
      A.equal(T.mapCsType('doing'), '처리중');
      A.equal(T.mapCsType('done'), '완료');
    });
  });
  M.describe('#handleMiscPipe', () => {
    M.it('should correctly map a misc pipe request to the appropriate string response', () => {
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
  M.describe('#brandRows', () => {
    M.it('should return all brands for the brand picker', () => {
      A.equal(T.brandRows().length, 4);
    });
  });
  M.describe('#defaultDeviceStatus', () => {
    M.it('should return the default device status', () => {
      A.equal(T.defaultDeviceStatus().brake.oil_status, 'optimal');
    });
  });
});