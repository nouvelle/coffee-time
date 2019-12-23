import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "@material-ui/core/Container";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Icon from "@material-ui/core/Icon";
// import ListItemText from "@material-ui/core/ListItemText";
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
        <h1>Your clips history</h1>
        <div className="urllistArea">
          {readUrlLists ? (
            readUrlLists.map((readUrlList, i) => (
              <ListItem key={i}>
                <ListItemIcon>
                  <Icon>bookmarkborder</Icon>
                </ListItemIcon>
                {/* <ListItemAvatar>
                  <Avatar alt="Avatar" src={`../images/image.png`} />
                </ListItemAvatar> */}
                <Link href={readUrlList.url} target="_blank">
                  {readUrlList.url}
                </Link>
                {/* <ListItemText
                  className="date"
                  primary={this.changeDate(readUrlList.date)}
                /> */}
              </ListItem>
            ))
          ) : (
            <ListItem />
          )}
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
