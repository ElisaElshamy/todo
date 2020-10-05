import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { PropTypes } from "prop-types";

function Todos() {
  const todolist = [
    {
      id: 1,
      title: "Take out the trash",
      completed: false,
    },
    {
      id: 2,
      title: "Dinner with Raiden",
      completed: false,
    },
    {
      id: 3,
      title: "Meeting with boss",
      completed: false,
    },
  ];
  const [todos, setTodos] = useState(todolist);
  return todos.map((todo) => <TodoItem key={todo.id} todo={todo} />);
}

Todos.propTypes = {
  todo: PropTypes.array,
};

export default Todos;
