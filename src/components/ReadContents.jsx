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
  render() {
    const readUrlLists = this.props.readUrlLists;
    const preventDefault = event => event.preventDefault();

    return (
      <Container>
        <h1>Hello, it's coffee time!</h1>
        <div className="urllistArea">
          {console.log("all READ list", readUrlLists)}
          {readUrlLists.map((readUrlList, i) => (
            <ListItem key={i}>
              <ListItemAvatar>
                <Avatar alt="Avatar" src={`../images/image.png`} />
              </ListItemAvatar>
              <Link href={readUrlList.url} onClick={preventDefault}>
                {readUrlList.url}
              </Link>
              <ListItemText className="date" primary={readUrlList.date} />
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
