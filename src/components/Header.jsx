import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="listLink link">LIST</div>
        <div className="readLink link">READ</div>
        <div className="historyLink link">HISTORY</div>
      </div>
    );
  }
}
