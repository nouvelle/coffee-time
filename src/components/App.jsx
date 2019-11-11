import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header.jsx";
import ListContents from "./ListContents.jsx";
import ReadContents from "./ReadContents.jsx";
import HistoryContents from "./HistoryContents.jsx";
// import { getUnReadUrlListsAsync } from "../redux/redux";
import "../styles/styles.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "List",
      urlLists: []
    };
  }

  componentDidMount() {
    // this.props.getUnReadUrlListsAsync();
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
// const mapDispatchToProps = dispatch => {
//   return {
//     getUnReadUrlListsAsync: () => dispatch(getUnReadUrlListsAsync)
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default connect(mapStateToProps)(App);
