import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import WebFont from "webfontloader";

function RouteWrapper({ children, themeVal }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Inter"],
      },
    });
  }, []);

  useEffect(() => {
    setIsDark(themeVal);
  }, [themeVal]);

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
