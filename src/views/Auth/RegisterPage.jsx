import React, { useState, useEffect } from "react";

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  FormControl,
  Checkbox,
  Box,
  Select,
  MenuItem,
  Typography,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// Redux
import { connect } from "react-redux";

// Validations
import { useForm, Controller } from "react-hook-form";

function RegisterPage({ themeVal }) {
  // States
  const [isDark, setIsDark] = useState(false);

  const { register, handleSubmit, control, errors } = useForm();

  const handleFormSubmit = (data) => console.log(data);

  const theme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
    },
  });

  useEffect(() => {
    setIsDark(themeVal);
  }, [themeVal]);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(handleFormSubmit)}
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              fullWidth
              id="username"
              label="Username"
              name="username"
              inputRef={register({ required: true, minLength: 2 })}
            />
            {errors.username && <p>This field is required</p>}
            <TextField
              margin="normal"
              fullWidth
              label="Password"
              type="password"
              id="password"
              name="password"
              inputRef={register({ required: true, minLength: 2 })}
            />
            {errors.password && <p>This field is required</p>}
            {/* <FormControlLabel
              control={
                <Checkbox
                  value="remember"
                  color="primary"
                  name="remember"
                  inputRef={register}
                />
              }
              label="Remember me"
              inputRef={register}
            /> */}
            <FormControl fullWidth label="Role">
              <p>Role</p>
              <Controller
                name={"Role"}
                control={control}
                label="Role"
                render={({ onChange, value, ref }) => {
                  return (
                    <Select
                      inputRef={ref}
                      label="Role"
                      defaultValue="Listener"
                      value={value || ""}
                      onChange={(event) => onChange(event.target.value)}
                    >
                      <MenuItem value="Listener">Listener</MenuItem>
                      <MenuItem value="Host">Host</MenuItem>
                    </Select>
                  );
                }}
              />
            </FormControl>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => ({
  themeVal: state.theme,
});

export default connect(mapStateToProps)(RegisterPage);
