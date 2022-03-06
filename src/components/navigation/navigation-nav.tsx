import React from 'react';
import {NavLink} from "react-router-dom";

interface NavigationNavProps {
  readonly setIsMenuOpen: (isOpen: boolean) => void;
}

function NavigationNav({setIsMenuOpen}: NavigationNavProps) {
  return (
    <ul>
      <li onClick={() => setIsMenuOpen(false)}><NavLink to="/courses">Courses</NavLink></li>
      <li onClick={() => setIsMenuOpen(false)}><NavLink to="/practise">Practise</NavLink></li>
      <li onClick={() => setIsMenuOpen(false)}><NavLink to="/blog">Blog</NavLink></li>
      <li onClick={() => setIsMenuOpen(false)}><NavLink to="/about">About</NavLink></li>
      <li onClick={() => setIsMenuOpen(false)}><NavLink to="/contact">Contact</NavLink></li>
    </ul>
  );
}

export default NavigationNav;