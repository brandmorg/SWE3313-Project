import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/App';

// Might make sense to put all the routes in here? not sure on that

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Route path="/" component={App}/>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root
