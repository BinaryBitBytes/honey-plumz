import logo from './logo.svg';
import './App.css';
import nav from './components/nav';
import Cards from './components/Products/cards';
import Products from './components/Products/products';
import resetPass from './components/Authentication/resetPass';
function App() {
  return (
    <div className="App"> 
    <>
      <nav />
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
    </div>
  );
}

export default App;
