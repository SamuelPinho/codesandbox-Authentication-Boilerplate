import ReactDOM from "react-dom";
import React from "react";
import Firebase, { FirebaseContext } from "./components/Firebase";

import Layout from "./pages/Layout";

import "./styles/theme.scss";

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <Layout />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
