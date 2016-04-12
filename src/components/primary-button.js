import React from 'react';

export default function PrimaryButton({ onClick, children = null, enabled = true }) {
  return (
    <button
      className="btn btn-primary m1"
      onClick={ onClick }
      disabled={ !enabled }>
      { children }
    </button>
  )
}

PrimaryButton.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  children: React.PropTypes.node,
  enabled: React.PropTypes.bool
};

PrimaryButton.defaultProps = {
  enabled: true,
  children: null
};
