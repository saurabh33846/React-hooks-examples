import { useRef, useCallback, useEffect } from "react";

export default function useTimeout(cb, delay) {
  const cbRef = useRef(cb);
  const timeoutRef = useRef(null);
  const set = useCallback(() => {
    timeoutRef.current = setTimeout(cbRef.current, delay);
  }, [delay]);

  useEffect(() => {
    cbRef.current = cb;
  }, [cb]);

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  const reset = useCallback(() => {
    clear();
    set();
  }, [set, clear]);

  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  return { reset, clear };
}
