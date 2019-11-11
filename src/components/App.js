import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "List",
      urlLists: []
    };
  }

  render() {
    return (
      <div className="App">
        <div>Hello, it's coffee time!</div>
      </div>
    );
  }
}
