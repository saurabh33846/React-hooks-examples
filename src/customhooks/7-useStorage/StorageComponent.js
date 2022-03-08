import React, { useEffect, useState } from "react";
import {} from "../7-useStorage/useStorage";
import useDebounce from "../8-useDebounce/useDebounce";
import { useLocalStorage } from "./useStorage";
import useAsync from "../9-useAsync/useAsync";
import useFetch from "../10-useFetch/useFetch";

export default function StorageComponent() {
  const [inpVal, setInpVal] = useState("");
  const [value, setValue, removeValue] = useLocalStorage("inputVal", "");
  const [id, setId] = useState("1");
  // const {} = useFetch()
  const {
    startFetching,
    status,
    error: todoError,
    data
  } = useFetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {}, [id]);

  useEffect(() => {
    if (id) startFetching();
  }, [id]);

  useDebounce(() => {}, 1000, [id]);

  const { loading, result, error } = useAsync(() => {
    return new Promise((resolve, reject) => {
      let bResolve = false;
      setTimeout(() => {
        if (bResolve) {
          return resolve("Hello i am resolved");
        }
        return reject("I am rejected");
      }, 1000);
    });
  }, []);

  useDebounce(
    () => {
      alert(inpVal);
    },
    2000,
    [inpVal]
  );
  return (
    <div>
      <input onChange={(ev) => setInpVal(ev.target.value)} />
      {` value is ${inpVal}`}
      <button
        onClick={() => {
          setValue(inpVal);
        }}
      >
        {" "}
        Save value
      </button>

      <button
        style={{ marginLeft: "10px" }}
        onClick={() => {
          removeValue();
        }}
      >
        {" "}
        Remove value
      </button>
      <div style={{ marginTop: "16px", border: "1px solid black" }}>
        <p> {`IsLoading ${loading}`}</p>
        <p>{`error is ${error}`}</p>
        <p>{`result is ${result}`}</p>
      </div>

      <div style={{ marginTop: "16px", border: "1px solid black" }}>
        <p> {`Enter TodoId `}</p>
        <p>
          <input
            onChange={(ev) => {
              setId(ev.target.value);
            }}
          />
        </p>
        <p>{`status is ${status}`}</p>
        <p>{`error is ${todoError}`}</p>
        <p>{`data is ${JSON.stringify(data)}`}</p>
      </div>
    </div>
  );
}
