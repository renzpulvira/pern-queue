import React, { useState, useRef, useEffect } from "react";
import { AuthForm } from "./Auth.styles";
import * as GS from "../../Global.styles";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useCookies, Cookies } from "react-cookie";

import { Typography, useIsFocusVisible } from "@mui/material";

const LoginPage = () => {
  const history = useHistory();
  const usernameRef = useRef();
  const passRef = useRef();
  const [errors, setErrors] = useState("");
  const [isDark, setIsDark] = useState(false);

  // React Cookie
  const [cookies, setCookie, removeCookie] = useCookies(["jwtToken"]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(null);
    console.log(cookies);

    try {
      const res = await axios.post("http://localhost:1337/api/user/check/", {
        name: usernameRef.current.value,
        password: passRef.current.value,
      });
      let msg = res.data.msg;

      if (msg) {
        setErrors(msg);
        console.log({ res, errors });
        return;
      }

      setCookie("jwtToken", res.data?.accessToken, {
        maxAge: 15,
      });

      history.replace("/users");
    } catch (err) {
      if (err) return err;
    }
  };

  return (
    <AuthForm onSubmit={handleSubmit}>
      <Typography variant="h1">Sign In</Typography>
      <label htmlFor="username">
        <Typography variant="h6">Username</Typography>
        <input
          type="name"
          name="username"
          placeholder="Username"
          ref={usernameRef}
        />
      </label>
      <label htmlFor="password">
        <Typography variant="h6">Password</Typography>
        <input
          type="password"
          name="password"
          placeholder="Password"
          ref={passRef}
        />
      </label>
      {errors && <p>{errors}</p>}
      <GS.Button>Log In</GS.Button>
      <p>
        No Account Yet? <Link to="/auth/register">Register Now!</Link>
      </p>
    </AuthForm>
  );
};

export default LoginPage;
