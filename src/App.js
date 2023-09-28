// import logo from "./components/FrontEnd/pics/Brand.jpg";
import React from 'react';
import "./App.css";
import Navbar from "./components/FrontEnd/NavBar.jsx";
import CardsWithBoundary from "./components/FrontEnd/Products/cards.jsx";
import Products from "./components/FrontEnd/Products/products.jsx";
import logo from "./components/FrontEnd/pics/Brand.jpg";
// import resetPass from './components/Authentication/resetPass';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <img src="./components/FrontEnd/pics/Brand.jpg" className="App-logo" alt="logo" /> */}
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
          <Navbar />
          <CardsWithBoundary />
          <Products />
          </div>
  );
}

export default App;

