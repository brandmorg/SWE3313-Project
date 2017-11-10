import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function menuReducer(state = initialState.menu, action) {
  if (action.type == types.LOAD_MENU_SUCCESS) {
    return action.menu;
  }

  return state;
}
