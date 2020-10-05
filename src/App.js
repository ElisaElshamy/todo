import React, { useState } from "react";
import Todos from "./components/Todos";

import "./App.css";

function App() {
  const todolist = [
    {
      id: 1,
      title: "Take out the trash",
      completed: true,
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
  const markComplete = (id) => {
    console.log(id);
  };

  return (
    <div className="App">
      <Todos todos={todos} markComplete={markComplete} />
    </div>
  );
}

export default App;
