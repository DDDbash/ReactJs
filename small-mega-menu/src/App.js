import React from 'react';
import SubMenu from './components/SubMenu';
import logo from './logo/logoipsum.png';
import arrowDown from './icons/arrow-down.svg';

const App = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="flex">
        <ul className="navbar-nav">
          <a hreg="#" className="navbar-brand">
            <img
              src={logo} width="129.67"
              height="29.2"
              alt="" />
          </a>
          <li className="nav-item">
            <a href="#" className="nav-link nav-drop">Product &nbsp;
              <img
                src={arrowDown}
                alt=""
              />
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
