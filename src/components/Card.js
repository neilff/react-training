import React, { PropTypes } from 'react';
import ProfileImage from './profile-image';

const Card = ({ children }) => {
  return (
    <div className="flex flex-center border p1">
      <ProfileImage url="http://d2v52k3cl9vedd.cloudfront.net/assets/images/placeholder-square.svg"/>
      <div className="grow">
        { children }
      </div>
    </div>
  );
};

Card.defaultName = 'Card';
Card.propTypes = {
  children: React.PropTypes.node
};
Card.defaultProps = {};

export default Card;
