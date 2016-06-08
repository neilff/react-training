# Redux and React Router

React Router and Redux work fine together, however, debugging features such as replaying actions with [Redux DevTools](https://github.com/gaearon/redux-devtools) will not work. 

Since React Router is controlling the components being rendered via the url, we need to store the history within the application state. We can use [react-router-redux](https://github.com/reactjs/react-router-redux) to do this.

## Setup

```
npm install --save react-router-redux
```

## Example

```js
import { createStore, combindReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
... // import components, reducers and React dependencies

const store = createStore(
    combineReducers({
        ...reducers,
        // add routerReducer on `routing` key
        routing: routerReducer
    })
)

// sync the history with the store
const history = syncHistoryWithStore(browserHistory, store);

render((
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>      
          <IndexRoute component={Home} />
          <Route path="about" component={About} />
          <Route path="/products" component={Products}>
            <Route path="products/:id" component={Product} />
          </Route>
        </Route>
      </Router>
    </Provider>
), document.body)
```