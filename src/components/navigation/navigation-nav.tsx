import React from 'react';
import {NavLink} from "react-router-dom";

function NavigationNav() {
  return (
    <ul>
      <li><NavLink to="/courses">Courses</NavLink></li>
      <li><NavLink to="/practise">Practise</NavLink></li>
      <li><NavLink to="/blog">Blog</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/contact">Contact</NavLink></li>
    </ul>
  );
}

export default NavigationNav;