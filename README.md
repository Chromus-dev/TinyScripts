<h1 align="center"><a href="https://www.npmjs.com/package/tinyscripts" target="_blank"> TinyScripts </a></h1>

<h2 align="center"> A tiny set of scripts designed for quick access. </h2>
<br>
<div align="center">

[![npm](https://img.shields.io/npm/v/tinyscripts)](https://www.npmjs.com/package/tinyscripts)
[![npm size](https://img.shields.io/bundlephobia/min/tinyscripts)](https://www.npmjs.com/package/tinyscripts)
</div>

## Install
```
npm i tinyscripts
```
<br>

## Usage

### base64
```js
const { base64 } = require('tinyscripts');

<<<<<<< HEAD
var encoded = base64.encode('Hello World');
=======
var encoded = tinyscripts.base64('encode', 'Hello World');
>>>>>>> 7e6363afa54fb318cf029311753799d1c37813f3
//=> SGVsbG8gV29ybGQ=
base64.decode(encoded);
//=> Hello World
base64.validate(encoded)
//=> true
```
- **base64.encode(str)** - Encodes "str" with base64
- **base64.decode(base64)** - Decodes "str" from base64
- **base64.validate(base64)** - Validates "str" to see if it is valid base64

### camelCase
```js
const { camelCase } = require('tinyscripts');

camelCase('make this camel case')
//=> makeThisCamelCase
```
- **camelCase(str)** - Turns "str" into camel case format

### charMap & translate
```js
const { charMap, translate } = require('tinyscripts');

var map = new CharMap('hwo', 'uey');
var translation = translate('Hello World', map);
//=> Uelly Eyrld
```
- **charMap(from, to)** - Creates a new charMap that can be used with translate() [(More Info)](#charMap)
- **translate(str, map)** - Translates a string based on a charMap. This is similar to the [python translate()](https://www.w3schools.com/python/ref_string_translate.asp) function.

### isUpperCase & isLowerCase
```js
const { isUpperCase, isLowerCase } = require('tinyscripts');

isUpperCase('C')
//=> true
isUpperCase('c')
//=> false
isLowerCase('c')
//=> true
```
- **isUpperCase(str)** - Returns true or false depending on if the string is uppercase.
- **isLowerCase(str)** - Returns true or false depending on if the string is lowercase.

<<<<<<< HEAD
## More Info
### charMap
charMaps can be used with translate() to replace a charactar in a string with one of another. This is similar to the [python translate()](https://www.w3schools.com/python/ref_string_translate.asp) function. 
=======
tinyscripts.base64('encode', 43453)
//=> TypeError: text must be in string format
//   at tinyscripts (<anonymous>:4:38)
//   at <anonymous>:1:1
```
>>>>>>> 7e6363afa54fb318cf029311753799d1c37813f3
