import React, { Component } from "react";
import "./App.css";
import PropTypes from "prop-types";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Contenido from "../../Contenido";

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };
  render() {
    const { children } = this.props;
    console.log(children);
    return (
      <div>
        <Contenido body={children}></Contenido>
      </div>
    );
  }
}

export default App;
