import React from 'react';
import Logo from "../../assets/logo/logo";
import NavigationNav from "./navigation-nav";
import NavigationButtons from "./navigation-buttons";
import {Link} from "react-router-dom";
import './navigation.scss';

function Navigation() {
  return (
    <header className="header">
      <nav className="header__nav">
        <div className="container">
          <Link to="/" className="header__logo">
            <Logo/>
          </Link>
          <div className="header__wrapper">
            <NavigationNav/>
            <NavigationButtons/>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;