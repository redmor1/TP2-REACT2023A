import { useEffect, useState } from "react";
import Episodio from "../components/Episodio";
import Navbar from "../components/Navbar";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";

function EpisodiosScreen() {
  const [episodios, setEpisodios] = useState();
  const [error, setError] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();

  async function getEpisodes(page) {
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/episode?page=${page}`
      );
      const json = await res.json();
      if (json.error) {
        setError(json.error);
      }
      setEpisodios(json.results);
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
    getEpisodes(currentPage);
  }, [currentPage]);

  if (error) {
    return (
      <>
        <Navbar />
        <Error error={error} />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container row">
        {episodios ? (
          episodios.map((episodio) => {
            return (
              <Episodio
                key={episodio.id}
                id={episodio.id}
                name={episodio.name}
                episode={episodio.episode}
              />
            );
          })
        ) : (
          <Loader />
        )}
        <Pagination
          nextPage={nextPage}
          prevPage={prevPage}
          currentPage={currentPage}
        />
      </div>
    </>
  );
}

export default EpisodiosScreen;
