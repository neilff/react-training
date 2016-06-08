#Reducers

Since reducers are pure functions, they can be tested like a JavaScript function (i.e. given an action, confirm the expected result)

##Example

```js
// ./reducers/counter.js
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants';
import { fromJS } from 'immutable';

const INITIAL_STATE = fromJS({
  count: 0,
});

function counterReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {

  case INCREMENT_COUNTER:
    return state.update('count', (value) => value + 1);

  case DECREMENT_COUNTER:
    return state.update('count', (value) => value - 1);

  default:
    return state;
  }
}

export default counterReducer;
```

```js
// ./reducers/counter.test.js
import { assert } from 'chai';
import counterReducer from './counter';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants';
import { Map } from 'immutable';

//Used for testing to fire actions against a reducer.
function fireAction(reducer, currentState, type, payload = {}) {
  return reducer(currentState, {
    type,
    payload,
  });
}

let state = counterReducer(undefined, {});

describe('counter reducer', () => {
  describe('inital state', () => {
    it('should be a Map', () => {
      assert.strictEqual(Map.isMap(state), true);
    });
  });

  describe('on INCREMENT_COUNTER', () => {
    it('should increment state.count', () => {
      const previousValue = state.get('count');
      state = fireAction(counterReducer, state, INCREMENT_COUNTER);
      assert.strictEqual(state.get('count'), previousValue + 1);
    });
  });

  describe('on DECREMENT_COUNTER', () => {
    it('should decrement state.count', () => {
      const previousValue = state.get('count');
      state = fireAction(counterReducer, state, DECREMENT_COUNTER);
      assert.strictEqual(state.get('count'), previousValue - 1);
    });
  });
});
```
