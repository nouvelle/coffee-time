import React, { Component } from "react";
import { connect } from "react-redux";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "./Input.jsx";
import "../styles/styles.css";

class ListContents extends Component {
  checkBtn = date => {
    // console.log(date);
  };
  render() {
    const unReadUrlLists = this.props.unReadUrlLists;

    return (
      <div className="contents listContents">
        <Input />
        <div className="urllistArea">
          {console.log("aa", unReadUrlLists)}
          {unReadUrlLists.map((unReadUrlList, i) => (
            <div className="urlList" key={i}>
              <Checkbox
                checked={unReadUrlList.checked}
                onClick={this.checkBtn(unReadUrlList.date)}
                // value="checkedB"
                color="primary"
              />
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
