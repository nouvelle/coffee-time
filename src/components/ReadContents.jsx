import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/styles.css";

class ReadContents extends Component {
  render() {
    const readUrlLists = this.props.readUrlLists;

    return (
      <div className="contents readContents">
        <h1>Hello, it's coffee time!</h1>
        <div className="urllistArea">
          {console.log("all READ list", readUrlLists)}
          {readUrlLists.map((readUrlList, i) => (
            <div className="urlList" key={i}>
              <div className="url">
                <a href={`${readUrlList.url}`}>{readUrlList.url}</a>
              </div>
              <div className="date">{readUrlList.date}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    readUrlLists: state.readUrlLists
  };
};
export default connect(mapStateToProps)(ReadContents);
