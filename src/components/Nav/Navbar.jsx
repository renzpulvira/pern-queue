import React, { useState, useEffect } from "react";

import {
  Grid,
  Card,
  Tabs,
  Tab,
  Avatar,
  Stack,
  Typography,
} from "@mui/material";
import Container from "@mui/material/Container";
import { useHistory } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { connect } from "react-redux";
import {
  setLocalStorage,
  getCurrPage,
} from "../../helpers/LocalStorage/LocalStorage.helper.js";

function Navbar({ themeVal }) {
  let history = useHistory();

  const [value, setValue] = useState("one");
  const [userName, setUserName] = useState("Renz");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (!getCurrPage) {
      setValue("one");
    } else {
      setValue(getCurrPage);
    }
  }, []);

  useEffect(() => {
    setIsDark(themeVal);
  }, [themeVal]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
    setLocalStorage("currPage", newValue);
  };

  const theme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
    },
  });

  if (
    window.location.pathname == "/auth/login" ||
    window.location.pathname == "/auth/register"
  )
    return null;

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="md"
        style={{ marginTop: "2em", marginBottom: "1em" }}
      >
        <Card style={{ width: "100%" }}>
          <Grid container spacing={0} alignItems="center">
            <Grid item xs={12} lg={8}>
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
              >
                <Tab
                  value="one"
                  label="Music Player"
                  component="a"
                  onClick={(event) => {
                    event.preventDefault();
                    history.push("/");
                  }}
                />
                <Tab
                  value="two"
                  label="Search"
                  component="a"
                  onClick={(event) => {
                    event.preventDefault();
                    history.push("/search");
                  }}
                />
                <Tab
                  value="three"
                  label="Settings"
                  component="a"
                  onClick={(event) => {
                    event.preventDefault();
                    history.push("/settings/general");
                  }}
                />
              </Tabs>
            </Grid>
            <Grid item xs={12} lg={4}>
              <Stack
                direction="row"
                spacing={2}
                style={{ justifyContent: "flex-end", paddingRight: "15px" }}
              >
                <Typography
                  variant="caption"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  Hello, {userName}
                </Typography>
                <Avatar
                  alt="Renz Pulvira"
                  src="/static/images/avatar/3.jpg"
                  sx={{ width: 28, height: 28 }}
                >
                  R
                </Avatar>
              </Stack>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </ThemeProvider>
  );
}

const mapStateToProps = (state) => ({
  themeVal: state.theme,
});

export default connect(mapStateToProps)(Navbar);
