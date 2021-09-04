import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div className="App">
      <h1 className="logo-heading">Bi Shop</h1>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
