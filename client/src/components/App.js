import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './common/Header';
import StartPage from './startpage/StartPage';
import OrderPage from './order/ManageOrderPage';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header/>
        <Switch>
          <Route exact path='/' component={StartPage}/>
          {/*<Route exact path='/orders' component={OrderPage} />*/}
          {/*<Route path='/orders/:id' component={OrderPage}/>*/}
        </Switch>
      </div>
    );
  }
}

export default App;
