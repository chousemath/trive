### The Trive Javascript Library

> A collection of useful library functions, because I got tired of writing the same client-side logic across hybrid mobile and web, and multiple versions of both.

### Install Project Dependencies

```bash
$ npm i
```

### Running the Test Suite

> Because who doesn't love writing tests?

```bash
$ ./node_modules/mocha/bin/mocha
# or simply...
$ npm test
```

### Compile All the Things!

```bash
$ chmod +x compile.sh
$ ./compile.sh
# or simply...
$ npm run-script compile
```

### Documentation

* [assembleDateString](#assembledatestring)
* [brandKeyToName](#brandkeytoname)
* [filterServicesBidFailure](#filterservicesbidfailure)
* [filterServicesBidSuccess](#filterservicesbidsuccess)
* [filterServicesMessageBuy](#filterservicesmessagebuy)
* [filterServicesMessageSell](#filterservicesmessagesell)
* [filterServicesMessageService](#filterservicesmessageservice)
* [handleMiscPipe](#handlemiscpipe)
* [isValidCarNumber](#isvalidcarnumber)
* [mapCsType](#mapcstype)
* [mapServiceType](#mapservicetype)
* [reformatDateString](#reformatdatestring)
* [transformNumber](#transformnumber)
* [transformPrice](#transformprice)
* [transmissionKeyToName](#transmissionkeytoname)

#### **assembleDateString**

```javascript
// Arguments: year: number | string, month: number | string, day: number | string
// Return Value: string
assembleDateString(1990, 7, 7)
// '19900707'
assembleDateString('1990', '7', '7')
// '19900707'
```

#### **brandKeyToName**

```javascript
// Arguments: brandKey: string
// Return Value: string
brandKeyToName('kia')
// '기아'
```

#### **filterServicesBidFailure**

```javascript
// DOCUMENTATION IN PROGRESS
```

#### **filterServicesBidSuccess**

```javascript
// DOCUMENTATION IN PROGRESS
```

#### **filterServicesMessageBuy**

```javascript
// DOCUMENTATION IN PROGRESS
```

#### **filterServicesMessageSell**

```javascript
// DOCUMENTATION IN PROGRESS
```

#### **filterServicesMessageService**

```javascript
// DOCUMENTATION IN PROGRESS
```

#### **handleMiscPipe**

```javascript
// DOCUMENTATION IN PROGRESS
```

#### **isValidCarNumber**

```javascript
// Arguments: carNumber: string
// Return Value: boolean
isValidCarNumber('11헐1111')
// true
isValidCarNumber('1191111')
// false
```

#### **mapCsType**

```javascript
// DOCUMENTATION IN PROGRESS
```

#### **mapServiceType**

```javascript
// DOCUMENTATION IN PROGRESS
```

#### **reformatDateString**

```javascript
// DOCUMENTATION IN PROGRESS
```

#### **transformNumber**

```javascript
// Arguments: original: number | string
// Return Value: string
transformNumber('9999999')
// '9,999,999'
transformNumber(1000)
// '1,000'
```

#### **transformPrice**

```javascript
// Arguments: price: number
// Return Value: string
transformPrice(0)
// '0원'
transformPrice(990)
// '990원'
transformPrice(1120)
// '1,120원'
transformPrice(19120)
// '1만 9,120원'
transformPrice(129120)
// '12만 9,120원'
transformPrice(99129120)
// '9,912만 9,120원'
transformPrice(699129120)
// '6억 9,912만 9,120원'
transformPrice(55699129120)
// '556억 9,912만 9,120원'
```

#### **transmissionKeyToName**

```javascript
// Arguments: transmissionKey: string
// Return Value: string
transmissionKeyToName('automatic_')
// '자동'
```