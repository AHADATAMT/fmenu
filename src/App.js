import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from './components/home/HomePage';
import Error from './components/error/Error';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './components/account/LoginPage';
import RegisterPage from './components/account/RegisterPage';
import Restaurant from './components/restaurant/RestaurantPage';
import RestaurantCreate from './components/restaurant/RestaurantCreatePage';
import RestaurantEdit from './components/restaurant/RestaurantEditPage';
import RestaurantDetail from './components/restaurant/RestaurantDetailPage';
import Test from './scanqr';

class App extends Component {

  render() {
    
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/restaurants" component={Restaurant} exact />
          <Route path="/restaurant/create" component={RestaurantCreate} exact />
          <Route path="/restaurant/:id" component={RestaurantDetail} exact />
          <Route path="/restaurant/:id/edit" component={RestaurantEdit} exact />
          <Route path="/test" component={Test} exact />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
