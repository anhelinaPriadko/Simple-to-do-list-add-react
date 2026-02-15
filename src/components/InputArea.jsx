import React from "react";

export function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.handleInput} type="text" value={props.inText} />
      <button onClick={props.onAdded}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
