import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../FrontEnd/pages/Home.jsx'; // Import your Home component
import About from '../FrontEnd/pages/About.jsx'; // Im                                                                                                                                                                                                                                                                                           port your About component
import Contact from '../FrontEnd/pages/Contact.jsx'; // Import your Contact component
import Products from '../FrontEnd/Products/Products.jsx'; // Import your Products component
import Cart from './components/Cart.jsx'; // Import your Cart component
import Login from './components/Login.jsx'; // Import your Login component

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
