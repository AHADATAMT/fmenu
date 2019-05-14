import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from './components/home/HomePage';
import Error from './components/error/Error';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './components/account/LoginPage';
import RegisterPage from './components/account/RegisterPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
