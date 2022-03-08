import React, { useEffect, useState } from "react";
import useUpdateEffect from "./useUpdateEffect";
export default function UseUpdateComp() {
  const [count, setCount] = useState(10);
  useUpdateEffect(() => {
    alert(count);
  }, [count]);
  return (
    <>
      <button
        onClick={() => {
          setCount((c) => c + 1);
        }}
      >
        {count}{" "}
      </button>
    </>
  );
}
