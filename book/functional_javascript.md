# Functional JavaScript

![](../images/functional.jpg)

> Functional programming approaches computer programs as consisting of data transformations, much like functions in math. Your program is a collection of functions. Each function takes some inputs and produces some outputs. Simple functions are used as building blocks for more complex ones. This is one of the earliest approaches to programming, dating back to the 1960s and based on math developed in the 1930s.

JavaScript allows for different styles of programming: object oriented, imperative, and functional.

React brings these functional programming concepts to the UI. It provides abstractions such as components which are (mostly) pure functions. Given some state (as props) they return some DOM. This allows us to get away from imperatively touching the DOM.

The functional style is more flexible, and makes testing and debugging easier. Two core concepts of functional programming are immutability and stateless, both of which are covered in later sections.

## Functional Concepts

### Pure Functions (Slice vs. Splice) 

> A pure function is a function where the return value is only determined by its input values, without observable side effects.

For example, `slice` and `splice` complete the same functionality, however, `splice` has the undesired impact of mutating the origin input.

```js
let ltrs = ["a", "b", "c"]

ltrs.slice(1) // returns ["b", "c"], where ltrs is still ["a", "b", "c"]
 
ltrs.splice(1) // returns ["b", "c"], where ltrs is now ["a"]
```

### Map, Filter, Reduce

Array helper methods `map`, `filter`, and `reduce` are examples of functional programming, which take in functions and do not mutate the original array.

```js
var list = [1, 2, 3, 4, 5];

var double = list.map(function (x) {
  return x * 2;
});

var gt3 = list.filter(function (x) {
  return x > 3;
});

var sum = list.reduce((result, x) => {
  console.log(`result in: ${ result }, x: ${ x }, result out: ${ result + x }`);
  return result + x;
}, 0);
```

### Currying

> Currying is the technique of translating the evaluation of a function that takes multiple arguments (or a tuple of arguments) into evaluating a sequence of functions, each with a single argument.

```js
function add (a, b, c) {
  return a + b + c;
}

add(1, 2, 3); // returns 6
 
// Currying add()
function add (a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    }
  }
}

add1 = add(1); // returns a function where a = 1
add2 = add1(2); // returns a function where a = 1, b = 2
add3 = add2(3); // returns 6

// Below is a short form of currying using ES6 array functions
add => a => b => c => a + b + c
 
result = add(1)(2)(3); // returns 6
```

## Resources
This section covers the basics, check out this [gitbook](https://drboolean.gitbooks.io/mostly-adequate-guide/content/) for an in-depth on Functional Programming