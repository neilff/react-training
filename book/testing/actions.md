# Actions

Simple actions can be tested like reducers, as pure functions (i.e. given params, confirm the expected object/response). The [Redux gitbook](http://redux.js.org/docs/recipes/WritingTests.html#async-action-creators) contains more examples, including handling tricky async actions.

##Example

```js

// ./actions/counter.js
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants';

export function increment() {
  return {
    type: INCREMENT_COUNTER,
  };
}

...
```

```js

// ./actions/counter.test.js

import { assert } from 'chai';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants';
import { increment } from '../actions/counter';

describe('Counter Actions', () => {
    describe('increment', () => {
        let obj;
        beforeEach(() => {
            obj = increment();
        });
        
        it('should return an object', () => {
            assert.isObject(obj)
        });
        
        it('should return an object with correct type property', () => {
            assert.deepEqual(obj, {type: INCREMENT_COUNTER});
        });
    })
});
```