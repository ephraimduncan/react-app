import React, { Component } from "react";

class Footer extends Component {
  state = {
    nameLink: "https://duncann.now.sh"
  };

  render() {
    return (
      <nav className="navbar navbar-dark bg-primary ">
        <div className="container  justify-content-center">
          <a className="navbar-brand " href={this.state.nameLink}>
            <p className="text-center lead">Made with ❤️ by Duncan</p>
          </a>
        </div>
      </nav>
    );
  }
}

export default Footer;
