"use strict";
exports.__esModule = true;
var C = require("./data/common.js");
var device_js_1 = require("./data/device.js");
var color_js_1 = require("./data/color.js");
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
exports.padSingleDigitString = function (original) {
    return original.length === 1 ? '0' + original : original;
};
/**
 * Makes sure that a single digit numeric value (number or string) is padded with a zero in front.
 * @constructor
 * @param {(number|string)} original - The original numeric value (number or string) to change (or return).
 */
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
/**
 * Formats a year, month, and day value into a string form appropriate for our database.
 * @constructor
 * @param {(number|string)} year - The year value of the date.
 * @param {(number|string)} month - The month value of the date.
 * @param {(number|string)} day - The day value of the date.
 */
exports.assembleDateString = function (year, month, day) {
    if (!year || !month || !day)
        return '';
    return exports.padNumber(year) + exports.padNumber(month) + exports.padNumber(day);
};
var regexCarNumber = /^[0-9][0-9][^a-zA-Z0-9][0-9][0-9][0-9][0-9]+$/;
/**
 * Decides whether or not an input string is a valid, Korean license plate number (차량번호).
 * @constructor
 * @param {string} carNumber - The license plate number in question.
 */
exports.isValidCarNumber = function (carNumber) { return regexCarNumber.test(carNumber) && carNumber.length === 7; };
/**
 * Converts a brand key (used in Firebase) to the appropriate, Korean brand name.
 * @constructor
 * @param {string} brandKey - The Firebase key for a particular brand.
 */
exports.brandKeyToName = function (brandKey) { return (brandKey in C.Common.Brand) ? C.Common.Brand[brandKey].name : brandKey; };
/**
 * Converts a transmission key (used in Firebase) to the appropriate, Korean name for that transmission type.
 * @constructor
 * @param {string} transmissionKey - The Firebase key for a particular transmission type.
 */
exports.transmissionKeyToName = function (transmissionKey) { return (transmissionKey in C.Common.Transmission) ? C.Common.Transmission[transmissionKey].name : transmissionKey; };
var transformNumericString = function (original) {
    if (!original)
        return '';
    var limit = original.length - 1;
    var reversedWithCommas = original.split('').reverse().map(function (val, idx, _) {
        var cond1 = (idx + 1) % 3 === 0;
        var cond2 = idx !== limit;
        return (cond1 && cond2) ? ',' + val : val;
    });
    return reversedWithCommas.reverse().join('');
};
/**
 * Format a number or numeric string to be divided every three digits by a comma.
 * @constructor
 * @param {(number|string)} original - The number or numeric string.
 */
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
/**
 * Format a number to be divided every three digits by a comma, and divided by Korean, monetary notation.
 * @constructor
 * @param {number} price - The raw price number (in Korean won).
 */
exports.transformPrice = function (price) {
    var hundredMillionsNum = Math.floor(price / 100000000);
    var hundredMillions = hundredMillionsNum ? formatPrice(hundredMillionsNum, '억') : '';
    var tenThousandsNum = Math.floor((price % 100000000) / 10000);
    var tenThousands = tenThousandsNum ? formatPrice(tenThousandsNum, '만') : '';
    var onesNum = Math.floor((price % 100000000) % 10000);
    var ones = onesNum || (hundredMillionsNum === 0 && tenThousandsNum === 0) ? formatPrice(onesNum, '원') : '';
    return (hundredMillions + tenThousands + ones).trim() + (((hundredMillionsNum || tenThousandsNum) && (onesNum === 0)) ? '원' : '');
};
var isIn = function (myArray, targetValue) { return myArray.indexOf(targetValue) >= 0; };
var statusesServiceMessageBuy = ['noti-max-bidding', 'noti-success', 'noti-failure', 'noti-warn1', 'noti-warn2', 'winning', 'successful', 'failure', 'unselected'];
var filterServiceMessageBuy = function (service) {
    if (!service)
        return false;
    var correctType = 'type' in service && service.type === 'used';
    var correctStatus = 'status' in service && isIn(statusesServiceMessageBuy, service.status);
    return correctType && correctStatus;
};
/**
 * Filter services by the 'buy' category.
 * @constructor
 * @param {Array.<Service>} services - List of service messages.
 */
