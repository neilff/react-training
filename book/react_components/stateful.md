# Stateful Component

- Internal State
- Component Lifecycle Hooks

```js
import React, { Component } from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { isLiked: false };
  }

  componentDidMount() {
    console.log('Stateful component successfully mounted.');
  }

  _toggleLikeState = () => {
    this.setState({
      isLiked: this.state.isLiked
    });
  }

  render() {
    const { name } = this.props;
    const { isLiked } = this.state;

    return (
      <div>
        <h3>{ name }</h3>
        <span>{ isLiked ? 👍 : 👎 }</span>
        <button onClick={ this._toggleLikeState }>
          Toggle Like
        </button>
      </div>
    );
  }
}


HelloMessage.propTypes = { name: React.PropTypes.string };
HelloMessage.defaultProps = { name: 'World' };

ReactDOM.render(<Profile name="Alice" />, mountNode);
```


#### Useful when...

- We need to have an internal state
- We need to perform an action when the component is mounted
