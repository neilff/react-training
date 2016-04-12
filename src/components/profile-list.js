import React from 'react';
import Card from './card';

export default function ProfileList({ people, onDelete, onSelect }) {
  return (
    <div>
      <h1>{ people.length } People</h1>
      { people.map(person => (
        <Card key={ person.id }
          person={ person }
          onDelete={ onDelete.bind(null, person) }
          onSelect={ onSelect.bind(null, person) }>
          <h2 className="mt0">
            { person.name }
          </h2>
          <p>{ person.description }</p>
        </Card>
      )) }
    </div>
  );
}

ProfileList.propTypes = {
  onDelete: React.PropTypes.func.isRequired,
  onSelect: React.PropTypes.func.isRequired,
  people: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number,
    name: React.PropTypes.string,
    description: React.PropTypes.string
  })).isRequired
}
