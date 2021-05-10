import React, { useState } from "react";
import Logosaraswatinav from "./parts.svg";
import "./navbar.css";
import Menubar from "./menubar.svg";
import Close from "./close.svg";

const Navbar = () => {
  const [satu, setSatu] = useState(true);
  const [menubar, setMenubar] = useState(true);
  return (
    <>
      <nav>
        <div className="container">
          <div className="logo-nav">
            <a href="/" target="_blank">
              <img src={Logosaraswatinav}></img>
            </a>
          </div>
          <div className="menu-nav">
            <ul className={menubar ? "muncul" : ""}>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Feature</a>
              </li>
              <li>
                <a href="/">Solution</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
            </ul>
          </div>
          <div className="button-nav">
            {/* <a href="/"> */}
            <button onClick={() => setSatu(!satu)}>Coming Soon</button>
            {/* {satu ? <span>oke</span> : <span>mbuh</span>} */}
            {/* </a> */}
          </div>
          <div className="menubar">
            <div onClick={() => setMenubar(!menubar)}>
              {menubar ? <img src={Menubar} /> : <img src={Close} />}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
