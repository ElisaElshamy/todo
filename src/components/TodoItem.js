import React from "react";
import { PropTypes } from "prop-types";

function TodoItem(props) {
  const { id, title, completed } = props.todo;
  const getStyle = () => {
    const textStyle = completed ? "line-through" : "none";

    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: textStyle,
    };
  };

  return (
    <div style={getStyle()}>
      <input type="checkbox" onChange={props.markComplete.bind(this, id)} />{" "}
      {title}
    </div>
  );
}

TodoItem.propTypes = {
  props: PropTypes.object,
};

export default TodoItem;
