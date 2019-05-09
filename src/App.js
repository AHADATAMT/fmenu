import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from './components/home/Homepage';
import Error from './components/error/Error';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Homepage} exact />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
