import React from "react";
import { PropTypes } from "prop-types";

function TodoItem(props) {
  return <div>{props.todo.title}</div>;
}

TodoItem.propTypes = {
  props: PropTypes.object,
};

export default TodoItem;
