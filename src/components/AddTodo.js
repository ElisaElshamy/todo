import React, { useState } from "react";

export default function AddTodo(props) {
  const todo = {
    title: "",
  };

  const onChange = (e) => {
    setTodoItem({ [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.addTodo(todoItem.title);
    setTodoItem({ [e.target.name]: "" });
  };

  const [todoItem, setTodoItem] = useState(todo);
  return (
    <form onSubmit={onSubmit} style={{ display: "flex" }}>
      <input
        type="text"
        name="title"
        style={{ flex: 10, padding: "5px" }}
        placeholder="Add Todo ..."
        value={todo.title}
        onChange={onChange}
      />
      <input type="submit" value="Submit" className="btn" style={{ flex: 1 }} />
    </form>
  );
}
