import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Switch as Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { connect } from "react-redux";
import WebFont from "webfontloader";
import axios from "axios";
import { io } from "socket.io-client";

const socket = io("http://localhost:1337");

import GeneralPage from "./views/settings/General/General.view";
import SearchPage from "./views/Search/SearchPage";
import RouteWrapper from "./components/Container/RouteWrapper";
import RegisterPage from "./views/Auth/RegisterPage";
import RoomsPage from "./views/Rooms/RoomsPage";
import Nav from "./components/Nav/Nav";
import AllUsers from "./views/Protected/AllUsers";

import LoginPage from "./views/Auth/LoginPage";
import Playground from "./views/Playground/Playground";

import { Container } from "@mui/material";

// Styled Components
import HomePage from "./views/Home/HomePage";

function App({ themeRedux, queue }) {
  // const [queues, setQueues] = useState();

  // React-Cookie

  console.log(queue);
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

    socket.on("newQueue", async (obj) => {
      const newRes = await axios.get("https://localhost:4000/api/queues");
      console.log(newRes);
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
          <BrowserRouter>
            <RouteWrapper>
              {/* <Navbar /> */}

              <Routes>
                <Route exact path="/">
                  <Container maxWidth="md">
                    <Nav />
                    <HomePage />
                  </Container>
                </Route>
                <Route path="/rooms">
                  <Nav />
                  <RoomsPage />
                </Route>
                <Route path="/search">
                  <Container maxWidth="md">
                    <Nav />
                    <SearchPage />
                  </Container>
                </Route>
                <Route path="/settings/general">
                  <Container maxWidth="md">
                    <Nav />
                    <GeneralPage />
                  </Container>
                </Route>
              </Routes>
              <Route path="/auth/register">
                <RegisterPage />
              </Route>
              <Route path="/auth/login">
                <LoginPage />
              </Route>
              <Route path="/users">
                <Nav />
                <AllUsers />
              </Route>
              <Route exact path="/playground">
                <Nav />
                <Playground />
              </Route>
            </RouteWrapper>
          </BrowserRouter>
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
