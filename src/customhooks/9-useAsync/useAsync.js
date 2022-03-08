import React, { useState, useEffect, useCallback } from "react";

export default function useAsync(taskPromise, dependencies) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);
  const [result, setResult] = useState(undefined);

  const memoizedCb = useCallback(async () => {
    setLoading(true);
    setError(undefined);
    setResult(undefined);

    try {
      let res = await taskPromise();
      setResult(res);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [...dependencies]);

  useEffect(() => {
    memoizedCb();
  }, [memoizedCb]);

  return { loading, result, error };
}
