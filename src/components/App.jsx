import React, { Component } from "react";
import Header from "./Header.jsx";
import Contents from "./Contents.jsx";
import "../styles/styles.css";

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
        <div className="app">
          <Header className="header" />
          <h1>Hello, it's coffee time!</h1>
          <Contents className="contents" />
        </div>
      </div>
    );
  }
}
