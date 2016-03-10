# Using Redux With Components

Instead of having to manage the store subscribtions manually we can use react-redux to connect our store to React components. To demonstrate how this works, let's take a look at the counter example.


## Counter Example

We start by building out a counter component. The component will be responsible for keeping track of how many times it was clicked, and displaying the amount.

```javascript
import React from 'react';
import { connect } from 'react-redux';
import { increase, decrease } from '../reducers/counter';


function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrease: () => dispatch(increase()),
    onDecrease: () => dispatch(decrease()),
  };
}

const Counter = ({ onIncrease, onDecrease, counter }) => {
  return (
    <div>
      <pre>{ counter }</pre>
      <button onClick={ onIncrease }>Increase</button>
      <button onClick={ onDecrease }>Decrease</button>
    </div>
  );
};

const App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);

ReactDOM.render(
  App,
  document.getElementById('root')
);
```

The template syntax should be familiar by now, displaying a counter value, and handling some click events. Lets take a look at the use of `connect`.

- `mapStateToProps`: connect will subscribe to Redux store updates. Any time it updates, mapStateToProps will be called. It's result must be a plain object. Which will then be passed to the component as props.

- `mapDispatchToProps`: Optional. The store's `dispatch` method is passed in as an argument here. You can then use that to wrap your actions or pass dispatch into them. The result of this function is also passed into the component as props. _Tip:_ you could use the [`bindActionCreators()`](http://gaearon.github.io/redux/docs/api/bindActionCreators.html) helper from Redux to simplify this.



## Full Example

```
git checkout 04a-redux
jspm install
npm run dev
```
