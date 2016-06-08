# Quick Review of Reducers and Pure Functions

One of the core concepts of Redux is the reducer. A reducer is simply a pure function that iterates over a collection of values, and returns a new single value at the end of it.

The simplest examples of a reducer, is a sum function:

```javascript
const x = [1,2,3].reduce((value,state) => value + state, 0)
// x == 6
```
