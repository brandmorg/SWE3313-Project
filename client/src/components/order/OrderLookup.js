import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Segment } from 'semantic-ui-react';
import SearchForm from '../common/SearchForm';

class OrderLookup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchField: '',
      searchValue: '',
      searchFields: [
        'Order Number',
        'Customer Name',
        'Customer Phone'
      ],
      searchResults: []
    }
  }

  updateSearchField = (e, {value}) => {
    return this.setState({searchField: value});
  };

  updateSearchValue = (e, {value}) => {
    return this.setState({searchValue: value});
  };

  render() {
    const { searchFields, searchField, searchValue } = this.state;

    return (
      <Segment vertical raised style={{padding: '4rem'}} textAlign='left'>
        <SearchForm
          searchFields={searchFields}
          searchField={searchField}
          searchValue={searchValue}
          onFieldChange={this.updateSearchField}
          onValueChange={this.updateSearchValue}
          />
      </Segment>
    );
  }
}

OrderLookup.propTypes = {
  orders: PropTypes.array
};

function mapStateToProps(state, ownProps) {

  return {
    orders: state.orders
  };

}

export default connect(mapStateToProps)(OrderLookup);
