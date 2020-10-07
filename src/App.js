import React, { useState } from "react";
import Todos from "./components/Todos";

import "./App.css";

function App() {
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

  // Toggle Complete
  const markComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  // Delete Todo
  const delTodo = (id) => {
    console.log(id);
  };

  return (
    <div className="App">
      <Todos todos={todos} markComplete={markComplete} delTodo={delTodo} />
    </div>
  );
}

export default App;
