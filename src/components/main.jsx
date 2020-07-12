import React, { Component } from "react";
import "../css/style.css";

const Skills = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5,1fr)",
        gridGap: 30,
        marginTop: 30,
        marginBottom: 30
      }}
      className="container"
    >
      <div className="myCard">
        <img src="https://www.taniarascia.com/static/5e267e2ee412a23e797106ee564145a0/92ab1/js.png" />
        <p>JavaScript</p>
      </div>
      <div className="myCard">
        <img src="https://www.taniarascia.com/static/d695fe69198cc4558284e9aec1a4892c/92ab1/react.png" />
        <p>React</p>
      </div>
      <div className="myCard">
        <img src="https://www.taniarascia.com/static/517c02bd875932e2a959488763695b28/92ab1/node.png" />
        <p>Node.js</p>
      </div>
      <div className="myCard">
        <img src="https://www.taniarascia.com/static/cf23526f451784ff137f161b8fe18d5a/92ab1/vue.png" />
        <p>Vue.js</p>
      </div>
      <div className="myCard">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKiHJdfgAMrub55WPynpHBLCv7Ki68GDw4ow&usqp=CAU" />
        <p>Git</p>
      </div>
      <div className="myCard">
        <img className="bash" src="https://bashlogo.com/img/symbol/png/full_colored_dark.png" />
        <p>Bash</p>
      </div>
      <div className="myCard">
        <img src="https://www.taniarascia.com/static/ba06ee0b8338c75ebce83dca67c8cd37/92ab1/sass.png" />
        <p>Sass</p>
      </div>
      <div className="myCard">
        <img src="https://miro.medium.com/max/700/1*mn6bOs7s6Qbao15PMNRyOA.png" />
        <p className="yet">TypeScript</p>
      </div>
      <div className="myCard">
        <img  src="https://i0.wp.com/colby.io/wp-content/uploads/2018/03/81630ec2-d253-4eb2-b36c-eb54072cb8d6-golang.png?w=256&ssl=1" />
        <p className="yet">Go</p>
      </div>
      <div className="myCard">
        <img  src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg" />
        <p className="yet">Rust</p>
      </div>
    </div>
  );
};

class Main extends Component {
  render() {
    return <Skills />;
  }
}

export default Main;
