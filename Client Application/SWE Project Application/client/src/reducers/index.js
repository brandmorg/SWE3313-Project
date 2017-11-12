import {combineReducers} from 'redux';
import customers from './customerReducer';
import menu from './menuReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  customers,
  menu,
  ajaxCallsInProgress
});

export default rootReducer;
