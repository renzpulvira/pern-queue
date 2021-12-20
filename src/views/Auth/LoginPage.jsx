import React, { useState, useRef, useEffect } from "react";
import { AuthForm } from "./Auth.styles";
import * as GS from "../../Global.styles";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

import { Typography, useIsFocusVisible } from "@mui/material";

const LoginPage = () => {
  const history = useHistory();
  const usernameRef = useRef();
  const passRef = useRef();
  const [errors, setErrors] = useState({ username: null, pass: null });

  const [isDark, setIsDark] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({ ...errors, username: null, pass: null });

    try {
      const res = await axios.post("http://localhost:4000/api/user/check/", {
        name: usernameRef.current.value,
        password: passRef.current.value,
      });
      let msg = res.data.msg;

      if (msg === "Username not found") {
        setErrors({ ...errors, username: res.data.msg, pass: null });
      } else if (msg === "Incorrect Password") {
        setErrors({ ...errors, username: null, pass: res.data.msg });
      } else {
        history.push("/");
      }
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
      {errors.username && <p>{errors.username}</p>}
      <label htmlFor="password">
        <Typography variant="h6">Password</Typography>
        <input
          type="password"
          name="password"
          placeholder="Password"
          ref={passRef}
        />
      </label>
      {errors.pass && <p>{errors.pass}</p>}
      <GS.Button>Log In</GS.Button>
      <p>
        No Account Yet? <Link to="/auth/register">Register Now!</Link>
      </p>
    </AuthForm>
  );
};

export default LoginPage;
