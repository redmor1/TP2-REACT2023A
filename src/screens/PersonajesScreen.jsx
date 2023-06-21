import Navbar from "../components/Navbar";
import Personaje from "../components/Personaje";
import Error from "../components/Error";
import Loader from "../components/Loader";
import { useState, useEffect } from "react";
import Pagination from "../components/Pagination";

function Personajes() {
  const [characters, setCharacters] = useState();
  const [error, setError] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();

  async function getCharacters(page) {
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const json = await res.json();
      if (json.error) {
        setError(json.error);
      }
      setCharacters(json.results);
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
    getCharacters(currentPage);
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
      <div className="container row justify-content-center">
        {characters ? (
          characters.map((character) => {
            return (
              <Personaje
                key={character.id}
                id={character.id}
                image={character.image}
                name={character.name}
                species={character.species}
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

export default Personajes;
