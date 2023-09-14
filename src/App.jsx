import logo from './logo.svg';
import './App.css';
//!Components
import Nav from './components/style/Nav.jsx';
import Cards from './components/Products/Cards.jsx';
import resetPass from './components/Authentication/resetPass.jsx';
import CartButton from './components/Products/CartButton.jsx';

function App() {
  return (
    <div className="App"> 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          // className="App-link"
           href="https://reactjs.org"
          // target="_blank"
          // rel="noopener noreferrer"
        >
        <div>
          <Nav />
          <CartButton />
        </div>
        <p>
          Hello, Welcome to HoneyPlumz
        </p>
        Honey Plumz
        </a>
      </header>
    </div>
  );
}

export default App;
