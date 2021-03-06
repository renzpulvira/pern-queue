import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { useCookies } from "react-cookie";

// Redux
import { Typography } from "@mui/material";
import { connect } from "react-redux";
import { AuthForm } from "./Auth.styles";
import * as GS from "../../Global.styles";
import { updateUser } from "../../store/actions/user.action";

// Axios
import axios from "axios";

// Validations
import { useForm } from "react-hook-form";

/* TODO: CONVERT MUI to Plain CSS & Remove global state */

function RegisterPage() {
  // States
  const [isDark, setIsDark] = useState(false);
  const [externalErrors, setExternalErrors] = useState({});
  const [cookies, setCookies] = useCookies(["jwtToken"]);
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm();

  const handleFormSubmit = async (data) => {
    const { username, password, role } = await data;
    try {
      const processed = await axios.post("http://localhost:4000/auth/create", {
        name: username,
        password: password,
        role: role,
      });

      if (processed?.data?.success === false) {
        setExternalErrors(processed.data);
        return;
      }

      setCookies("jwtToken", processed.data.token, {
        maxAge: 15,
      });

      history.replace("/");
    } catch (err) {
      if (err) console.log(err);
    }
  };

  useEffect(() => {
    console.log("Has Errors.");
  }, [externalErrors]);

  return (
    <AuthForm onSubmit={handleSubmit(handleFormSubmit)}>
      <Typography variant="h1">Sign Up</Typography>
      <label htmlFor="username">
        <Typography variant="h6">Username</Typography>
        <input
          type="name"
          name="username"
          placeholder=""
          ref={register({ required: true, min: 2 })}
        />
        {errors.username && errors.username.type === "required" && (
          <p>Field is required.</p>
        )}
        {externalErrors?.message === "User Already Exists" && (
          <p>{externalErrors?.message}</p>
        )}
      </label>
      <label htmlFor="password">
        <Typography variant="h6">Password</Typography>
        <input
          type="password"
          name="password"
          placeholder=""
          ref={register({ required: true, min: 2 })}
        />
        {errors.password && errors.password.type === "required" && (
          <p>Field is required.</p>
        )}
      </label>
      <label htmlFor="role">
        <Typography variant="h6">Role</Typography>
        <select name="role" id="" ref={register({ required: true })}>
          <option value="Listener">Listener</option>
          <option value="Host">Host</option>
        </select>
        <ul>
          <li>
            <b>Listener</b>: Join Rooms(Muted by default)
          </li>
          <li>
            <b>Host</b>: Can Create New Rooms
          </li>
        </ul>
      </label>
      <GS.Button>Join</GS.Button>

      <p>
        Already have an account? <Link to="/auth/login">Log In!</Link>
      </p>
    </AuthForm>
  );
}

// const mapStateToProps = (state) => ({
//   userVal: state.user,
// });

// export default connect(mapStateToProps)(RegisterPage);
export default RegisterPage;
