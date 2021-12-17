import React, { useEffect, useState } from "react";
import "./App.css";
// import { Divider, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { connect } from "react-redux";
import WebFont from "webfontloader";
import axios from "axios";

// import Queues from "./components/Queues/Queues";
// import PlayingQueue from "./components/Queues/PlayingQueue";
import QueueList from "./components/Queues/QueueList";

// Styled Components
import { Wrapper } from "./Global.styles";
import Player from "./components/Player/Player";

function App({ themeRedux, queue }) {
  const [queues, setQueues] = useState();

  console.log(queue);
  const theme = createTheme({
    palette: {
      mode: themeRedux ? "dark" : "light",
    },
  });

  const fetchQueues = async () => {
    console.log("REQUESTING...");
    const res = await axios.get("http://localhost:4000/api/queues/");
    // const res = "ohyonk";
    if (res) console.log("REQUESTED...");
    console.log(res);
  };

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
  queue: state.queue,
});

export default connect(mapStateToProps)(App);
