import React, { PropTypes } from 'react';

const Input = ({ key, type, onChange, value, placeholder }) => {
  return (
    <input
      id={ key }
      className="block field mb2"
      style={{ minWidth: '100%' }}
      type={ type }
      onChange={ (e) => {
        console.log('e.target.value :: ', e.target.value);
        console.log('current value :: ', value);
        onChange(e.target.value);
      } }
      value={ value }
      placeholder={ placeholder } />
  );
};

Input.defaultName = 'Input';
Input.propTypes = {
  /**
   * The property key the input will pass to the onChange function
   */
  key: PropTypes.string,
  /**
   * The type of input
   */
  type: PropTypes.oneOf(['text', 'password']),
  /**
   * The onChange function for the input
   */
  onChange: PropTypes.func,
  /**
   * The current value of the input
   */
  value: PropTypes.string,
  /**
   * The placeholder value for the input
   */
  placeholder: PropTypes.string,
};
Input.defaultProps = {
  type: 'text',
  onChange: () => {},
  value: '',
  placeholder: '',
};

export default Input;
