"use strict";
exports.__esModule = true;
exports.padSingleDigitString = function (original) {
    return original.length === 1 ? '0' + original : original;
};
exports.padNumber = function (original) {
    var type = typeof original;
    if (type === 'string')
        return exports.padSingleDigitString(original);
    else if (type === 'number')
        return exports.padSingleDigitString('' + original);
    else
        return '';
};
exports.assembleDateString = function (year, month, day) { return exports.padNumber(year) + exports.padNumber(month) + exports.padNumber(day); };
var regexCarNumber = /^[0-9][0-9][^a-zA-Z0-9][0-9][0-9][0-9][0-9]+$/;
exports.isValidCarNumber = function (carNumber) { return regexCarNumber.test(carNumber) && carNumber.length === 7; };
