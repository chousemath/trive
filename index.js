"use strict";
exports.__esModule = true;
var R = require("ramda");
var mapIndexed = R.addIndex(R.map);
var joinBlank = R.join('');
var C = require("./data/common.js");
exports.padSingleDigitString = function (original) {
    return original.length === 1 ? '0' + original : original;
};
exports.padNumber = function (original) {
    if (!original)
        return '';
    var type = typeof original;
    if (type === 'string')
        return exports.padSingleDigitString(original);
    else if (type === 'number')
        return exports.padSingleDigitString('' + original);
    else
        return '';
};
exports.assembleDateString = function (year, month, day) {
    if (!year || !month || !day)
        return '';
    return exports.padNumber(year) + exports.padNumber(month) + exports.padNumber(day);
};
var regexCarNumber = /^[0-9][0-9][^a-zA-Z0-9][0-9][0-9][0-9][0-9]+$/;
exports.isValidCarNumber = function (carNumber) { return regexCarNumber.test(carNumber) && carNumber.length === 7; };
exports.brandKeyToName = function (brandKey) { return (brandKey in C.Common.Brand) ? C.Common.Brand[brandKey].name : brandKey; };
exports.transmissionKeyToName = function (transmissionKey) { return (transmissionKey in C.Common.Transmission) ? C.Common.Transmission[transmissionKey].name : transmissionKey; };
var transformNumericString = function (original) {
    if (!original)
        return '';
    var limit = original.length - 1;
    var reversedWithCommas = mapIndexed(function (val, idx) {
        var cond1 = (idx + 1) % 3 === 0;
        var cond2 = idx !== limit;
        return (cond1 && cond2) ? ',' + val : val;
    }, R.reverse(original));
    return joinBlank(R.reverse(reversedWithCommas));
};
exports.transformNumber = function (original) {
    if (original === undefined || original === null)
        return '';
    var type = typeof original;
    if (type === 'string')
        return transformNumericString(original);
    if (type === 'number')
        return transformNumericString(original.toString());
    else
        return '';
};
var formatPrice = function (price, unit) {
    if (price === undefined || price === null || typeof price !== 'number')
        return '';
    return transformNumericString(price.toString()) + unit + (unit === '원' ? '' : ' ');
};
exports.transformPrice = function (price) {
    var hundredMillionsNum = Math.floor(price / 100000000);
    var hundredMillions = hundredMillionsNum ? formatPrice(hundredMillionsNum, '억') : '';
    var tenThousandsNum = Math.floor((price % 100000000) / 10000);
    var tenThousands = tenThousandsNum ? formatPrice(tenThousandsNum, '만') : '';
    var ones = formatPrice(Math.floor((price % 100000000) % 10000), '원');
    return hundredMillions + tenThousands + ones;
};
var statusesServiceMessageBuy = ['noti-max-bidding', 'noti-success', 'noti-failure', 'noti-warn1', 'noti-warn2', 'winning', 'successful', 'failure', 'unselected'];
var filterServiceMessageBuy = function (service) {
    if (!service)
        return false;
    var correctType = 'type' in service && service.type === 'used';
    var correctStatus = 'status' in service && R.find(function (x) { return x === service.status; }, statusesServiceMessageBuy);
    return correctType && correctStatus;
};
exports.filterServicesMessageBuy = function (services) { return R.filter(filterServiceMessageBuy, services); };
var filterServiceBidSuccess = function (service) {
    if (!service)
        return false;
    var correctType = 'type' in service && service.type === 'used';
    var correctStatus = 'status' in service && service.status === 'successful-card';
    return correctType && correctStatus;
};
exports.filterServicesBidSuccess = function (services) { return R.filter(filterServiceBidSuccess, services); };
var statusesServiceBidFailure = ['failure-card', 'unselected-card'];
var filterServiceBidFailure = function (service) {
    if (!service)
        return false;
    var correctType = 'type' in service && service.type === 'used';
    var correctStatus = 'status' in service && R.find(function (x) { return x === service.status; }, statusesServiceBidFailure);
    return correctType && correctStatus && 'data' in service;
};
exports.filterServicesBidFailure = function (services) { return R.filter(filterServiceBidFailure, services); };
var statusesServiceMessageSell = ['review-accept', 'review-reject', 'booking-agent'];
var filterServiceMessageSell = function (service) {
    if (!service)
        return false;
    var correctType1 = 'type' in service && service.type === 'inquiry';
    var correctType2 = 'type' in service && service.type === 'used';
    var hasDataTag = 'data' in service && 'tag' in service.data;
    var correctStatus = 'status' in service && R.find(function (x) { return x === service.status; }, statusesServiceMessageSell);
    return (correctType1 && hasDataTag) || (correctType2 && correctStatus);
};
exports.filterServicesMessageSell = function (services) { return R.filter(filterServiceMessageSell, services); };
var filterServiceMessageService = function (service) {
    if (!service)
        return false;
    var correctType1 = 'type' in service && service.type === 'inquiry';
    var correctType2 = 'type' in service && (service.type === 'notice' || service.type === 'slot');
    var noDataTag = !(service.data) || !(service.data.tag);
    return (correctType1 && noDataTag) || correctType2;
};
exports.filterServicesMessageService = function (services) { return R.filter(filterServiceMessageService, services); };
exports.reformatDateString = function (dateString) {
    if (!dateString)
        return '';
    var year = dateString.slice(0, 4);
    var month = dateString.slice(4, 6);
    var day = dateString.slice(6, 8);
    return year + '.' + month + '.' + day;
};
exports.obfuscatePhone = function (phone) {
    if (!phone)
        return '';
    var cleanPhone = phone.replace(/[^0-9.]/g, '');
    if (cleanPhone.length !== 11)
        return '';
    return cleanPhone.slice(0, 3) + '-****-' + cleanPhone.slice(7, 11);
};
var serviceTypes = { publish: '발송', fail: '실패', stop: '중지', finish: '완료' };
exports.mapServiceType = function (serviceType) {
    if (!(serviceType in serviceTypes))
        return '';
    return serviceTypes[serviceType];
};
var csTypes = { doing: '처리중', done: '완료', cancel: '취소' };
exports.mapCsType = function (csType) {
    if (!(csType in csTypes))
        return '';
    return csTypes[csType];
};
// const tempImageArray = _.clone(this.vehicleImages); // defensive copying
// _.remove(tempImageArray, i => i === selectedImageUrl); // mutate tempImageArray
// const organizedImageArray = _.concat(selectedImageUrl, tempImageArray);
// export const reorganizeImages = (selectedImage: string, imageArray: Array<string>): Array<string> => {
// };
