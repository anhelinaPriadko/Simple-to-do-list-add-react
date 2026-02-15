import React, { useState } from "react";

export function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);
  function handleOnClick() {
    if (isDone === true) setIsDone(false);
    else if (isDone === false) setIsDone(true);
  }
  return (
    <li
      onClick={handleOnClick}
      style={{ textDecoration: isDone ? "line-through" : "none" }}
    >
      {props.item}
    </li>
  );
}
