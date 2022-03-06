import React, {useState} from 'react';
import Logo from "../../assets/logo/logo";
import NavigationNav from "./navigation-nav";
import NavigationButtons from "./navigation-buttons";
import {Link} from "react-router-dom";
import './navigation.scss';
import MenuIcon from "../../assets/icons/menu-icon";
import CloseIcon from "../../assets/icons/close-icon";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header
      className="header">
      <nav className="header__nav">
        <div className="container">
          <Link to="/" className="header__logo">
            <Logo/>
          </Link>
          <div className={isMenuOpen ? "header__wrapper active" : "header__wrapper"}>
            <div className="header__mobile-title">
              <h4>Menu</h4>
              <CloseIcon onClick={() => setIsMenuOpen(false)}/>
            </div>
            <NavigationNav setIsMenuOpen={setIsMenuOpen}/>
            <NavigationButtons/>
          </div>
          <div className={isMenuOpen ? "menu__icon active" : "menu__icon"} onClick={() => setIsMenuOpen((d) => !d)}>
            <MenuIcon/>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;