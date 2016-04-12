import React from 'react';
import PrimaryButton from './primary-button';
import Label from './label';
import Input from './input';

export default class ProfileForm extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="m2 border p2">
        <Label>Name</Label>
        <Input onChange={ this.updateName } />

        <Label>Description</Label>
        <Input onChange={ this.updateDescription } />

        <PrimaryButton onClick={ this.props.onSubmit.bind(this, this.state) }
          enabled={ !!this.state.name && !!this.state.description }>
          Add
        </PrimaryButton>
      </div>
    );
  }

  updateName = (event) => {
    this.setState({
      name: event.target.value,
      description: this.state.description
    });
  }

  updateDescription = (event) => {
    this.setState({
      name: this.state.name,
      description: event.target.value
    });
  }
}
