// src/hooks/useApiData.js
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useApiData = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      //axios use case
      const result1 = await axios.get(url);
      //fetch use case
      const response = await fetch(url);
      const result = await response.json();
      console.log("FETCH=", result, " axios=", result1.data);
      setData(result1.data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error, loading };
};

export default useApiData;
