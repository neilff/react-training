import React, { PropTypes, Component } from 'react';

/**
 * This is an example of a stateful component. These are typically used when
 * we need a component to be able to store internal state, or when we required
 * one of the component lifecycle hooks.
 *
 * Stateful components are typically used as container components, or when
 * internal state is required for a rendering purpose. For example, a D3 graph
 * will require internal state, as you likely don't want to re-render the
 * graph every time new data is received.
 */
class StatefulComponent extends Component {
  constructor(props) {
    super();

    this.state = {
      isLiked: props.liked,
    };
  }

  /**
   * This is an example of a component lifecycle hook. These are commonly used
   * to inform Redux to make an ajax request once the component is ready to
   * receive data.
   *
   * For more information on the available lifecycle hooks, see:
   * https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods
   */
  componentDidMount() {
    console.info('StatefulComponent successfully mounted.');
  }

  /**
   * Stateful components can have internal methods which can access the
   * internal state of the component, its props, or even the DOM.
   *
   * For more information on DOM access from a component, see:
   * https://facebook.github.io/react/docs/working-with-the-browser.html#refs-and-finddomnode
   */
  _toggleLikeState() {
    this.setState({
      isLiked: !this.state.isLiked,
    });
  }

  render() {
    return (
      <div className="p2 mb4 border">
        <pre>{ JSON.stringify(this.state, null, 2) }</pre>

        <div className="p2 mb2 h1">
          { this.state.isLiked ? '👍' : '👎' }
        </div>

        <button
          className="btn btn-primary"
          onClick={ this._toggleLikeState.bind(this) }>
          Toggle Like Status
        </button>
      </div>
    );
  }
}

/**
 * We use proptypes to define our interface. These are important, we should
 * always build our components so that they accept the minimal about of data
 * required to render.
 *
 * For more information on PropTypes validation, see:
 * https://facebook.github.io/react/docs/reusable-components.html
 */
StatefulComponent.propTypes = {
  /**
   * The initial state of the liked value
   */
  liked: PropTypes.bool,
};
StatefulComponent.defaultProps = {
  liked: false,
};

export default StatefulComponent;
