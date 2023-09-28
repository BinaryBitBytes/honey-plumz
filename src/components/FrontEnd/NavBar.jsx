// Navbar.js
import React from "react";
import { Link,  NavLink} from "react-router-dom"; // If you're using React Router

function Navbar() {
  return (
      <nav>       
          <Link to="./pages/index.html">Home</Link>
          <NavLink to="/about" activeClassName="active">Home</NavLink>
          <Link to="./pages/about.html">About</Link>
          <NavLink to="./pages/" activeClassName="active">About</NavLink>
          <Link to="./pages/contact.html">Contact Us</Link>
          <NavLink to="/about" activeClassName="active">Contact Us</NavLink>
          <Link to="./Products/products.jsx">Products</Link>
          <NavLink to="/about" activeClassName="active">Products</NavLink>
          <Link to="./Log/cart.jsx">My Cart</Link>
          <NavLink to="/about" activeClassName="active">My Cart</NavLink>
          <Link to="./Log/cart.jsx">Login</Link>
          <NavLink to="/about" activeClassName="active">Login</NavLink>
      </nav>
  );
}

export default Navbar;
