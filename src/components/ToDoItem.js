import React from "react";
import { ListGroupItem } from "shards-react";
import "../styles/ToDoItem.css";

class ToDoItem extends React.Component {
  render() {
    return (
      <ListGroupItem className="ListItem">
        {this.props.item}{" "}
        <span
          style={{ float: "right", color: "red", cursor: "pointer" }}
          onClick={this.handleDelete}
        >
          <i className="far fa-trash-alt"></i>
        </span>
      </ListGroupItem>
    );
  }
  handleDelete = () => {
    this.props.onDelete(this.props.item);
  };
}

export default ToDoItem;
