import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';

const AddItemSelect = ({ itemTypes, onChange, selectedItemType }) => {
  const options = itemTypes.map(option => {
    return ({
      key: option,
      text: option,
      value: option
    });
  });

  return ([
    <div style={{padding: "1rem", textAlign: "right"}}>
      <Dropdown
        placeholder='Select an item to add...'
        options={options}
        onChange={onChange}
        value={selectedItemType}
        selection
      />
    </div>
  ]);
};

AddItemSelect.propTypes = {
  itemTypes: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};

export default AddItemSelect;
