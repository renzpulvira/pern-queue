import React, { useState, useEffect } from "react";

// import {
//   Avatar,
//   Button,
//   CssBaseline,
//   TextField,
//   FormControlLabel,
//   FormControl,
//   Checkbox,
//   Box,
//   Select,
//   MenuItem,
//   Typography,
//   Container,
// } from "@mui/material";
// Redux
import { Typography } from "@mui/material";
import { connect } from "react-redux";
import { AuthForm } from "./Auth.styles";

// Validations
import { useForm } from "react-hook-form";

/* TODO: CONVERT MUI to Plain CSS & Remove global state */

function RegisterPage() {
  // States
  const [isDark, setIsDark] = useState(false);

  const { register, handleSubmit, errors } = useForm();

  const handleFormSubmit = (data) => console.log(data);
  return (
    <AuthForm onSubmit={handleSubmit(handleFormSubmit)}>
      <Typography variant="h1">Sign Up</Typography>
      <label htmlFor="username">
        <Typography variant="h6">Username</Typography>
        <input
          type="name"
          name="username"
          placeholder="Username"
          ref={register({ required: true, min: 2 })}
        />
        {errors.username && errors.username.type === "required" && (
          <p>Field is required.</p>
        )}
      </label>
      <label htmlFor="role">
        <Typography variant="h6">Role</Typography>
        <select name="role" id="" ref={register({ required: true })}>
          <option value="Listener">Listener</option>
          <option value="Host">Host</option>
        </select>
      </label>
      <input type="submit" value="Join" />
    </AuthForm>
  );
}

export default RegisterPage;
