import useAsync from "../9-useAsync/useAsync";
import { useCallback, useReducer, useState } from "react";
const DEFAULT_OPTIONS = {
  headers: { "Content-Type": "application/json" }
};
const reducerFunction = (state, action) => {
  switch (action.type) {
    case "FETCHING":
      return {
        status: "fetching",
        error: null,
        data: null
      };

    case "SUCCESS":
      return {
        status: "completed",
        error: null,
        data: action.data
      };

    case "ERROR":
      return {
        status: "completed",
        error: action.error,
        data: null
      };
    default:
      return {
        status: null,
        error: null,
        data: null
      };
  }
};

export default function useFetch(url, options, dependencies) {
  const [state, disptach] = useReducer(reducerFunction, {
    status: null,
    error: null,
    data: null
  });
  // const callFetch = useAsync(() => {
  //   return new Promise((resolve, reject) => {
  //     if (startFetch) {
  //       const result = fetch(url, { ...options });
  //       const jsonRes = result.json();
  //       if (result.ok) {
  //         return resolve(jsonRes);
  //       }
  //       return reject(jsonRes);
  //     }
  //   });
  // }, [startFetch]);

  const startFetching = useCallback(async () => {
    disptach({ type: "FETCHING" });
    const res = await fetch(url, { ...options, ...DEFAULT_OPTIONS });
    const jsonRes = await res.json();
    console.log(JSON.stringify(jsonRes));
    if (res.ok) {
      return disptach({ type: "SUCCESS", data: jsonRes });
    }
    return disptach({ type: "ERROR", error: jsonRes });
  }, [url, { options }, ...dependencies]);
  return { startFetching, ...state };
}
