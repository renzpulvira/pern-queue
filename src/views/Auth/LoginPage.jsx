import React, { useState, useEffect } from "react";
import { AuthForm } from "./Auth.styles";

import { Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const LoginPage = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <AuthForm action="">
      <Typography variant="h1">Sign In</Typography>
      <label htmlFor="username">
        <Typography variant="h6">Username</Typography>
        <input type="name" name="username" placeholder="Username" />
      </label>
      <label htmlFor="password">
        <Typography variant="h6">Password</Typography>
        <input type="password" name="password" placeholder="Password" />
      </label>
      <input type="submit" value="Sign In" />
    </AuthForm>
  );
};

export default LoginPage;
