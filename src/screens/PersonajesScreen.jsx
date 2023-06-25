import Navbar from "../components/Navbar";
import Personaje from "../components/Personaje";
import Error from "../components/Error";
import Loader from "../components/Loader";
import { useRickAndMortyDataFetcher } from "../hooks/useRickAndMortyDataFetcher";
import Pagination from "../components/Pagination";

function Personajes() {
  const {
    data: characters,
    error,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
  } = useRickAndMortyDataFetcher("https://rickandmortyapi.com/api/character");

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
