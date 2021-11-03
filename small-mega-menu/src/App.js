import React, { useState } from 'react';
import SubMenu from './components/SubMenu';
import logo from './logo/logoipsum.png';
import arrowDown from './icons/arrow-down.svg';

const App = () => {
  const [menu, setMenu] = useState(false);
  const toggleNav = () => setMenu(!menu);
  const show = menu ? " open" : "";
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="flex">
        <div className="hamburger" onClick={toggleNav}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className={"navbar-nav" + show}>
          <a hreg="#" className="navbar-brand">
            <img
              src={logo} width="129.67"
              height="29.2"
              alt="" />
          </a>
          <li className={"nav-item" + show}>
            <a href="#" className="nav-link nav-drop">Product &nbsp;
              <img
                src={arrowDown}
                alt=""
                className="path"
              />
            </a>
            <SubMenu />
          </li>
          <li className={"nav-item" + show}>
            <a href="#" className="nav-link">Overview</a>
          </li>
          <li className={"nav-item" + show}>
            <a href="#" className="nav-link">Contact</a>
          </li>
        </ul>
        <ul className="navbar-nav sticky">
          <li className="z">
            <a href="#" className="nav-link">
              <button type="button" className="btn btn-darkblue">Sign in</button>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link stick">
              <button type="button" className="btn btn-darkblue-reverse">Get Started</button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default App;
