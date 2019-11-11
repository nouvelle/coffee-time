import React, { Component } from "react";
import "../styles/styles.css";

export default class ReadContents extends Component {
  render() {
    return (
      <div className="contents readContents">
        <div className="inputArea">
          <label>
            <input type="url" name="url" className="url" />
          </label>
          <button className="btn">ADD</button>
        </div>
        <div className="urllistArea">
          <div className="urlList">read - aaa</div>
          <div className="urlList">read - bbb</div>
        </div>
      </div>
    );
  }
}
