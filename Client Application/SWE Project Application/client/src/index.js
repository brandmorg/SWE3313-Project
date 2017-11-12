import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import Root from './Root';
// import createBrowserHistory from 'history/createBrowserHistory';
import { loadCustomers } from "./actions/customerActions";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bulma/css/bulma.css';
import './index.css';

const store = configureStore();
store.dispatch(loadCustomers());



render(
  <Root store={store} />,
  document.getElementById('root')
);
