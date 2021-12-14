import React, { useEffect } from "react";
import "./App.css";
// import { Divider, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { connect } from "react-redux";
import WebFont from "webfontloader";

// import Queues from "./components/Queues/Queues";
// import PlayingQueue from "./components/Queues/PlayingQueue";
import QueueList from "./components/Queues/QueueList";

// Styled Components
import { Wrapper } from "./Global.styles";
import Player from "./components/Player/Player";

function App({ themeRedux }) {
  const theme = createTheme({
    palette: {
      mode: themeRedux ? "dark" : "light",
    },
  });

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Inter"],
      },
    });
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <main className="App">
          {/* <PlayingQueue /> */}
          {/*<Divider textAlign="left">
            <Typography variant="b">Queues</Typography>
          </Divider>
          */}
          {/* <Queues /> */}
          <Wrapper>
            <QueueList />
            <Player />
          </Wrapper>
        </main>
      </ThemeProvider>
    </>
  );
}

const mapStateToProps = (state) => ({
  themeRedux: state.theme,
});

export default connect(mapStateToProps)(App);
