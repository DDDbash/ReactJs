import React, { useState } from 'react';
import SubMenu from './components/SubMenu';
import logo from './logo/logoipsum.png';
import inactivePath from './icons/path-inactive.svg';
import activePath from './icons/path.svg';

const App = () => {
  const [isHovered, setHover] = useState(false);
  const [menu, setMenu] = React.useState(false);
  const handleEnter = () => setHover(true);
  const handleHover = () => setHover(!isHovered);
  const toggleNav = () => setMenu(!menu);
  const show = menu ? " open" : "";

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="flex">
        <div className="hamburger" onClick={toggleNav}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className={"navbar-nav" + show}>
          <a href="#" className="navbar-brand">
            <img
              src={logo}
              width="129.67"
              height="29.2"
              alt="" />
          </a>
          <li
            className={"nav-item" + show}
            onMouseEnter={handleEnter}
            onMouseLeave={handleHover}
          >
            <a href="#" className="nav-link nav-drop">Product &nbsp;
              {isHovered ?
                <img className="path" src={activePath} /> :
                <img className="path" src={inactivePath} />}
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
              <button type="button" className="btn btn-orange-reverse">Sign in</button>
            </a>
          </li>
          <li>
            <a href="#" className="nav-link stick">
              <button type="button" className="btn btn-orange">Get Started</button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default App;
