import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";

import "./TodoList.css";

import "bootstrap/dist/css/bootstrap.min.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const [edit, setEdit] = useState({
    id: null,
    value: "",
    quantity: "",
  });

  const addTodo = todo => {
    //console.log("Nnew todo is ");
    //console.log(todo);

    console.log("ADD TODO ");

    if (todo.text.length <= 0 || todo.quantity == "") return;

    const newTodos = [todo, ...todos];
    //console.log("Todo ", todo);
    //console.log("...todo" , ...todos); // ...todos is old state
    setTodos(newTodos);
    //console.log(...todos);
  };

  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id);
    setTodos(removeArr);

    //console.log("Remove todo called");
  };

  const updatetodo = (id, newValue) => {
    if (newValue.text.length > 0 && newValue.quantity != "")
      setTodos(prev => prev.map(item => (item.id === id ? newValue : item)));
    else return;
  };

  const submitUpdate = value => {
    console.log("submitUpdate in TodoList.js");
    updatetodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
      quantity: "",
    });
  };

  if (edit.id) {
    return (
      <div>
        <TodoForm edit={edit} isEdit={true} onSubmit={submitUpdate} />
      </div>
    );
  }

  /*
    useEffect(()=>{
        console.log("Todo List");
    })
    */

  return (
    <div className="Top-div ">
      <TodoForm onSubmit={addTodo} todos={todos} />

      <div>
        <ul>
          {todos.map(item => {
            return (
              //to loop through value should be unique
              <div key={item.id} className="list-items">
                <li key={item.id} className="li-items">
                  {"Item Name : " + item.text + "   "}

                  {" ,  Item Quantity : " + item.quantity}

                  <button
                    className="btn  btn-outline-primary mt-2 mb-2"
                    onClick={() =>
                      setEdit({
                        id: item.id,
                        value: item.text,
                        quantity: item.quantity,
                      })
                    }
                  >
                    Update
                  </button>

                  <button
                    className="btn  btn-outline-danger mt-2 mb-2"
                    onClick={() => removeTodo(item.id)}
                  >
                    Delete
                  </button>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
