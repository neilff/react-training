import React from 'react';

export default function Input({ children }) {
  return (
    <label className="block bold">
      { children }
    </label>
  );
}

Input.propTypes = {
  children: React.PropTypes.node.isRequired,
};
