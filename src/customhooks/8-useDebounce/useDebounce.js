import { useEffect, useState } from "react";
import useTimeout from "../2-useTimeout/useTimeout";

export default function useDebounce(callback, timer, dependencies) {
  const { reset, clear } = useTimeout(callback, timer);
  useEffect(() => {
    reset();
  }, [reset, ...dependencies]);
  useEffect(clear, []);
}
