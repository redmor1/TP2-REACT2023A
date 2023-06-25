import { useState, useEffect } from "react";

export function useRickAndMortyDataFetcher() {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();

  async function getData(page) {
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/episode?page=${page}`
      );
      const json = await res.json();
      if (json.error) {
        setError(json.error);
      }
      setData(json.results);
      setTotalPages(json.info.pages);
    } catch (e) {
      setError(e.message);
      console.log(e);
    }
  }

  function nextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function prevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  useEffect(() => {
    getData(currentPage);
  }, [currentPage]);

  return { data, error, currentPage, totalPages, nextPage, prevPage };
}
