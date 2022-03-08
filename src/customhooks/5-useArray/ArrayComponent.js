import React from "react";
import useArray from "./useArray";
export default function ArrayComp() {
  const { array, push, filter } = useArray([1, 2, 3, 5]);
  return (
    <div>
      <span> {array} </span>
      <button onClick={() => push(7)}> Add 7</button>
      <button onClick={() => filter((num) => num < 5)}>
        {" "}
        Filter numbers less 5
      </button>
    </div>
  );
}
