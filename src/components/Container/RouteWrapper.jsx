import React, { useState } from "react";

export default function RouteWrapper({ children }) {
  const [isDark, setIsDark] = useState(false);

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
