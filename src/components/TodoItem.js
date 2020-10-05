import React from "react";
import { PropTypes } from "prop-types";

function TodoItem(props) {
  const getStyle = () => {
    const textStyle = props.todo.completed ? "line-through" : "none";

    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: textStyle,
    };
  };

  const markComplete = (e) => {
    console.log(props);
  };

  return (
    <div style={getStyle()}>
      <input type="checkbox" onChange={markComplete.bind()} />{" "}
      {props.todo.title}
    </div>
  );
}

TodoItem.propTypes = {
  props: PropTypes.object,
};

export default TodoItem;
