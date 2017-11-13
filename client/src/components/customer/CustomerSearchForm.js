import React from 'react';
import PropTypes from 'prop-types';
import { Button, Divider } from 'semantic-ui-react';
import SearchForm from '../common/SearchForm';

const CustomerSearchForm = ({addNewClick, searchField, searchValue, onFieldChange, onValueChange}) => {

  return ([
    <Button primary onClick={addNewClick}>Add New Customer</Button>,
    <Divider horizontal>OR</Divider>,
    <SearchForm
      searchFields={['Name', 'Phone']}
      onFieldChange={onFieldChange}
      onValueChange={onValueChange}
      searchField={searchField}
      searchValue={searchValue}/>
  ]);
};

CustomerSearchForm.propTypes = {
  addNewClick: PropTypes.func.isRequired,
  searchValue: PropTypes.any.isRequired,
  searchField: PropTypes.any.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  onValueChange: PropTypes.func.isRequired
};

export default CustomerSearchForm;
