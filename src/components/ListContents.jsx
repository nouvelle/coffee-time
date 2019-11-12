import React, { Component } from "react";
import { connect } from "react-redux";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "./Input.jsx";
import "../styles/styles.css";

class ListContents extends Component {
  render() {
    const unReadUrlLists = this.props.unReadUrlLists;

    return (
      <div className="contents listContents">
        <Input />
        <div className="urllistArea">
          {console.log(unReadUrlLists)}
          {unReadUrlLists.map((unReadUrlList, i) => (
            <div className="urlList" key={i}>
              <Checkbox
                // checked={state.checkedB}
                // onChange={handleChange("checkedB")}
                value="checkedB"
                color="primary"
                inputProps={{
                  "aria-label": "secondary checkbox"
                }}
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
