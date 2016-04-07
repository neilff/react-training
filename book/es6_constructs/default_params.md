# Default Params

## Old ES5 way to set default params

Approach 1: easy way.

```js
// This is what people normally do in ES5 to set default params
function link(height, color, callbackFn) {
  var height = height || 50;
  var color = color || 'red';
  var callbackFn = callbackFn || function() {};

  // function content...
}
```
It works well, but in the above implementation we didn't account for falsy values.
For example: `0, '', null, NaN, false` are [falsy values](https://dorey.github.io/JavaScript-Equality-Table).

Approach 2: Better way.
```js
// So there is a better way to do this, it checks param is actually undefined or not:
function link(height, color, callbackFn) {
  var height = typeof height !== 'undefined' ?  height : 50;
  var color = typeof color !== 'undefined' ?  color : 'red';
  var callbackFn = typeof callbackFn !== 'undefined' ?  callbackFn : function() {};

  // function content...
}
```

## ES6 way to write default params

Approach 3: ES6 way, it gets just so much better.
```js
function link(height = 50, color = 'red', callbackFn = () => {}) {
  // function content...
}

// or using ES6 const and let
const noop = () => {};
const link = (height = 50, color = 'red', callbackFn = noop) => {
  // function content...
};
```


Further reading:

* [https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/default_parameters](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/default_parameters)
* [http://tc39wiki.calculist.org/es6/default-parameter-values/](http://tc39wiki.calculist.org/es6/default-parameter-values/)
* [http://exploringjs.com/es6/ch_parameter-handling.html](http://exploringjs.com/es6/ch_parameter-handling.html)
* [https://dorey.github.io/JavaScript-Equality-Table](https://dorey.github.io/JavaScript-Equality-Table)
