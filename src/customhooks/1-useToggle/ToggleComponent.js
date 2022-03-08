import React from "react";
import useToggle from "./useToggle";
const ToggleComponent = () => {
  const [value, toggleValue] = useToggle(false);
  return (
    <>
      <p> {value.toString()}</p>
      <button onClick={toggleValue}> Toggle </button>
      <button onClick={() => toggleValue(true)}> Make True</button>

      <button onClick={() => toggleValue(false)}> Make False</button>
    </>
  );
};

export default ToggleComponent;
