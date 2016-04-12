import React from 'react';
import ProfileList from '../components/profile-list';
import ProfileForm from '../components/profile-form';
import PrimaryButton from '../components/primary-button';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      people: [{
          id: 0,
          name: 'Jane React',
          description: 'Coolest person alive (except Bertrand)'
        },
        {
          id: 1,
          name: 'Bertrand',
          description: 'Actually the coolest person alive'
        }
      ],
      selected: []
    };
  }

  render() {
    return (
      <div>
        <ProfileList people={ this.state.people }
          onDelete={ this.onDelete }
          onSelect={ this.onSelect }>
        </ProfileList>

        <PrimaryButton enabled={ !!this.state.selected.length }
          onClick={ this.clearSelected }
          className="btn btn-primary mt2">
          Clear Selected
        </PrimaryButton>

        <ProfileForm onSubmit={ this.addPerson } />
      </div>
    );
  }

  onDelete = (person) => {
    this.setState({
      people: this.state.people.filter(p => p.id != person.id),
      selected: this.state.selected,
    });
  }

  onSelect = (person) => {
    const alreadySelected = this.state.selected.includes(person.id);
    let selected = this.state.selected;
    if (alreadySelected) {
      selected = selected.filter(id => id != person.id);
    }
    else {
      selected.push(person.id);
    }

    this.setState({
      people: this.state.people,
      selected,
    });
  }

  clearSelected = () => {
    const selected = this.state.selected;
    this.setState({
      people: this.state.people.filter(p => !selected.includes(p.id)),
      selected: []
    });
  }

  addPerson = (person) => {
    const newPerson = {
      id: this.state.people.length,
      ...person
    };

    this.setState({
      people: [ ...this.state.people, newPerson ],
      selected: []
    });
  }
}
