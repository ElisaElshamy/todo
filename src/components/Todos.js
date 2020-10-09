import React from "react";
import TodoItem from "./TodoItem";
import { PropTypes } from "prop-types";

function Todos(props) {
  return props.todos.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      markComplete={props.markComplete}
      delTodo={props.delTodo}
    />
  ));
}

Todos.propTypes = {
  props: PropTypes.array,
  todo: PropTypes.object,
  markComplete: PropTypes.func,
  delTodo: PropTypes.func,
};

export default Todos;
