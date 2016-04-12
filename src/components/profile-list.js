import React from 'react';
import Card from './card';

export default class ProfileList extends React.Component {
  constructor() {
    super();

    this.state = {
      people: [{
          id: 1,
          name: 'Jane React',
          description: 'Coolest person alive (except Bertrand)'
        },
        {
          id: 2,
          name: 'Betrand',
          description: 'Actually the coolest person alive'
        }
      ],
      selected: []
    };
  }

  render() {
    const { people } = this.state;
    return (
      <div>
        <h1>{ people.length } People</h1>
        { people.map(person => (
          <Card key={ person.id }
            person={ person }
            onDelete={ this.onDelete }
            onSelect={ this.onSelect }>
            <h2 className="mt0">
              { person.name }
            </h2>
            <p>{ person.description }</p>
          </Card>
        )) }
        <button disabled={ !this.state.selected.length }
          onClick={ this.clearSelected }
          className="btn btn-primary mt2">
          Clear Selected
        </button>
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
}
