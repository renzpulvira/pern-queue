import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import WebFont from "webfontloader";

import Nav from "../Nav/Nav";

function RouteWrapper({ children, themeVal }) {
  const [isDark, setIsDark] = useState(false);
  const [renderNav, setRenderNav] = useState(true);

  // TODO: Newed to Fix Nav
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Inter"],
      },
    });
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

  return <div style={routeWrapperStyles}>{children}</div>;
}

const mapStateToProps = (state) => ({
  themeVal: state.theme,
});

export default connect(mapStateToProps)(RouteWrapper);
