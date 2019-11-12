import React, { Component } from "react";
import { connect } from "react-redux";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "./Input.jsx";
import { toggleUnReadUrlCheckBox } from "../redux/redux";
import "../styles/styles.css";

class ListContents extends Component {
  checkBtn = index => e => {
    console.log(index, e.target.checked);
    this.props.changeUnReadUrlCheckBox(index);
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
                onChange={this.checkBtn(unReadUrlList.index)}
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
const mapDispatchToProps = dispatch => {
  return {
    changeUnReadUrlCheckBox: index => dispatch(toggleUnReadUrlCheckBox(index))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListContents);
