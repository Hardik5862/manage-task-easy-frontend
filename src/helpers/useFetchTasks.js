import { useCallback, useState } from "react";

export const useFetch = (options) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(
    async (status, search) => {
      setLoading(true);
      setError(null);

      const statusStr = status.length > 0 ? `?status=${status}` : "";
      const searchStr = search.length > 0 ? `&search=${search}` : "";

      const url = `${process.env.REACT_APP_API_URL}/tasks${statusStr}${searchStr}`;

      try {
        const response = await fetch(url, options);
        const json = await response.json();
        if (!response.ok) {
          throw json;
        }
        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error.message || "Something went wrong!");
        setLoading(false);
      }
    },
    [options]
  );

  return { data, loading, error, fetchData };
};
