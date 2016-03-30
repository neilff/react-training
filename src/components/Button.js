import React, { PropTypes } from 'react';

const buttonStatus = {
  success: 'bg-green',
  warning: 'bg-orange',
  primary: 'bg-blue',
  danger: 'bg-red',
};

const Button = ({ type, onClick, status, children }) => {
  return (
    <button
      type={ type }
      onClick={ onClick }
      className={ `btn btn-primary white ${ buttonStatus[status] }` }>
      { children }
    </button>
  );
};

Button.defaultName = 'Button';
Button.propTypes = {
  /**
   * The content of the button
   */
  children: PropTypes.node,
  /**
   * The type of button
   */
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  /**
   * The status of type of the button
   */
  status: PropTypes.oneOf(['success', 'warning', 'primary', 'danger']),
  /**
   * The onClick function of the button
   */
  onClick: PropTypes.func,
};
Button.defaultProps = {
  type: 'submit',
  onClick: () => {},
  status: 'primary',
};

export default Button;
