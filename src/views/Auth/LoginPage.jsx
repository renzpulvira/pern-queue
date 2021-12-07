import React, { useState, useEffect } from "react";

import {
  Box,
  Avatar,
  TextField,
  CssBaseline,
  FormControl,
  FormControlLabel,
  Typography,
  Container,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { connect } from "react-redux";

const LoginPage = ({ themeVal }) => {
  const [isDark, setIsDark] = useState(false);

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
      <Container>
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
            Sign in
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => {
  themeVal: state.theme;
};

export default connect(mapStateToProps)(LoginPage);
