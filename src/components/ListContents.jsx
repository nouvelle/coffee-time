import React, { Component } from "react";
import { connect } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Container from "@material-ui/core/Container";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Link from "@material-ui/core/Link";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import Button from "@material-ui/core/Button";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Input from "./Input.jsx";
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
              <ListItemIcon>
                <BookmarkIcon color="primary"></BookmarkIcon>
              </ListItemIcon>
              <Link href={unReadUrlList.url} target="_blank">
                {unReadUrlList.url}
              </Link>
              {/* <ListItemText
                className="date"
                primary={this.changeDate(unReadUrlList.date)}
              /> */}
              <ListItemSecondaryAction>
                <Button
                  variant="outlined"
                  size="small"
                  color="primary"
                  onClick={() => this.changeRead(unReadUrlList.date)}
                >
                  READ
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Container>
    );
  }
}

// <div className={classes.demo}>
//   <List dense={dense}>
//     {generate(
//       <ListItem>
//         <ListItemIcon>
//           <FolderIcon />
//         </ListItemIcon>
//         <ListItemText
//           primary="Single-line item"
//           secondary={secondary ? "Secondary text" : null}
//         />
//       </ListItem>
//     )}
//   </List>
// </div>

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
