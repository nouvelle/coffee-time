import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { addUnReadUrlListsAsync } from "../redux/redux";
import "../styles/styles.css";

class Input extends Component {
  // Click Button
  addURL = () => {
    const inputURL = document.getElementById("standard-basic").value;
    if (inputURL !== "") this.props.setUnReadUrlLists(inputURL);
    document.getElementById("standard-basic").value = "";
  };

  render() {
    return (
      <div className="inputArea">
        <form noValidate autoComplete="off">
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
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUnReadUrlLists: inputURL => dispatch(addUnReadUrlListsAsync(inputURL))
  };
};
export default connect(null, mapDispatchToProps)(Input);
