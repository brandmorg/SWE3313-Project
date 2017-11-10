import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as orderActions from '../../actions/orderActions';
// import CourseForm from './CourseForm';
// import { authorsFormattedForDropdown } from '../../selectors/selectors';
// import toastr from 'toastr';

class ManageOrderPage extends React.Component {

}

function mapStateToProps(state, ownProps) {
  const orderId = ownProps.params.id;

}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(orderActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageOrderPage);
