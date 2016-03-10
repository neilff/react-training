# Redux and Component Architecture

In the previous example, our `counter` component is a smart component. It knows about redux, the structure of the state, and the actions it needs to call. While in theory you can drop this component into any area of your application and have it just work. But, it will be tightly bound to that specific slice of state, and those specific actions. For example, what if we wanted to have multiple counters tracking different things on the page? For example, counting the number of red clicks vs blue clicks.


To help make components more generic and reusable, it is worth considering smart component, or container components - and dumb components.


<table>
  <thead>
    <tr>
      <th></th>
      <th scope="col" style="text-align:left">Container Components</th>
      <th scope="col" style="text-align:left">Presentational Components</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" style="text-align:right">Location</th>
      <td>Top level, route handlers</td>
      <td>Middle and leaf components</td>
    </tr>
    <tr>
      <th scope="row" style="text-align:right">Aware of Redux</th>
      <td>Yes</th>
      <td>No</th>
    </tr>
    <tr>
      <th scope="row" style="text-align:right">To read data</th>
      <td>Subscribe to Redux state</td>
      <td>Read data from props</td>
    </tr>
    <tr>
      <th scope="row" style="text-align:right">To change data</th>
      <td>Dispatch Redux actions</td>
      <td>Invoke callbacks from props</td>
    </tr>
  </tbody>
</table>

[Redux Docs](http://redux.js.org/docs/basics/UsageWithReact.html)
