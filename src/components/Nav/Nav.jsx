import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavLink } from "./Nav.styles";
import { FcClock } from "react-icons/fc";
import WebFont from "webfontloader";

const Nav = () => {
  const [currTime, setCurrTime] = useState(0);
  const [activePage, setActivePage] = useState("/");

  const getCurrTime = () => {
    let currTime = new Date().toLocaleTimeString();
    setCurrTime((prevTime) => currTime);
  };

  const updateMemoryPage = (page) => {
    setActivePage(page);
  };

  // TODO: Might refactor the managing of page state

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Inter"],
      },
    });
    getCurrTime();
    updateMemoryPage(window.location.pathname);
  }, []);

  return (
    <Navbar>
      <span className="time">
        <FcClock />
        &nbsp;{currTime}
      </span>
      <ul>
        <NavLink
          onClick={() => updateMemoryPage("/")}
          isActive={activePage == "/" ? true : false}
        >
          <Link to="/">Home</Link>
        </NavLink>
        <NavLink
          onClick={() => updateMemoryPage("/search")}
          isActive={activePage == "/search" ? true : false}
        >
          <Link to="/search">Search</Link>
        </NavLink>
      </ul>
      <span>Hello, Username</span>
    </Navbar>
  );
};

export default Nav;
