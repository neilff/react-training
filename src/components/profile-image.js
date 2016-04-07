import React from 'react';

const styles = {
  borderRadius: '50%',
  width: '100px'
};

export default function ProfileImage({ url }) {
  return (
    <img className="p2" style={ styles } src={ url }/>
  );
};
