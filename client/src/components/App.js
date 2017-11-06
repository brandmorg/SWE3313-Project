import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './header/Header';
import OrderPage from './orderpage/OrderPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route path='/orders' component={OrderPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
