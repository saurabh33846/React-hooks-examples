import React, { useState, useEffect, useCallback } from "react";

export function useLocalStorage(key, defaultVal) {
  return useStorage(key, defaultVal, window.localStorage);
}
export function useSessionStorage(key, defaultVal) {
  return useStorage(key, defaultVal, window.sessionStorage);
}
function useStorage(key, defaultVal, storageType) {
  const [val, setVal] = useState(() => {
    const jsonVal = storageType.getItem(key);
    if (jsonVal !== null) {
      return JSON.parse(jsonVal);
    }
    if (typeof defaultVal === "function") {
      return defaultVal();
    }
    return defaultVal;
  });

  useEffect(() => {
    if (val === undefined) {
      return storageType.removeItem(key);
    }
    storageType.setItem(key, JSON.stringify(val));
  }, [key, val]);
  const removeValue = useCallback(() => {
    setVal(undefined);
  }, []);

  return [val, setVal, removeValue];
}
