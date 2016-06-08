#Setup

To get started, we need to do a little bit of setup. Install the following dependencies.

- babel-eslint
- babel-preset-es2015
- babel-preset-react
- babel-preset-stage-0
- babel-register
- chai
- enzyme
- jsdom
- mock-localstorage
- react-addons-test-utils
- redux-mock-store
- sinon
- mocha
- nock

#Enzyme

[Enzyme](https://github.com/airbnb/enzyme) allows for rendering of React Components in three different ways: `render` (static component), `shallow` (isolated component), `mount` (full DOM). Most components can be `shallow` rendered and tested in isolation. Enzyme allows for searching of the rendered component for testing (i.e. `.find`).  

We will be using Mocha as the test runner. View the [API Documentation](http://airbnb.io/enzyme/) for further details.

#JSDOM

When using Enzyme to render component via `mount` (full DOM), you can use [jsdom](https://github.com/airbnb/enzyme/blob/master/docs/guides/jsdom.md) as a headless browser since `mount` requires a DOM environment.


