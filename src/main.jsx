import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch as Routes, Route } from "react-router-dom";
import "./index.css";
import { Container } from "@mui/material";

// Components
import App from "./App";
import GeneralPage from "./views/settings/General/General.view";
import SearchPage from "./views/Search/SearchPage";
import Navbar from "./components/Nav/Navbar";
import RouteWrapper from "./components/Container/RouteWrapper";
import RegisterPage from "./views/Auth/RegisterPage";
import RoomsPage from "./views/Rooms/RoomsPage";

// Redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./store/reducers";
import LoginPage from "./views/Auth/LoginPage";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <RouteWrapper>
          <Navbar />
          <Routes>
            <Route exact path="/">
              <Container maxWidth="md">
                <App />
              </Container>
            </Route>
            <Route path="/rooms">
              <RoomsPage />
            </Route>
            <Route path="/search">
              <Container maxWidth="md">
                <SearchPage />
              </Container>
            </Route>
            <Route path="/settings/general">
              <Container maxWidth="md">
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
        </RouteWrapper>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
