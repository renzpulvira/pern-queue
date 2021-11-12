import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Switch as Routes, Route, Link } from "react-router-dom";
import GeneralPage from "./views/settings/General/General.view";
import SearchPage from "./views/Search/SearchPage";
import "./index.css";
import Navbar from "./components/Nav/Navbar";
import { Container } from "@mui/material";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/">
          <Container maxWidth="md">
            <App />
          </Container>
        </Route>
        <Route path="/search">
          <Container maxWidth="md">
            <SearchPage />
          </Container>
        </Route>
        <Route path="/settings/profile">
          <Container maxWidth="md">
            <GeneralPage />
          </Container>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
