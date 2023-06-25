import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function useRickAndMortyDataDetailsFetcher() {
  const { id } = useParams();

  const [data, setData] = useState();
  const [error, setError] = useState();

  async function getData() {
    try {
      const res = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
      const json = await res.json();
      if (json.error) {
        setError(json.error);
      }
      setData(json);
    } catch (e) {
      setError(e.message);
      console.log(e);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return { data, error };
}
