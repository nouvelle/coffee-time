import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/styles.css";

class ListContents extends Component {
  render() {
    const unReadUrlLists = this.props.unReadUrlLists;

    return (
      <div className="contents listContents">
        <div className="inputArea">
          <label>
            <input type="url" name="url" className="urlInput" />
          </label>
          <button className="btn">ADD</button>
        </div>
        <div className="urllistArea">
          {unReadUrlLists.map((unReadUrlList, i) => (
            <div className="urlList" key={i}>
              <div className="url">
                <a href={`${unReadUrlList.url}`}>{unReadUrlList.name}</a>
              </div>
              <div className="date">{unReadUrlList.date}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    unReadUrlLists: state.unReadUrlLists
  };
};
export default connect(mapStateToProps)(ListContents);
