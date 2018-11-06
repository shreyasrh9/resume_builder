import React, { Component } from "react";
import ReactDOM from "react-dom";

class Index extends Component {

  test = () => {
      console.log("Test");
    }

  render() {
    return (
    <div onClick={this.test}>Hello React!</div>
    );
  }
};

ReactDOM.render(<Index />, document.getElementById("index"));
