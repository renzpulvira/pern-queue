import React, { useState } from "react";
import { Divider, Typography } from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { connect } from "react-redux";

import Queues from "./components/Queues/Queues";

function App() {
  const theme = createTheme({
    palette: {
      mode: "light",
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <main className="App">
          <Divider textAlign="left">
            <Typography variant="b">Queues</Typography>
          </Divider>
          <Queues />
        </main>
      </ThemeProvider>
    </>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme,
});

export default connect(mapStateToProps)(App);
