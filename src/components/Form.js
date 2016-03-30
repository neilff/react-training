import React, { PropTypes } from 'react';

const Form = ({ onSubmit, children }) => {
  return (
    <form
      className="p2 mb2 border"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}>
      { children }
    </form>
  );
};

Form.defaultName = 'Form';
Form.propTypes = {
  /**
   * onSubmit handler for the form
   */
  onSubmit: PropTypes.func,
};
Form.defaultProps = {
  onSubmit: () => {},
};

export default Form;
