import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from '../FrontEnd/pages/Home.jsx'; // Import your Home component
import About from '../FrontEnd/pages/about.jsx'; // Im                                                                                                                                                                                                                                                                                           port your About component
import Contact from '../FrontEnd/pages/contact.jsx'; // Import your Contact component
import Products from '../FrontEnd/Products/products.jsx'; // Import your Products component
import Cart from '../FrontEnd/Log/cart.jsx'; // Import your Cart component
import Login from '../FrontEnd/Log/logIn.jsx'; // Import your Login component

function Routing() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path="/" component={ <Home/> } />
        <Route path="about" component={ <About/> } />
        <Route path="contact" component={ <Contact/> } />
        <Route path="products" component={ <Products/> } />
        <Route path="cart" component={ <Cart/> } />
        <Route path="login" component={ <Login/> } />
      </Routes>
    </div>
  );
}

export default Routing;

// *Before changes

  // <Switch>
  //     <Route exact path="/" component={Home} />
  //     <Route path="about" component={About} />
  //     <Route path="contact" component={Contact} />
  //     <Route path="products" component={Products} />
  //     <Route path="cart" component={Cart} />
  //     <Route path="login" component={Login} />
  // </Switch>