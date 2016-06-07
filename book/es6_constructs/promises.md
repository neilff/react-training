# Promises

Promises are built-in ES6.

```js
const wait (ms) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
}

wait(1000).then(() => console.log('tick'));
```

## Promises vs Callbacks

For HTTP Requests, our existing solution is to use callbacks:

```javascript
request(url, (error, response) => {
  // handle success or error.
});
doSomethingElse();
```

A few problems exist with callbacks. One is known as ["Callback Hell"](http://callbackhell.com/). A larger problem is decomposition.

The callback pattern requires us to specify the task and the callback at the same time. In contrast, promises allow us to
specify and dispatch the request in one place:

```javascript
promise = fetch(url); //fetch is a replacement for XMLHttpRequest
```
and then to add the callback later, and in a different place:

```javascript
promise.then(response => {
  // handle the response.
});
```

This also allows us to attach multiple handlers to the same task:

```javascript
promise.then(response => {
  // handle the response.
});
promise.then(response => {
  // do something else with the response.
});
```

## More on Promises

`.then()`
always returns a promise. Always.

```javascript
p1 = getDataAsync(query);

p2 = p1.then(
  results => transformData(results));
```

`p2` is now a promise regardless of what `transformData()` returned. Even if
something fails.

If the callback function returns a value, the promise resolves to that value:

```javascript
p2 = p1.then(results => 1);
```

`p2` will resolve to “1”.

If the callback function returns a promise, the promise resolves to a
functionally equivalent promise:

```javascript
p2 = p1.then(results => {
  let newPromise = getSomePromise();
  return newPromise;
});
```

`p2` is now functionally equivalent to newPromise.

```javascript
p2 = p1.then(
  results => throw Error('Oops'));

p2.then(results => {
  // You will be wondering why this is never
  // called.
});
```

`p2` is still a promise, but now it will be rejected with the thrown error.

Why won't the second callback ever be called?

### Catching Rejections

The function passed to `then` takes a second argument, i.e. `error`, which represents error catching within the promise chain.

```javascript
fetch('http://ngcourse.herokuapp.com/api/v1/tasks')
  .then(response => response.data)
  .then(tasks => filterTasksAsynchronously(tasks))
  .then(tasks => {
    $log.info(tasks);
    vm.tasks = tasks;
  })
  .then(
    null, 
    error => log.error(error)
  );
```

Note that one catch at the end is often enough.



