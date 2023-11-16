import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from '../FrontEnd/pages/Home.jsx'; // Import your Home component
import About from '../FrontEnd/pages/about.jsx'; // Im                                                                                                                                                                                                                                                                                           port your About component
import Contact from '../FrontEnd/pages/contact.jsx'; // Import your Contact component
import Products from '../FrontEnd/Products/products.jsx'; // Import your Products component
import Cart from '../FrontEnd/Log/cart.jsx'; // Import your Cart component
import SignIn from '../FrontEnd/Log/SignIn.jsx'; // Import your Login component

function Routing() {
  return (
    <div className='App'>
      <Routes>
        {/* <Route path="/" component={ <Home/> } exact /> */}
        <Route path="/" element={<Home/>} exact />
        <Route path="about" component={ <About/> } />
        <Route path="contact" component={ <Contact/> } />
        <Route path="products" component={ <Products/> } />
        <Route path="cart" component={ <Cart/> } />
        <Route path="SignIn" component={ <SignIn/> } />
      </Routes>
    </div>
  );
}

export default Routing;

console.log(`routes.js ran successfully`)
// *Before changes

  // <Switch>
  //     <Route exact path="/" component={Home} />
  //     <Route path="about" component={About} />
  //     <Route path="contact" component={Contact} />
  //     <Route path="products" component={Products} />
  //     <Route path="cart" component={Cart} />
  //     <Route path="login" component={Login} />
  // </Switch>