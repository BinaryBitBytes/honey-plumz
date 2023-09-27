import logo from './logo.svg';
import './App.css';
import Navbar from './components/FrontEnd/NavBar.jsx';
import Cards from './components/FrontEnd/Products/cards.jsx';
import Products from './components/FrontEnd/Products/products.jsx';
// import resetPass from './components/Authentication/resetPass';

function App() {
  return (
    <div className="App"> 
    <>
      <Navbar />
    </>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, Welcome to HoneyPlumz
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        Honey Plumz
        </a>
      </header>
      <body>
        <div>
          <Cards /> 
            <div>
              <Products />
            </div>

        </div>
      </body>
    </div>
  );
}

export default App;
