import React, { Component } from "react";
import "../styles/styles.css";

export default class ListContents extends Component {
  render() {
    return (
      <div className="contents listContents">
        <div className="inputArea">
          <label>
            <input type="url" name="url" className="url" />
          </label>
          <button className="btn">ADD</button>
        </div>
        <div className="urllistArea">
          <div className="urlList">list - aaa</div>
          <div className="urlList">list - bbb</div>
        </div>
      </div>
    );
  }
}
