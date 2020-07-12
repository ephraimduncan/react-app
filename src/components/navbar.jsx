import React, { Component } from "react";

class Navbar extends Component {
  state = {
    nameLink: "https://duncann.now.sh",
    githubLink: "https://github.com/dephraiim"
  };

  render() {
    return (
      <nav className="navbar navbar-dark bg-primary ">
        <div className="container  justify-content-center flex-column ">
          <a className="navbar-brand " href={this.state.nameLink}>
            <h1>Duncan</h1>
          </a>
          <ul className="navbar-nav">
            <li className="nav-item active">
              <h3 className="nav-link text-center" href={this.state.githubLink}>
                My Skills
              </h3>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
