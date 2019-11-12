import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import "../styles/styles.css";

export default class HistoryContents extends Component {
  render() {
    return (
      <Container>
        <div className="chartArea">
          <img src={`../images/history.gif`} className="sbuxImg" />
        </div>
      </Container>
    );
  }
}
