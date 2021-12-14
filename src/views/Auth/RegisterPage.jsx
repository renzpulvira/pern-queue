import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm();

  const handleFormSubmit = async (data) => {
    const { username, role } = await data;
    try {
      const processed = await axios.post(
        "http://localhost:4000/api/user/create",
        {
          name: username,
          role: role,
        }
      );
      // if (!processed) console.log("Sorry, try again.");
      // if (processed) console.log(processed);
      // if (processed) history.push("/rooms");
      if (processed?.data?.success === false) {
        setExternalErrors(processed.data);
      } else {
        console.log(processed.data);
        // dispatch(updateUser(username));
      }
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
          placeholder="Username"
          ref={register({ required: true, min: 2 })}
        />
        {errors.username && errors.username.type === "required" && (
          <p>Field is required.</p>
        )}
        {externalErrors?.message === "User Already Exists" && (
          <p>{externalErrors?.message}</p>
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
    </AuthForm>
  );
}

// const mapStateToProps = (state) => ({
//   userVal: state.user,
// });

// export default connect(mapStateToProps)(RegisterPage);
export default RegisterPage;
