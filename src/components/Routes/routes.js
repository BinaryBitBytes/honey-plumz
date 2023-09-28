import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home'; // Import your Home component
import About from './components/About'; // Import your About component
import Contact from './components/Contact'; // Import your Contact component
import Products from './components/Products'; // Import your Products component
import Cart from './components/Cart'; // Import your Cart component
import Login from './components/Login'; // Import your Login component

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/products" component={Products} />
      <Route path="/cart" component={Cart} />
      <Route path="/login" component={Login} />
    </Switch>
  );
}

export default Routes;
