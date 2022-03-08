import React, { useState } from "react";
import usePrevious from "./usePrevious";

export default function PrevValComp() {
  const [count, setCount] = useState(1);
  const prevValue = usePrevious(count);
  return (
    <div>
      <p> {`${count} ${prevValue}`}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}
