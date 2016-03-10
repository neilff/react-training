# Configuring Your Application to Use Redux

Once you have the reducers and actions created, it is time to configure your application to make use of redux. For this, we will need to:

* Create our application reducer
* Create and configure a store
* Subscribe to the store and update the view


### Create Our Application Reducer

```javascript
import { createStore, combineReducers } from 'redux';

export const INCREASE = '@@reactTraining/INCREASE';
export const DECREASE = '@@reactTraining/DECREASE';

const INITIAL_STATE = 0;

function counterReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case INCREASE:
      return state + 1;

    case DECREASE:
      return state - 1;

    default:
      return state;
  }
}

const rootReducer = combineReducers({ counter: counterReducer });
```

What `combineReducers` does, is allows us to break out our application into smaller reducers with a single area of concern. Each reducer that you pass into it, will become a property on the state. So when we are subscribing to our state changes, we will be passed in a state object with a property counter, and any other reducers you have provided.


### Create and Configure a Store

When creating a store in redux, this is where you provide the middleware you want to use, and the reducer that you want to have for your application.

```javascript
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

//...

const store = compose(
  applyMiddleware(
    thunk
  ),
)(rootReducer);
```

In this example, we are creating a store that is using the `thunk` middleware, which will allow our actions to return non-JSON objects such as promises. We could also use other middlewares such as `redux-logger`, which will provides some logging functionality to the application.


### Register the Provider With Angular 2

Now that we have created our state reducer, and created a store. We now need to subscribe to the store and update our view with the latest state.

```javascript
//...
store.subscribe(() => {
  ReactDOM.render(
    <div>
      <pre>{ JSON.stringify(store.getState(), null, 2) }</pre>
      <button onClick={ () => store.dispatch(increase()) }>Increase</button>
      <button onClick={ () => store.dispatch(decrease()) }>Decrease</button>
    </div>,
    document.getElementById('root')
  );
});

store.dispatch({ type: 'INIT' });
```


## Full Example

```
git checkout 04-redux
jspm install
npm run dev
```
