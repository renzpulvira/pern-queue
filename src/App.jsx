import React from "react";
// import { Divider, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { connect } from "react-redux";

import Queues from "./components/Queues/Queues";
import PlayingQueue from "./components/Queues/PlayingQueue";

function App({ themeRedux }) {
  const theme = createTheme({
    palette: {
      mode: themeRedux ? "dark" : "light",
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <main className="App">
          <PlayingQueue />
          {/*<Divider textAlign="left">
            <Typography variant="b">Queues</Typography>
          </Divider>
          */}
          <Queues />
        </main>
      </ThemeProvider>
    </>
  );
}

const mapStateToProps = (state) => ({
  themeRedux: state.theme,
});

export default connect(mapStateToProps)(App);
