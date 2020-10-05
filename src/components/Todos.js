import React, { useState } from "react";
import TodoItem from "./TodoItem";

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
  return todos.map((todo) => <TodoItem todo={todo} />);
}

export default Todos;
