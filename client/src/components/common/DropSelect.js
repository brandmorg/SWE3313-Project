import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

const DropSelect = ({label, name, values, placeholder, value, onChange}) => {
  let options = [];

  options = values.map(value => {
    return ({
      key: value,
      text: value.toString(),
      value: value
    });
  });

  return (
    <Form.Select label={label} name={name} options={options} placeholder={placeholder} value={value} onChange={onChange}/>
  );
};

DropSelect.propTypes = {
  label: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
  placeholder: PropTypes.string
};

export default DropSelect;
