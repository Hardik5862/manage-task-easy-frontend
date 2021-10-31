import { useCallback, useState } from "react";

export const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (url, options, onSuccess) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, options);
      const json = await response.json();
      if (!response.ok) {
        throw json;
      }

      setData(json);
      setLoading(false);

      if (onSuccess) {
        onSuccess(json);
      }
    } catch (error) {
      setError(error.message || "Something went wrong!");
      setLoading(false);
    }
  }, []);

  return { data, loading, error, fetchData };
};
