import React, { Component } from "react";

export default class Contents extends Component {
  render() {
    return (
      <div className="contents">
        <div className="inputArea">
          <label>
            <input type="url" name="url" className="url" />
          </label>
          <button className="btn">ADD</button>
        </div>
        <div className="urllistArea">
          <div className="urlList">aaa</div>
          <div className="urlList">bbb</div>
        </div>
      </div>
    );
  }
}
