// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="./pages/index.html">Home</Link>
        </li>
        <li>
          <Link to="./pages/about.html">About</Link>
        </li>
        <li>
          <Link to="./pages/contact.html">Contact Us</Link>
        </li>
        <li>
          <Link to="./Products/products.jsx">Products</Link>
        </li>
        <li>
          <Link to="./Log/cart.jsx">My Cart</Link>
        </li>
        <li>
          <Link to="./Log/cart.jsx">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
