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
      <button style={btnStyle}>x</button>
    </div>
  );
}

TodoItem.propTypes = {
  props: PropTypes.object,
};

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right",
};

export default TodoItem;
