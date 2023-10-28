
// import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import "./App.css";
import Navbar from "./components/FrontEnd/NavBar.jsx";
import Routing from './components/Routes/routes.js';
// import CardsWithBoundary from "./components/FrontEnd/Products/cards.jsx";
// import Products from "./components/FrontEnd/Products/products.jsx";
import logo from "./components/FrontEnd/pics/Brand.jpg";
import BODY from "./components/Templates/body.jsx";
console.log(BODY)
function App() {
  return (
    <>
      <>
        <Navbar />
        <Routing />
        <BODY />
        {/* <Products /> */}
      </>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="Honey Plumz Logo" />
          <p>Hello, Welcome to HoneyPlumz</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Honey Plumz
          </a>
        </header>
      </div>
    
    </>
  );
}
console.log (App())
export default App;
