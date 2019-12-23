import React, { Component } from "react";
import { connect } from "react-redux";
import { changeCurrentView } from "../redux/redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import "../styles/styles.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabList: ["CLIP", "READ", "HISTORY"]
    };
  }
  changeCurrentView = newView => {
    this.props.setCurrentView(newView);
  };

  render() {
    const { tabList } = this.state;
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" onClick={this.changeViewList}>
            <img src={`../favicon.ico`} className="logo" alt="logo" />
            <span className="title">coffee time</span>
          </Typography>
          <Tabs>
            {tabList.map((tabs, i) => {
              return (
                <Tab
                  label={tabs}
                  onClick={() => this.changeCurrentView(tabs)}
                  key={i}
                  value={i}
                />
              );
            })}
          </Tabs>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentView: newView => dispatch(changeCurrentView(newView))
  };
};

export default connect(null, mapDispatchToProps)(Header);
