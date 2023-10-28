// Navbar.js
import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="NavBar">
      <span>

        <div className="Home|NavBar">
          <Link to="../../App.js">Home</Link>
          <div className="About|NavBar">
            <NavLink to="../FrontEnd/pages/About.jsx" activeclassname="active">
              About
            </NavLink>
          </div>

          {/* <NavLink to="/contact" activeClassName="active">Contact Us</NavLink> */}
          <div className="Products|NavBar">
            <NavLink to="./Products/products.jsx" activeclassname="active">
              Products
            </NavLink>
          </div>
          <div className="Cart|NavBar">
            <NavLink to="./Log/cart.jsx" activeclassname="active">
              My Cart
            </NavLink>
          </div>
          <div className="LogIn|NavBar">
            <NavLink to="./Log/logIn.jsx" activeclassname="active">
              Login
            </NavLink>
          </div>
        </div>
      </span>
    </nav>
  );
}

export default Navbar;

// import React from "react";
// import { Link,  NavLink} from "react-router-dom"; // If you're using React Router

// function Navbar() {
//   return (
//       <nav>
//           {/* <Link to="./pages/index.html">Home</Link>
//           <NavLink to="/about" activeClassName="active">Home</NavLink>
//           <Link to="./pages/about.html">About</Link>
//           <NavLink to="./pages/" activeClassName="active">About</NavLink>
//           <Link to="./pages/contact.html">Contact Us</Link> */}
//           <NavLink to="../FrontEnd/pages/about.jsx" activeClassName="active">Contact Us</NavLink>
//           <Link to="./Products/products.jsx">Products</Link>
//           {/* <NavLink to="/about" activeClassName="active">Products</NavLink> */}
//           <Link to="./Log/cart.jsx">My Cart</Link>
//           {/* <NavLink to="/about" activeClassName="active">My Cart</NavLink> */}
//           <Link to="./Log/cart.jsx">Login</Link>
//           {/* <NavLink to="/about" activeClassName="active">Login</NavLink> */}
//       </nav>
//   );
// }

// export default Navbar;
