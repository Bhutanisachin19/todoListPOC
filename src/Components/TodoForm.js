import React, { useEffect, useRef, useState } from "react";
import Search from "./Search";

import "./TodoList.css";

const TodoForm = props => {
  console.log("PROPS TODOFORM");
  console.log(props);

  const [input, setinput] = useState("");

  const [inputQ, setinputQ] = useState("");

  const inputRef = useRef(null);

  /*
    useEffect(() => {
        inputRef.current.focus();
    })
    */

  const handleSubmit = e => {
    e.preventDefault(); //stops form from bring submitted

    console.log("handle submit in todo form");

    //called after the  form submits
    props.onSubmit({
      id: Date.now(),
      text: input,
      quantity: inputQ,
    });

    setinput(""); //sets input as empty after clickling add todo
    setinputQ("");
  };

  const handleChange = e => {
    setinput(e.target.value);
  };

  const handleChangeNumber = e => {
    setinputQ(e.target.value);
  };

  return (
    <div>
      {props.isEdit ? (
        <h3 className="Edit">Edit Here </h3>
      ) : (
        <Search todos={props.todos} />
      )}

      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          className="Todo-input1"
          type="text"
          onChange={handleChange}
          placeholder={props.isEdit ? props.edit.value : "Add a todo"}
          value={input}
          name="text"
        />
        <input
          className="Todo-input2"
          type="number"
          onChange={handleChangeNumber}
          placeholder={props.isEdit ? props.edit.quantity : "Quantity"}
          value={inputQ}
          name="quantity"
        />
        <button className="btn  btn-outline-info mt-2 mb-2">Add todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
