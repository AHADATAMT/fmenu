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
import DishCreate from './components/restaurant/DishCreatePage';
import CategoryCreate from './components/restaurant/CategoryCreatePage';
import OptionCreate from './components/restaurant/OptionCreatePage';
import Categories from './components/restaurant/CategoriesPage';
import Options from './components/restaurant/OptionsPage';

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
          <Route path="/restaurant/categories" component={Categories} exact />
          <Route path="/restaurant/options" component={Options} exact />
          <Route path="/restaurant/:id_restaurant" component={RestaurantDetail} exact />
          <Route path="/restaurant/:id_restaurant/edit" component={RestaurantEdit} exact />
          <Route path="/restaurant/:id_restaurant/add_dish" component={DishCreate} exact />
          <Route path="/restaurant/category/add" component={CategoryCreate} exact />
          <Route path="/restaurant/category/:id_category" component={RestaurantEdit} exact />
          <Route path="/restaurant/option/add" component={OptionCreate} exact />
          <Route path="/restaurant/option/:id_option" component={RestaurantEdit} exact />
          <Route path="/scan_menu" component={RestaurantEdit} exact />
          <Route path="/order/create/:id_restaurant" component={RestaurantEdit} exact />
          <Route path="/order/history" component={RestaurantEdit} exact />
          <Route path="/order/:id_order/confirm" component={RestaurantEdit} exact />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
