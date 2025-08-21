import { useEffect, useState } from "react";

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    const fetchBlogs = async () => {
      try {
        setIsPending(true);
        const response = await fetch(url, { signal });
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        setData(data);
      } catch (error: any) {
        // Check if the error is due to the fetch being aborted
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
          return;
        }
        setError(error.message);
      } finally {
        setIsPending(false);
      }
    };

    const timeoutId = setTimeout(() => {
      fetchBlogs();
    }, 1000); // Simulate a delay

    return () => {
      clearTimeout(timeoutId);
      abortController.abort(); // Cleanup function to abort fetch on component unmount
    };
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
