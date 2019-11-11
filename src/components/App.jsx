import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header.jsx";
import ListContents from "./ListContents.jsx";
import ReadContents from "./ReadContents.jsx";
import HistoryContents from "./HistoryContents.jsx";
import "../styles/styles.css";

class App extends Component {
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

          {(() => {
            if (this.props.currentView === "LIST") {
              return <ListContents />;
            } else if (this.props.currentView === "READ") {
              return <ReadContents />;
            } else {
              return <HistoryContents />;
            }
          })()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentView: state.currentView
  };
};

export default connect(mapStateToProps)(App);
