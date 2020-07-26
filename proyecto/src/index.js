import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";

//Rutas
import AppRutas from "./rutas";

ReactDOM.render(
  <Router>
    <AppRutas />
  </Router>,
  document.getElementById("root")
);
