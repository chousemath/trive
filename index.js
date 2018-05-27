"use strict";
exports.__esModule = true;
var R = require("ramda");
var mapIndexed = R.addIndex(R.map);
var joinBlank = R.join('');
var common_1 = require("./data/common");
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
exports.brandKeyToName = function (brandKey) { return (brandKey in common_1.Common.Brand) ? common_1.Common.Brand[brandKey].name : brandKey; };
exports.transmissionKeyToName = function (transmissionKey) { return (transmissionKey in common_1.Common.Transmission) ? common_1.Common.Transmission[transmissionKey].name : transmissionKey; };
var transformNumericString = function (original) {
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
