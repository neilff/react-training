import React, { PropTypes } from 'react';

import Input from './Input';
import Label from './Label';
import Form from './Form';
import Button from './Button';

const ProfileForm = (props) => {
  const {
    nameValue,
    descriptionValue,
    onSubmit,
    onInputChange,
  } = props;

  return (
    <Form onSubmit={ onSubmit }>
      <Label key="name">Name</Label>
      <Input
        id="name"
        placeholder="Enter name..."
        value={ nameValue }
        onChange={ (val) => onInputChange('name', val) } />

      <Label key="description">Description</Label>
      <Input
        id="description"
        placeholder="Enter description..."
        value={ descriptionValue }
        onChange={ (val) => onInputChange('description', val) } />

      <Button status="success">Save</Button>
    </Form>
  );
};

ProfileForm.defaultName = 'ProfileForm';
ProfileForm.propTypes = {
  /**
   * The value for the name input
   */
  nameValue: PropTypes.string,
  /**
   * The value for the description input
   */
  descriptionValue: PropTypes.string,
  /**
   * The onChange handler for name input
   */
  onInputChange: PropTypes.func,
  /**
   * onSubmit handler for the form
   */
  onSubmit: PropTypes.func,
};
ProfileForm.defaultProps = {
  nameValue: '',
  descriptionValue: '',
  onInputChange: () => {},
  onSubmit: () => {},
};

export default ProfileForm;
