import React, { useRef, useImperativeHandle } from "react";

import classes from "./Input.module.css";

const Input = (props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <div
      className={`${classes.control} ${props.isValid === false ? classes.invalid : ""
        }`}
    >
      <label htmlFor={props.for}>{props.content}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default React.forwardRef(Input);