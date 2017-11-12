import * as types from './actionTypes';
import customerApi from '../api/mockCustomerApi';
import {ajaxCallError, beginAjaxCall} from './ajaxStatusActions';

export function loadCustomersSuccess(customers) {
  return { type: types.LOAD_CUSTOMERS_SUCCESS, customers };
}

export function loadCustomers() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return customerApi.getAllCustomers().then(customers => {
      dispatch(loadCustomersSuccess(customers));
    }).catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}
