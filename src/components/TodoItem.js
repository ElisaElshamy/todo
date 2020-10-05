import React from "react";
import { PropTypes } from "prop-types";

function TodoItem(props) {
  const getStyle = () => {
    const textStyle = props.todo.completed ? "line-through" : "none";

    return { textDecoration: textStyle };
  };

  return <div style={getStyle()}>{props.todo.title}</div>;
}

TodoItem.propTypes = {
  props: PropTypes.object,
};

export default TodoItem;
