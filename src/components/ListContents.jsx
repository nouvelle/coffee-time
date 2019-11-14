import React, { Component } from "react";
import { connect } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Container from "@material-ui/core/Container";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
// import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Link from "@material-ui/core/Link";
import Icon from "@material-ui/core/Icon";
import Input from "./Input.jsx";
import Fab from "@material-ui/core/Fab";
import { deleteUnReadUrlLists, addReadUrlListsAsync } from "../redux/redux";
import "../styles/styles.css";

class ListContents extends Component {
  changeRead = date => {
    const unReadUrlLists = this.props.unReadUrlLists;

    // ADD TO READ LIST (= DELETE FROM UN READ LIST)
    const newReadList = unReadUrlLists.filter(
      unReadUrlList => date === unReadUrlList.date
    );
    console.log("newReadList", newReadList);
    this.props.addReadUrlLists(newReadList);

    // STILL UN READ LIST
    const nonDeleteList = unReadUrlLists.filter(
      unReadUrlList => date !== unReadUrlList.date
    );
    console.log("nonDeleteList", nonDeleteList);
    this.props.deleteUnReadUrlLists(nonDeleteList);
  };
  changeDate = date => {
    const d = new Date(Number(date));
    const dispDate = d.toLocaleDateString();
    return dispDate;
  };
  render() {
    const unReadUrlLists = this.props.unReadUrlLists;

    return (
      <Container>
        <Input />
        <List>
          {console.log("all list", unReadUrlLists)}
          {unReadUrlLists.map((unReadUrlList, i) => (
            <ListItem key={i}>
              <ListItemAvatar>
                <Avatar alt="Avatar" src={`../images/image.png`} />
              </ListItemAvatar>
              <Link href={unReadUrlList.url} target="_blank">
                {unReadUrlList.url}
              </Link>
              {/* <ListItemText
                className="date"
                primary={this.changeDate(unReadUrlList.date)}
              /> */}
              <ListItemSecondaryAction>
                <Fab
                  size="small"
                  color="secondary"
                  aria-label="add"
                  onClick={() => this.changeRead(unReadUrlList.date)}
                >
                  <Icon>check</Icon>
                </Fab>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Container>
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
    deleteUnReadUrlLists: nonDeleteList =>
      dispatch(deleteUnReadUrlLists(nonDeleteList)),
    addReadUrlLists: newReadList => dispatch(addReadUrlListsAsync(newReadList))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListContents);
