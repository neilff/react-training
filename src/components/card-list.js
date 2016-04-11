import React from 'react';
import Card from './Card';

export default class CardList extends React.Component {
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
      ]
    };
  }

  render() {
    const { people } = this.state;
    return (
      <div>
        <h1>{ people.length } People</h1>
        { people.map(person => (
          <Card key={ person.id }>
            <h2>{ person.name }</h2>
            <p>{ person.description }</p>
          </Card>
        )) }
      </div>
    );
  }
}
