##Setup

```
npm install redux-form
```

##Reducer

Redux-form provides a reducer that manages the form's state. Add this to the `combineReducers`. **It is important to specify the state reducer key as `form` for redux-form to work**

```js
import {reducer as formReducer} from 'redux-form'

const reducer = combineReducers(Object.assign({}, reducers, {
  ...
  routing: routeReducer,
  form: formReducer,
}))
```

##Wrapper

Redux-form provides a `redux-form` wrapper to pass your component props as callbacks (`resetForm`, `handleSubmit`) and form data (`error`, `dirty`, `fields`, `submitting`). View the [full list of props](http://redux-form.com/5.2.5/#/api/props).

```js
export default reduxForm({
  form: 'formKey',          // form key must be unique
  fields: ['name', 'email'] // form fields
  ...
  validate                  // custom form validation function
})(Form)
```

##Form

The `fields` props contains the field values (i.e. name, email) and several event listeners for each field, so these must be passed into the input tag for the specific field via `{...name}`.

```js
import React, {Component} from 'react';
import {reduxForm} from 'redux-form';

const submit = (formValues, dispatch) => {
    ...
}

class Form extends Component {
  render() {
    const {fields: {name, email}, handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit(submit)}>
          <label>First Name</label>
          <input type="text" placeholder="Name" {...name}/>
          <label>Last Name</label>
          <input type="text" placeholder="Email" {...email}/>
          <button type="submit">Submit</button>
      </form>
    )
  }
}
```

For submission of form data, the `handleSubmit` prop is passed to the `onSubmit` or `onClick` and will complete any validations before calling `this.props.onSubmit(data)`. You can also pass a function into handleSubmit to be called, so `handleSubmit(submit)`.

Check out [Redux Form](http://redux-form.com/5.2.5/#/examples?_k=f0v1eh) for more form examples.

##Validation

The validate function will be called on each render cycle and will be passed the a form values object where the 
function must return an errors object with the specific error message for each field.

```js
const validate = fields => {
  const errors = {}
  if (!fields.name) {
    errors.name = 'Required'
  }
  if (!fields.email) {
    errors.email = 'Required'
  } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(fields.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}
```
The keys for the input field values and output errors objects must match the form `fields` specified (i.e. `name`, and `email`).

##Full Example

```js
import React, {Component} from 'react';

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email';
  }
  return errors;
}

class Form extends Component {
  render() {
    const {fields: {name, email}, handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit(submit)}>
          <label>First Name</label>
          <input type="text" placeholder="Name" {...name}/>
          <label>Last Name</label>
          <input type="text" placeholder="Email" {...email}/>
          <button type="submit">Submit</button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'formKey',          // form key must be unique
  fields: ['name', 'email'] // form fields
  ...
  validate                  // custom form validation function
})(Form)
```