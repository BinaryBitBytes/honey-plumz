//! Base React Packages
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
//! Supporting Technologies
import 'bootstrap'
// //! Components
// import Nav from './components/style/Nav.jsx';
// import Cards from './components/Products/Cards.jsx';
// import resetPass from './components/Authentication/resetPass.jsx';
// import CartButton from './components/Products/CartButton.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
