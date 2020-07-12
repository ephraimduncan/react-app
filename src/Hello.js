import React, { Component } from "react";
import Navbar from "./components/navbar";
import Main from "./components/main";
import Footer from "./components/footer";

class Hello extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Main />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Hello;
