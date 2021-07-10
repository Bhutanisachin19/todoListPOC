import React from "react";
import logo from "../logo.svg";

import TodoList from "./TodoList";

const TodoApp = () => {
  return (
    <div className="Top-div jumbotron">
      <img src={logo} width="170" height="170" className="logo" alt="logo" />

      <h1 className="app-title"> TODO App </h1>

      <br></br>

      <TodoList />
    </div>
  );
};

export default TodoApp;
