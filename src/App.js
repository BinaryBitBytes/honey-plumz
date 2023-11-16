import * as React from "react";
import { red } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
// import Navbar from "./components/FrontEnd/NavBar.jsx";
import Routing from "./components/Routes/routes.js";
// import BODY from "./components/Templates/body.jsx";
// import CardsWithBoundary from "./components/FrontEnd/Products/cards.jsx";
// import logo from "./components/FrontEnd/pics/Brand.jpg";
// import { BrowserRouter } from 'react-router-dom';
// import "./App.css";

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

export default function App() {
  return (
    // <>
    <>
      {/* <ThemeProvider id="root" theme={theme}> */}
      <ThemeProvider theme={theme}>
        <Routing>
          {/* <BODY>
          <Navbar />
        </BODY> */}
        </Routing>
      </ThemeProvider>
    </>
    /*      <div className="App">
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
*/
  );
}
