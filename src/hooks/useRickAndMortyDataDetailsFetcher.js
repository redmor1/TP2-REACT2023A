import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// Opciones para la API_URL:
// https://rickandmortyapi.com/api/character
// https://rickandmortyapi.com/api/location
// https://rickandmortyapi.com/api/episode

export function useRickAndMortyDataDetailsFetcher(API_URL) {
  const { id } = useParams();

  const [data, setData] = useState();
  const [error, setError] = useState();

  async function getData() {
    try {
      const res = await fetch(`${API_URL}/${id}`);
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
