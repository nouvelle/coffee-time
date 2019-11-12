import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "./Input.jsx";
import { toggleUnReadUrlCheckBox, deleteUnReadUrlLists } from "../redux/redux";
import "../styles/styles.css";

class ListContents extends Component {
  checkBtn = indexVal => e => {
    const unReadUrlLists = this.props.unReadUrlLists;
    let index;
    unReadUrlLists.forEach((unReadUrlLists, i) => {
      if (unReadUrlLists.index === indexVal) index = i;
    });
    this.props.changeUnReadUrlCheckBox(index);
  };
  changeRead = () => {
    const unReadUrlLists = this.props.unReadUrlLists;
    const nonDeleteList = unReadUrlLists.filter(
      unReadUrlList => !unReadUrlList.checked
    );
    if (nonDeleteList.length !== unReadUrlLists.length)
      this.props.deleteUnReadUrlLists(nonDeleteList);
  };
  render() {
    const unReadUrlLists = this.props.unReadUrlLists;

    return (
      <div className="contents listContents">
        <Input />
        <Button
          variant="contained"
          color="secondary"
          onClick={this.changeRead}
          className="changeRead"
        >
          CHANGE TO READ
        </Button>
        <div className="urllistArea">
          {console.log("all list", unReadUrlLists)}
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
    changeUnReadUrlCheckBox: index => dispatch(toggleUnReadUrlCheckBox(index)),
    deleteUnReadUrlLists: nonDeleteList =>
      dispatch(deleteUnReadUrlLists(nonDeleteList))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListContents);
