import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import WebFont from "webfontloader";

import Nav from "../Nav/Nav";

function RouteWrapper({ children, themeVal }) {
  const [isDark, setIsDark] = useState(false);
  const [currPage, setCurrPage] = useState("/");
  const [renderNav, setRenderNav] = useState(true);
  const location = useLocation();

  // TODO: Newed to Fix Nav
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Inter"],
      },
    });
    setCurrPage(location.pathname);
    console.log(location.pathname);
  }, []);

  useEffect(() => {
    setIsDark(themeVal);
  }, [themeVal]);

  // useEffect(() => {
  //   setCurrPage(location.pathname);
  // }, []);

  const routeWrapperStyles = {
    background: isDark ? "#333" : "#fff",
    position: "absolute",
    top: 0,
    left: "50%",
    height: "100vh",
    width: "100vw",
    transform: "translateX(-50%)",
  };

  useEffect(() => {
    if (currPage == "/auth/register" || currPage == "/auth/login") {
      setRenderNav(false);
    } else {
      setRenderNav(true);
    }
  }, [location]);

  // if (currPage == "/auth/register" || currPage == "/auth/login") {
  //   setRenderNav(false);
  // }

  return (
    <div style={routeWrapperStyles}>
      {renderNav ? "has nav" : false}
      {children}
    </div>
  );
}

const mapStateToProps = (state) => ({
  themeVal: state.theme,
});

export default connect(mapStateToProps)(RouteWrapper);
