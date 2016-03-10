# Redux

Redux is an application state manager for JavaScript applications, and keeps with the core principals of flux-architecture by having a unidirectional data flow in your application.

How it differs from traditional Flux though, is that instead of multiple stores, you have one global application state. The state is calculated and returned in the reducer. The state management is held else where.

![](../../images/flux.jpg)


## Three Principles of Redux

### 1. Single Source of Truth

- Entire state is stored in an object tree
	- Easy to debug
	- Easy to inspect application
	- Easy to hydrate initial state

### 2. State Is Read Only

- Only way to mutate state is to emit an action
	- Actions describe what happened
	- Views, network callbacks, etc. will _never_ mutate state
	- Mutations are centralized and happen in strict order
	- No race conditions
	- Actions are objects, they can be logged, serialized, stored, and replayed

### 3. Changes Are Made With Pure Functions

- Reducers are responsible for modifying the state tree
	- Pure functions
	- Take in previous state, and action, and return new state
	- Can be split out into smaller reducers to manage specific parts of state tree


## Resources

* [Redux Documentation](http://redux.js.org/)
* [React-Redux - React Bindings for Redux](https://github.com/reactjs/react-redux)
* [React Redux Starter Kit](https://github.com/rangle/react-redux-starter)
* [Getting Started with Redux - Egghead.io](https://egghead.io/series/getting-started-with-redux)
