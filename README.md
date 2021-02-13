<h1 align="center"> TinyScripts </h1>

<h2 align="center"> A tiny set of scripts designed for quick access. </h2>
<br>
<div align="center">

[![npm](https://img.shields.io/npm/v/tinyscripts)](https://www.npmjs.com/package/tinyscripts)
[![npm size](https://img.shields.io/bundlephobia/min/tinyscripts)](https://www.npmjs.com/package/tinyscripts)
[![license](https://img.shields.io/npm/l/tinyscripts)]((https://www.npmjs.com/package/tinyscripts))</div>

## Install
```
npm i tinyscripts
```
<br>

## Usage
```js
const tinyscripts = require('tinyscripts')

tinyscripts.base64('encode', 'Hello World');
//=> SGVsbG8gV29ybGQ=
var decoded = tinyscripts.base64('decode', encoded);
//=> Hello World

tinyscripts.base64('encode', 43453)
//=> TypeError: text must be in string format
//   at tinyscripts (<anonymous>:4:38)
//   at <anonymous>:1:1
```