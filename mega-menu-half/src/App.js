import React, { useState } from 'react';
import SubMenu from './components/SubMenu';
import logo from './logo/logoipsum.png';
import inactivePath from './icons/path-inactive.svg';
import activePath from './icons/path.svg';

const App = () => {
  const [isHovered, setHover] = useState(false);
  const handleEnter = () => setHover(true);
  const handleHover = () => setHover(!isHovered);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="flex">
        <ul className="navbar-nav">
          <a href="#" className="navbar-brand">
            <img
              src={logo}
              width="129.67"
              height="29.2"
              alt="" />
          </a>
          <li
            className="nav-item"
            onMouseEnter={handleEnter}
            onMouseLeave={handleHover}
          >
            <a href="#" className="nav-link nav-drop">Product &nbsp;
              {isHovered ?
                <img src={activePath} /> :
                <img src={inactivePath} />}
            </a>
            <SubMenu />
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Overview</a>
          </li>
          <li className="nav-item">
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