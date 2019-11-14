import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { addIncrementNo, addUnReadUrlLists } from "../redux/redux";
import "../styles/styles.css";

class Input extends Component {
  // Click Button
  addURL = () => {
    const inputURL = document.getElementById("standard-basic").value;
    this.props.addIncrementNo();
    if (inputURL !== "") this.props.setUnReadUrlLists(inputURL);
  };

  render() {
    return (
      <div className="inputArea">
        <form noValidate autoComplete="off">
          <div>
            <TextField
              id="standard-basic"
              className="inputArea"
              label="Please input URL"
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={this.addURL}
              className="addBtn"
            >
              ADD
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addIncrementNo: inputURL => dispatch(addIncrementNo()),
    setUnReadUrlLists: inputURL => dispatch(addUnReadUrlLists(inputURL))
  };
};
export default connect(null, mapDispatchToProps)(Input);
