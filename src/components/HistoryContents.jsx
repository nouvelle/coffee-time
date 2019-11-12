import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import "../styles/styles.css";
import "../styles/chart.css";

export default class HistoryContents extends Component {
  render() {
    return (
      <Container>
        <div className="chartArea"></div>
      </Container>
    );
  }
}
