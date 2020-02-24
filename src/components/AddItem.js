import React from "react";
import { Form } from "shards-react";
import "../styles/AddItem.css";

class AddItem extends React.Component {
  render() {
    return (
      <div>
        <Form className="AddItem" onSubmit={this.handleSubmit}>
          <input
            type="text"
            ref="newItem"
            placeholder="Input a task and hit enter"
            required
          />
        </Form>
      </div>
    );
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.onAdd(this.refs.newItem.value);
    this.refs.newItem.value = "";
  };
}

export default AddItem;