exports.filterServicesMessageBuy = function (services) { return services.filter(filterServiceMessageBuy); };
var filterServiceBidSuccess = function (service) {
    if (!service)
        return false;
    var correctType = 'type' in service && service.type === 'used';
    var correctStatus = 'status' in service && service.status === 'successful-card';
    return correctType && correctStatus;
};
/**
 * Filter services by the 'successful bid' category.
 * @constructor
 * @param {Array.<Service>} services - List of service messages.
 */
exports.filterServicesBidSuccess = function (services) { return services.filter(filterServiceBidSuccess); };
var statusesServiceBidFailure = ['failure-card', 'unselected-card'];
var filterServiceBidFailure = function (service) {
    if (!service)
        return false;
    var correctType = 'type' in service && service.type === 'used';
    var correctStatus = 'status' in service && isIn(statusesServiceBidFailure, service.status);
    return correctType && correctStatus && 'data' in service;
};
/**
 * Filter services by the 'failed bid' category.
 * @constructor
 * @param {Array.<Service>} services - List of service messages.
 */
exports.filterServicesBidFailure = function (services) { return services.filter(filterServiceBidFailure); };
var statusesServiceMessageSell = ['review-accept', 'review-reject', 'booking-agent'];
var filterServiceMessageSell = function (service) {
    if (!service)
        return false;
    var correctType1 = 'type' in service && service.type === 'inquiry';
    var correctType2 = 'type' in service && service.type === 'used';
    var hasDataTag = 'data' in service && 'tag' in service.data;
    var correctStatus = 'status' in service && isIn(statusesServiceMessageSell, service.status);
    return (correctType1 && hasDataTag) || (correctType2 && correctStatus);
};
/**
 * Filter services by the 'sell' category.
 * @constructor
 * @param {Array.<Service>} services - List of service messages.
 */
exports.filterServicesMessageSell = function (services) { return services.filter(filterServiceMessageSell); };
var filterServiceMessageService = function (service) {
    if (!service)
        return false;
    var correctType1 = 'type' in service && service.type === 'inquiry';
    var correctType2 = 'type' in service && (service.type === 'notice' || service.type === 'slot');
    var noDataTag = !(service.data) || !(service.data.tag);
    return (correctType1 && noDataTag) || correctType2;
};
/**
 * Filter services by the 'misc' category.
 * @constructor
 * @param {Array.<Service>} services - List of service messages.
 */
exports.filterServicesMessageService = function (services) { return services.filter(filterServiceMessageService); };
/**
 * Format a date string into a dot separated version.
 * @constructor
 * @param {string} dateString - String representing the year, month, and day.
 */
exports.reformatDateString = function (dateString) {
    if (!dateString)
        return '';
    var year = dateString.slice(0, 4);
    var month = dateString.slice(4, 6);
    var day = dateString.slice(6, 8);
    return year + '.' + month + '.' + day;
};
/**
 * Obfuscate a phone number.
 * @constructor
 * @param {string} phone - String representing a phone number.
 */
exports.obfuscatePhone = function (phone) {
    if (!phone)
        return '';
    var cleanPhone = phone.replace(/[^0-9.]/g, '');
    if (cleanPhone.length !== 11)
        return '';
    return cleanPhone.slice(0, 3) + '-****-' + cleanPhone.slice(7, 11);
};
/**
 * Maps a service type to that service's name.
 * @constructor
 * @param {string} serviceType - Service type.
 */
