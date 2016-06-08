#Components

Enzyme is used to output React components and manipulate or transverse them. Using the `chai` assertion library, we can make assertions on the component.

## Example


```js
// ./counter/index.js
import React from 'react';
import Button from '../button';

function Counter({ counter, increment, decrement, ...props }) {
  return (
    <div className="flex" data-testid={ props.testid }>
      <Button data-ref="decrementButton" className="bg-black col-2"
        onClick={ decrement }>
        -
      </Button>

      <div data-ref="result" className="flex-auto center h1">
        { counter }
      </div>

      <Button data-ref="incrementButton" className="col-2"
        onClick={ increment }>
        +
      </Button>
    </div>
  );
}

Counter.propTypes = {
  counter: React.PropTypes.number,
  increment: React.PropTypes.func,
  decrement: React.PropTypes.func,
  testid: React.PropTypes.func,
};

export default Counter;
```

```js
// ./counter/index.test.js
import { assert } from 'chai';
import React from 'react';
import { shallow, render } from 'enzyme';
import sinon from 'sinon';
import Counter from './index';

describe('counter', () => {
  it('should create a counter', () => {
    const wrapper = render(<Counter counter={5} />);

    assert.isOk(wrapper.children().length,
      'Counter not found');
    assert.strictEqual(wrapper.find('[data-ref="result"]').text(), '5',
      'Counter not showing its value');
  });

  it('should respond to click events', () => {
    const onIncrement = sinon.spy();
    const onDecrement = sinon.spy();
    const wrapper = shallow(
      <Counter increment={onIncrement} decrement={onDecrement} />
    );

    wrapper.find('[data-ref="incrementButton"]').simulate('click');
    assert.isTrue(onIncrement.calledOnce, 'increment not called');

    wrapper.find('[data-ref="decrementButton"]').simulate('click');
    assert.isTrue(onIncrement.calledOnce, 'decrement not called');
  });
});
```