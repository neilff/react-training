# Destructuring

Destructuring is a way to quickly extract data out of an `{}` or `[]` without
having to write much code.

To [borrow from the MDN][mdnDest], destructuring can be used to turn the
following:

```js
let foo = ['one', 'two', 'three'];

let one   = foo[0];
let two   = foo[1];
let three = foo[2];
```

into

```js
let foo = ['one', 'two', 'three'];
let [one, two, three] = foo;
console.log(one); // 'one'
```

This is pretty interesting, but at first it might be hard to see the use case.
ES6 also supports Object destructuring, which might make uses more obvious:

```js
let myModule = {
  drawSquare: function drawSquare(length) { /* implementation */ },
  drawCircle: function drawCircle(radius) { /* implementation */ },
  drawText: function drawText(text) { /* implementation */ },
};

let {drawSquare, drawText} = myModule;

drawSquare(5);
drawText('hello');
```

Destructuring can also be used for passing objects into a function, allowing you to pull specific properties out of an object in a concise manner. It is also possible to assign default values to destructured arguments, which can be a useful pattern if passing in a configuration object.


```js
let jane = { firstName: 'Jane', lastName: 'Doe'};
let john = { firstName: 'John', lastName: 'Doe', middleName: 'Smith' }
function sayName({firstName, lastName, middleName = 'N/A'}) {
  console.log(`Hello ${firstName} ${middleName} ${lastName}`)  
}

sayName(jane) // -> Hello Jane N/A Doe
sayName(john) // -> Helo John Smith Doe
```

The spread operator allows an expression to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literals) or multiple variables  (for destructuring assignment) are expected.

For Arrays:
```js
const fruits = ['apple', 'banana'];
const veggies = ['cucumber', 'potato'];

const food = ['grapes', ...fruits, ...veggies];
// -> ["grapes", "apple", "banana", "cucumber", "potato"]

const [fav, ...others] = food;
console.log(fav); // -> "grapes"
console.log(others); // -> ["apple", "banana", "cucumber", "potato"]
```

For Objects:
```js
const member = {
  name: 'Ben',
  title: 'software developer',
  skills: ['javascrip:t', 'react', 'redux'],
};

const memberWithMetadata = {
  ...member,
  previousProjects: ['BlueSky', 'RedOcean'];
};

// behind the scenes:
const memberWithMetadata = Object.assign(member, {previousProjects: ['BlueSky', 'RedOcean']});

console.log(memberWithMetadata.name); // -> "Ben"
console.log(Object.keys(memberWithMetadata)); // -> ["apple", "banana", "cucumber", "potato"]
```

For function calls:
```js
const food = ['grapes', 'apple', 'banana', 'cucumber', 'potato'];
function eat() {
  console.log(...arguments);
}

eat(...food)
// -> grapes apple banana cucumber potato
```

## Further reading
* [MDN Destructuring](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
* [ES6 In Depth: Destructuring](https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/)
* [Destructuring Assignment in ECMAScript 6](http://fitzgeraldnick.com/weblog/50/)
* [Object.assign()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
