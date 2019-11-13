import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "@material-ui/core/Container";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Link from "@material-ui/core/Link";
import "../styles/styles.css";

class ReadContents extends Component {
  changeDate = date => {
    const d = new Date(Number(date));
    const dispDate = d.toLocaleDateString();
    return dispDate;
  };
  render() {
    const readUrlLists = this.props.readUrlLists;

    return (
      <Container>
        <h1></h1>
        <div className="urllistArea">
          {console.log("all READ list", readUrlLists)}
          {readUrlLists.map((readUrlList, i) => (
            <ListItem key={i}>
              <ListItemAvatar>
                <Avatar alt="Avatar" src={`../images/image.png`} />
              </ListItemAvatar>
              <Link href={readUrlList.url} target="_blank">
                {readUrlList.url}
              </Link>
              {/* <ListItemText
                className="date"
                primary={this.changeDate(readUrlList.date)}
              /> */}
            </ListItem>
          ))}
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    readUrlLists: state.readUrlLists
  };
};
export default connect(mapStateToProps)(ReadContents);
