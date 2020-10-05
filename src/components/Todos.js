import React from "react";
import TodoItem from "./TodoItem";
import { PropTypes } from "prop-types";

function Todos(props) {
  return props.todos.map((todo) => <TodoItem key={todo.id} todo={todo} />);
}

Todos.propTypes = {
  props: PropTypes.array,
};

export default Todos;
