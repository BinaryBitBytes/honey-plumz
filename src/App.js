import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import "./App.css";
import Navbar from "./components/FrontEnd/NavBar.jsx";
import CardsWithBoundary from "./components/FrontEnd/Products/Cards.jsx";
import Products from "./components/FrontEnd/Products/Products.jsx";
import logo from "./components/FrontEnd/pics/Brand.jpg";
import Routing from './components/Routes/routes.js';

function App() {
  return (
    // <BrowserRouter>
    <>
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
      <>
        <Navbar />
        <Routing />
        <CardsWithBoundary />
        <Products />
      </>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
