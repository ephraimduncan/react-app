import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./src/Hello";
import "./src/css/style.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <div>
        <Hello />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
