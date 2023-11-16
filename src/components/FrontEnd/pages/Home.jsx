import React from "react";
import Navbar from "../../FrontEnd/NavBar.jsx";
import BODY from "../../Templates/body.jsx";
// export default class Home extends React.PureComponent{
export default function Home() {
  return (
    <div className="Home" id="HOME">
      <section>
        <Navbar />
        <h1> Honey Plumz LLC</h1>
        <BODY />
      </section>
    </div>
  );
}
