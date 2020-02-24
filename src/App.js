import React from "react";
import "./styles/App.css";
import { Container, ListGroup, ListGroupItem } from "shards-react";
import ToDoItem from "./components/ToDoItem";
import AddItem from "./components/AddItem";

class ToDoApp extends React.Component {
  state = {
    todos: [
      "Buy Some Flowers",
      "Play Cricket",
      "Do Not Play Pubg",
      "Create React Todo App",
      "Take Meal"
    ]
  };

  onDelete = item => {
    var updatedTodos = this.state.todos.filter(function(val, index) {
      return item !== val;
    });
    this.setState({
      todos: updatedTodos
    });
  };

  onAdd = item => {
    var updatedTodos = this.state.todos;
    updatedTodos.push(item);
    this.setState({
      todos: updatedTodos
    });
  };

  render() {
    var todos = this.state.todos;
    todos = todos.map(
      function(item, index) {
        return <ToDoItem item={item} key={index} onDelete={this.onDelete} />;
      }.bind(this)
    );

    return (
      <div>
        <Container className="Container">
          <h2>My Todo List</h2>
          <ListGroup className="ListGroup">
            {this.state.todos.length > 0 ? (
              todos
            ) : (
              <ListGroupItem className="ListItem" style={{ color: "brown" }}>
                No Todos, Add Some Todos
              </ListGroupItem>
            )}
          </ListGroup>
          <AddItem onAdd={this.onAdd} />
        </Container>
      </div>
    );
  }
}

export default ToDoApp;
