import React from "react";
import ReactDOM from "react-dom";
import ToDoApp from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./styles/index.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<ToDoApp />, document.getElementById("root"));

serviceWorker.register();
