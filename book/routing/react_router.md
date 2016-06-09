# React Router

## Setup

```
npm install --save react-router
```

## Routing

[React router](https://github.com/reactjs/react-router/) is the root component rendered, which will render the app components as children based on the url path.

React router has configuration components: `Router`, `Route`, `IndexRoute`, and `Redirect`. Routing can be defined declarative using `Route` tags or via a config object passed in the `Router` component. `IndexRoute` nested within a `Route` specifies the default nested component to mount (i.e. Home in the example below)

The `route` accepts `onLeave` and `onEnter` hooks that can be used to complete tasks, such as authentication or data persistence, before the the route unmounts or mounts .

For maintaining browser history, bring in `browserHistory` or `hashHistory`. For cleaner urls, it is recommended to use `browserHistory`, however, this requires [server configuration for production](https://github.com/reactjs/react-router/blob/master/docs/guides/Histories.md).


```js
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
... // import components and React dependencies

// declarative definition
render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>      
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="/products" component={Products}>
        <Route path="products/:id" component={Product} />
      </Route>
    </Route>
  </Router>
), document.body)
```


```js

// configuration definition
const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'about', component: About },
    {
      component: Product,
      childRoutes: [{
        path: 'product/:id', component: Product
      }]
    }
  ]
}

render(<Router routes={routes} />, document.body)
```

## Params, Nested Components, Links

Any url (i.e. `product/:id`) parameters can be accessed from the rendered component via `this.props.params`. Use `this.props.children` to render nested components. A simple example is maintaining the navigation across the app where the pages are rendered below the navigation. 

The `link` component is to create links that use the router configuration (like `<a/>` tags). To determine the active link, you can pass `activeClassName` or `activeStyle` props to `link`.    
git st
```js

import { IndexLink, Link } from 'react-router'
... // import components and React dependencies

class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><IndexLink to="/" activeStyle={{ color: green }}>Home</Link></li>
          <li><Link to="/about" activeClassName="active">About</Link></li>
        </ul>
        {/* nested components, i.e. <Home/>, rendered below */}
        { this.props.children }
      </div>
    )
  }
}
```