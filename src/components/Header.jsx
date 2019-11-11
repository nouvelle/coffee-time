import React, { Component } from "react";
import { connect } from "react-redux";
import { changeCurrentView } from "../redux/redux";
import "../styles/styles.css";

class Header extends Component {
  changeViewList = () => {
    console.log("Change to LIST");
    this.props.setCurrentView("LIST");
  };
  changeViewRead = () => {
    console.log("Change to READ");
    this.props.setCurrentView("READ");
  };
  changeViewHistory = () => {
    console.log("Change to HISTORY");
    this.props.setCurrentView("HISTORY");
  };

  render() {
    return (
      <div className="header">
        <div onClick={this.changeViewList} className="listLink link">
          LIST
        </div>
        <div onClick={this.changeViewRead} className="readLink link">
          READ
        </div>
        <div onClick={this.changeViewHistory} className="historyLink link">
          HISTORY
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentView: newView => dispatch(changeCurrentView(newView))
  };
};

export default connect(null, mapDispatchToProps)(Header);
