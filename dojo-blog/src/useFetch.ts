import React from "react";
import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setIsPending(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setData(data);
      } catch (error: any) {
        setError(error.message);
        setData([]);
      } finally {
        setIsPending(false);
      }
    };
    setTimeout(() => {
      fetchBlogs();
      setIsPending(false);
    }, 1000); // Simulate a delay
  }, []);
  return { data, isPending, error };
};

export default useFetch;
