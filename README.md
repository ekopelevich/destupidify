# DeStupidify

1  [Synopsis](#synopsis)  
2  [Installation](#installation)  
3  [Examples](#examples)  
3.1  [Example 1](#example1)  
3.2  [Example 2](#example2)  
3.3  [Example 3](#example3)  
3.4  [Example 4](#example4)   
4  [Why DeStupidify](#whydestupidify)  
5  [Contributions](#contributions)  
6  [License](#license)  

<a name="synopsis"></a>

## 1 - Synopsis
Have you ever come across a really stupid function that returns "yes" or "no" instead of a useful value like true or false. Who does that?!?! In a recent contribution to [DeBunk](https://www.npmjs.com/package/debunk), a highly performant, state-of-the-art 3 and/or 17 verifier, _somebody_ created some functions that return really stupid values.

Luckily with _DeStupidify_, you don't have to worry about stupid return values anymore! Simply run your functions through this life-changing module and get significantly less stupid values to work with!

<a name="installation"></a>

## 2 - Installation

You can install _Destupidify_ with *npm*:

```bash
npm install destupidify
```

<a name="examples"></a>

## 3 - Examples

Here are some examples of how to use DeStupidify.

<a name="example1"></a>

### 3.1 - Example 1

```js
var destupidify = require('destupidify');
destupidify.destupidifyAffirmativeVal('YEAH'); //true
```

<a name="example2"></a>

### 3.2 - Example 2

```js
var destupidify = require('destupidify');
destupidify.destupidifyAffirmativeVal('I guess'); //true
```

<a name="example3"></a>

### 3.3 - Example 3

```js
var destupidify = require('destupidify');
destupidify.destupidifyNegativeVal('nope'); //false
```

<a name="example4"></a>

### 3.4 - Example 4

```js
var debunk = require('debunk');
var destupidify = require('destupidify');
destupidify.destupidifyNegativeVal(debunk.doesItEqualThree(1+9)); //false
```

## 4 - Why DeStupidify

Some functions return really stupid values.

<a name="contributions"></a>

## 6 - Contributions
_DeStupidify_ is open source. Contribute today at [http://www.github.com/ekopelevich/destupidify](http://www.github.com/ekopelevich/destupidify).

<a name="license"></a>

## 7 - License

ISC License

&copy;2016 Elana Kopelevich

<ekopelevich@gmail.com>
