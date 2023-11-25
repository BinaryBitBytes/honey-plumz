import React, { useState } from "react";
import Navbar from "../UI/NavBar.jsx";
import BODY from "../../Templates/body.jsx";
// export default class Home extends React.PureComponent{

export default function Home() {
  const _navBar_ = <Navbar />;

  function HomeSTATE() {
    const [currentNavBar, setNavBar] = useState(0);
    const [clickNavBar, setNewNavBar] = useState(1);
    let className = "homeState";
    if (clickNavBar) {
      className += "clickNavBar";
    }

    return (
      <div
        className={className}
        onclick={() => setNewNavBar(true)}
        onChange={() => setNewNavBar(false)}
      >
        <h1> Honey Plumz LLC</h1>
        <div className={Home._navBar_} id="HOME">
          <section>
            {_navBar_}
            <BODY />
          </section>
        </div>
      </div>
    );
  }
}
