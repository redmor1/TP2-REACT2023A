import { useRickAndMortyDataFetcher } from "../hooks/useRickAndMortyDataFetcher";
import Episodio from "../components/Episodio";
import Navbar from "../components/Navbar";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";

function EpisodiosScreen() {
  const {
    data: episodios,
    error,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
  } = useRickAndMortyDataFetcher("https://rickandmortyapi.com/api/episode");

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
