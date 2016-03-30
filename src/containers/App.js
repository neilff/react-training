import React, { Component } from 'react';

import ProfileList from '../components/ProfileList';
import ProfileForm from '../components/ProfileForm';

let GUID = 2;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      list: [
        {
          id: 0,
          name: 'Steve',
          description: 'Steve is cool!',
        },
        {
          id: 1,
          name: 'Pam',
          description: 'Pam is super cool!',
        },
        {
          id: 2,
          name: 'Lisa',
          description: 'But Lisa is the coolest!',
        },
      ],
    };
  }

  onCreateProfile(name, description) {
    const { list } = this.state;

    this.setState({
      list: list.concat([{
        id: GUID++,
        name,
        description,
      }]),
    });
  }

  onInputChange(id, val) {
    this.setState({
      [id]: val,
    });
  }

  onRemoveItem(id) {
    const { list } = this.state;

    this.setState({
      list: list.filter(i => i.id !== id),
    });
  }

  render() {
    const { onRemoveItem, onInputChange, onCreateProfile } = this;
    const { list, name, description } = this.state;

    return (
      <div>
        <ProfileForm
          nameValue={ name }
          descriptionValue={ description }
          onSubmit={ onCreateProfile.bind(this, name, description) }
          onInputChange={ onInputChange.bind(this) } />

        <ProfileList
          list={ list }
          removeItem={ onRemoveItem.bind(this) } />
      </div>
    );
  }
}

App.propTypes = {};
App.defaultProps = {};

export default App;