exports.mapServiceType = function (serviceType) {
    if (!serviceType || !(serviceType in C.Common.ServiceTypes))
        return '';
    return C.Common.ServiceTypes[serviceType].name;
};
/**
 * Maps a customer service type to that service's name.
 * @constructor
 * @param {string} csType - Customer service type.
 */
exports.mapCsType = function (csType) {
    if (!csType || !(csType in C.Common.CSStatus))
        return '';
    return C.Common.CSStatus[csType].name;
};
var miscPipeHandlers = {
    date: function (value) { return exports.reformatDateString(value); },
    phone: function (value) { return exports.obfuscatePhone(value); },
    service: function (value) { return exports.mapServiceType(value); },
    cs: function (value) { return exports.mapCsType(value); }
};
/**
 * Maps some action to a string.
 * @constructor
 * @param {string} value - Action value.
 * @param {string} pipeType - Action type.
 */
exports.handleMiscPipe = function (value, pipeType) {
    if (pipeType in miscPipeHandlers)
        return miscPipeHandlers[pipeType](value);
    return '';
};
/**
 * Returns all the rows of the brand picker.
 * @constructor
 */
exports.brandRows = function () {
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
exports.defaultDeviceStatus = function () { return device_js_1.Device.DefaultStatus; };
/**
 * Ensures that the input is a numeric value
 * @constructor
 * @param {(number|string)} original - The original input value
 */
exports.ensureNumber = function (original) { return original ? +original || 0 : 0; };
var distanceMultiplier = { K: 1.609344, N: 0.8684 };
/**
 * Calculates the distance between two longitude/latitude points
 * @constructor
 * @param {number} latitude1 - Latitude of point A
 * @param {number} longitude1 - Longitude of point A
 * @param {number} latitude2 - Latitude of point B
 * @param {number} longitude2 - Longitude of point B
 * @param {string} unit - Desired unit of return value
 */
exports.calculateDistance = function (latitude1, longitude1, latitude2, longitude2, unit) {
    var coord = {
        lat1: Math.PI * latitude1 / 180.0,
        lat2: Math.PI * latitude2 / 180.0,
        theta: Math.PI * (longitude1 - longitude2) / 180.0
    };
    var distance = Math.sin(coord.lat1) * Math.sin(coord.lat2) + Math.cos(coord.lat1) * Math.cos(coord.lat2) * Math.cos(coord.theta);
    var distance2 = Math.acos(distance) * (180.0 / Math.PI) * 60.0 * 1.1515;
    var multiplier = unit in distanceMultiplier ? distanceMultiplier[unit] : 1.0;
    return distance2 * multiplier;
};
/**
 * Maps a color key to the associated border and background hex colors
 * @constructor
 * @param {string} colorKey - Key representing a color
 */
exports.colorKeyToHex = function (colorKey) {
    if (colorKey in color_js_1.Color.Hex)
        return color_js_1.Color.Hex[colorKey];
    return { backgroundColor: '', border: '' };
};
var initialMaxBid = { key: '', amount: -1, updatedAt: 0 };
var initialMinBid = { key: '', amount: 9007199254740991, updatedAt: 0 };
/**
 * Extracts the maximum bid from a collection of bids
 * @constructor
 * @param {} bidObject - A collection of bids
 */
exports.getMaxBid = function (bidsObject) {
    var bids = Object.keys(bidsObject).map(function (key) { return bidsObject[key]; });
    return bids.reduce(function (acc, cur) {
        return (acc.amount > cur.amount) ? acc : cur;
    }, initialMaxBid);
};
/**
 * Extracts the minimum bid from a collection of bids
 * @constructor
 * @param {} bidObject - A collection of bids
 */
exports.getMinBid = function (bidsObject) {
    var bids = Object.keys(bidsObject).map(function (key) { return bidsObject[key]; });
    return bids.reduce(function (acc, cur) {
        return (acc.amount < cur.amount) ? acc : cur;
    }, initialMinBid);
};
