import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'semantic-ui-react';
import DropSelect from './DropSelect';

const SearchForm = ({ searchFields, searchField, searchValue, onFieldChange, onValueChange}) => {
  return (
    <Form>
      <DropSelect
        label='Field to search'
        name='field'
        value={searchField}
        placeholder={'Select Side...'}
        values={searchFields}
        onChange={onFieldChange}
        width={6}/>
      <Form.Input
        label='Value to search for'
        value={searchValue}
        placeholder={'...'}
        onChange={onValueChange}
        width={6}/>
      <Button primary>Search</Button>
    </Form>
  );
};

SearchForm.propTypes = {
  searchFields: PropTypes.array.isRequired,
  searchField: PropTypes.string,
  searchValue: PropTypes.string,
  onFieldChange: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired
};

export default SearchForm;
