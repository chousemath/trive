"use strict";exports.__esModule=!0;var R=require("ramda"),mapIndexed=R.addIndex(R.map),joinBlank=R.join(""),C=require("./data/common.js"),device_js_1=require("./data/device.js");exports.padSingleDigitString=function(original){return 1===original.length?"0"+original:original},exports.padNumber=function(original){if(!original)return"";var type=typeof original;return"string"===type?exports.padSingleDigitString(original):"number"===type?exports.padSingleDigitString(""+original):""},exports.assembleDateString=function(year,month,day){return year&&month&&day?exports.padNumber(year)+exports.padNumber(month)+exports.padNumber(day):""};var regexCarNumber=/^[0-9][0-9][^a-zA-Z0-9][0-9][0-9][0-9][0-9]+$/;exports.isValidCarNumber=function(carNumber){return regexCarNumber.test(carNumber)&&7===carNumber.length},exports.brandKeyToName=function(brandKey){return brandKey in C.Common.Brand?C.Common.Brand[brandKey].name:brandKey},exports.transmissionKeyToName=function(transmissionKey){return transmissionKey in C.Common.Transmission?C.Common.Transmission[transmissionKey].name:transmissionKey};var transformNumericString=function(original){if(!original)return"";var limit=original.length-1,reversedWithCommas=mapIndexed(function(val,idx){return(idx+1)%3==0&&idx!==limit?","+val:val},R.reverse(original));return joinBlank(R.reverse(reversedWithCommas))};exports.transformNumber=function(original){if(null==original)return"";var type=typeof original;return"string"===type?transformNumericString(original):"number"===type?transformNumericString(original.toString()):""};var formatPrice=function(price,unit){return null==price||"number"!=typeof price?"":transformNumericString(price.toString())+unit+("원"===unit?"":" ")};exports.transformPrice=function(price){var hundredMillionsNum=Math.floor(price/1e8),hundredMillions=hundredMillionsNum?formatPrice(hundredMillionsNum,"억"):"",tenThousandsNum=Math.floor(price%1e8/1e4);return hundredMillions+(tenThousandsNum?formatPrice(tenThousandsNum,"만"):"")+formatPrice(Math.floor(price%1e8%1e4),"원")};var statusesServiceMessageBuy=["noti-max-bidding","noti-success","noti-failure","noti-warn1","noti-warn2","winning","successful","failure","unselected"],filterServiceMessageBuy=function(service){if(!service)return!1;var correctType="type"in service&&"used"===service.type,correctStatus="status"in service&&R.find(function(x){return x===service.status},statusesServiceMessageBuy);return correctType&&correctStatus};exports.filterServicesMessageBuy=function(services){return R.filter(filterServiceMessageBuy,services)};var filterServiceBidSuccess=function(service){if(!service)return!1;var correctType="type"in service&&"used"===service.type,correctStatus="status"in service&&"successful-card"===service.status;return correctType&&correctStatus};exports.filterServicesBidSuccess=function(services){return R.filter(filterServiceBidSuccess,services)};var statusesServiceBidFailure=["failure-card","unselected-card"],filterServiceBidFailure=function(service){if(!service)return!1;var correctType="type"in service&&"used"===service.type,correctStatus="status"in service&&R.find(function(x){return x===service.status},statusesServiceBidFailure);return correctType&&correctStatus&&"data"in service};exports.filterServicesBidFailure=function(services){return R.filter(filterServiceBidFailure,services)};var statusesServiceMessageSell=["review-accept","review-reject","booking-agent"],filterServiceMessageSell=function(service){if(!service)return!1;var correctType1="type"in service&&"inquiry"===service.type,correctType2="type"in service&&"used"===service.type,hasDataTag="data"in service&&"tag"in service.data,correctStatus="status"in service&&R.find(function(x){return x===service.status},statusesServiceMessageSell);return correctType1&&hasDataTag||correctType2&&correctStatus};exports.filterServicesMessageSell=function(services){return R.filter(filterServiceMessageSell,services)};var filterServiceMessageService=function(service){if(!service)return!1;var correctType1="type"in service&&"inquiry"===service.type,correctType2="type"in service&&("notice"===service.type||"slot"===service.type),noDataTag=!service.data||!service.data.tag;return correctType1&&noDataTag||correctType2};exports.filterServicesMessageService=function(services){return R.filter(filterServiceMessageService,services)},exports.reformatDateString=function(dateString){return dateString?dateString.slice(0,4)+"."+dateString.slice(4,6)+"."+dateString.slice(6,8):""},exports.obfuscatePhone=function(phone){if(!phone)return"";var cleanPhone=phone.replace(/[^0-9.]/g,"");return 11!==cleanPhone.length?"":cleanPhone.slice(0,3)+"-****-"+cleanPhone.slice(7,11)},exports.mapServiceType=function(serviceType){return serviceType&&serviceType in C.Common.ServiceTypes?C.Common.ServiceTypes[serviceType].name:""},exports.mapCsType=function(csType){return csType&&csType in C.Common.CSStatus?C.Common.CSStatus[csType].name:""};var miscPipeHandlers={date:function(value){return exports.reformatDateString(value)},phone:function(value){return exports.obfuscatePhone(value)},service:function(value){return exports.mapServiceType(value)},cs:function(value){return exports.mapCsType(value)}};exports.handleMiscPipe=function(value,pipeType){return pipeType in miscPipeHandlers?miscPipeHandlers[pipeType](value):""},exports.brandRows=function(){return[C.Common.BrandsFirst,C.Common.BrandsSecond,C.Common.BrandsThird,C.Common.BrandsFourth]},exports.defaultDeviceStatus=function(){return device_js_1.Device.DefaultStatus};