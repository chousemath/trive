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


#### **assembleDateString()**

```bash
Arguments: year: number | string, month: number | string, day: number | string
Return Value: string
```

```javascript
// Example:
assembleDateString(1990, 7, 7)
// '19900707'
```