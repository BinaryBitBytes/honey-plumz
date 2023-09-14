import logo from './logo.svg';
import './App.css';
import nav from './components/nav';
import Cards from './components/Products/Cards';
import resetPass from './components/Authentication/resetPass';
import CartButton from './components/Products/cartButton.jsx';

function App() {
  return (
    <div className="App"> 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
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
