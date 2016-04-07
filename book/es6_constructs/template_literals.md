# Template Literals

In traditional JavaScript, text that is enclosed within matching `"` marks, or
`'` marks is considered a string.  Text within double or single quotes can only
be on one line.  There was also no way to insert data into these strings.  This
resulted in a lot of ugly concatenation code that looked like:

```js
var name = 'Sam';
var age = 42;

console.log('hello my name is ' + name + ' I am ' + age + ' years old');
//= 'hello my name is Sam I am 42 years old'
```

ES6 introduces a new type of string literal that is marked with back ticks (`).
These string literals _can_ include newlines, and there is a new mechanism for
inserting variables into strings:

```js
var name = 'Sam';
var age = 42;

console.log(`hello my name is ${name}, and I am ${age} years old`);
//= 'hello my name is Sam, and I am 42 years old'
```

The `${}` works fine with any kind of expression, including member expressions and method calls.

```js
var name = 'Sam';
var age = 42;

console.log(`hello my name is ${name.toUpperCase()}, and I am ${age / 2} years old`);
//= 'hello my name is SAM, and I am 21 years old'
```

There are all sorts of places where these kind of strings can come in handy,
and front end web development is one of them.

## Further reading
* [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
* [https://developers.google.com/web/updates/2015/01/ES6-Template-Strings?hl=en](https://developers.google.com/web/updates/2015/01/ES6-Template-Strings?hl=en)
* [https://ponyfoo.com/articles/es6-template-strings-in-depth](https://ponyfoo.com/articles/es6-template-strings-in-depth)
* [http://exploringjs.com/es6/ch_template-literals.html](http://exploringjs.com/es6/ch_template-literals.html)
