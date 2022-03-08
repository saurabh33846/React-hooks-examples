import React, { useState } from "react";

export default function useArray(defaultVal) {
  const [array, setArray] = useState(defaultVal);

  function push(el) {
    setArray((a) => [...a, el]);
  }
  function filter(cb) {
    setArray((e) => e.filter(cb));
  }
  return { array, push, filter };
}
