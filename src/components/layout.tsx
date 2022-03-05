import React, {useCallback, useEffect, useState} from 'react';
import {Outlet} from "react-router";
import Navigation from "./navigation/navigation";
import Footer from "./footer/footer";
import ChevronUp from "../assets/icons/chevron-up";

function Layout() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    if (scrollY > 300) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [handleScroll]);
  return (
    <div className="app">
      <Navigation/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
      {scrolled ?
        <button className="button-filled button-up" onClick={() => window.scrollTo(0, 0)}><ChevronUp/></button> : null}
    </div>
  );
}

export default Layout;