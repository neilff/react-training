import React, { PropTypes } from 'react';
import ProfileImage from './profile-image';
import PrimaryButton from './primary-button';

const Card = ({ children, person, onDelete, onSelect }) => {
  return (
    <div className="flex flex-center border p1">
      <ProfileImage url="http://d2v52k3cl9vedd.cloudfront.net/assets/images/placeholder-square.svg"/>
      <div className="flex-auto">
        { children }
      </div>
      <input type="checkbox"
        onClick={ onSelect.bind(null, person) }/>
      <PrimaryButton onClick={ onDelete.bind(null, person) }
        className="btn btn-primary">
        Delete
      </PrimaryButton>
    </div>
  );
};

Card.defaultName = 'Card';
Card.propTypes = {
  children: React.PropTypes.node,
  onDelete: React.PropTypes.func,
  onSelect: React.PropTypes.func,
};
Card.defaultProps = {};

export default Card;
