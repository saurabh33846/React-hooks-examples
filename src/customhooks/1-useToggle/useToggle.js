import { useState } from "react";

export default function useToggle(defaultVal) {
  const [value, setValue] = useState(defaultVal);

  function toggleValue(value) {
    setValue((curValue) => (typeof value === "boolean" ? value : !curValue));
  }
  return [value, toggleValue];
}
