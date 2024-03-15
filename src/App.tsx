import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import {
  ThemeProvider,
  getAllureTheme,
  Themes,
  Language,
} from "@gui/fluent-ui-allure";

import "./App.css";
import HomePage from "./pages/homePage/HomePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dialog from "./pages/dialog/Dialog";
import Introduction from "./pages/introduction/Introduction";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={getAllureTheme(Themes.Cobalt, Language.EN)}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dialog" element={<Dialog />} />
            <Route path="intro" element={<Introduction />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
