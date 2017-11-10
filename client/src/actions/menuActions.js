import * as types from './actionTypes';
import menuApi from '../api/mockMenuApi';
import {ajaxCallError, beginAjaxCall} from "./ajaxStatusActions";

export function loadMenuSuccess(menu) {
  return { type: types.LOAD_MENU_SUCCESS, menu };
}

export function loadMenu() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return menuApi.getMenu().then(menu => {
      dispatch(loadMenuSuccess(menu));
    }).catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    });
  };
}
