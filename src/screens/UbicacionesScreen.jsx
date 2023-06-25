import { useRickAndMortyDataFetcher } from "../hooks/useRickAndMortyDataFetcher";
import Navbar from "../components/Navbar";
import Ubicacion from "../components/Ubicacion";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";

function UbicacionesScreen() {
  const {
    data: ubicaciones,
    error,
    currentPage,
    totalPages,
    nextPage,
    prevPage,
  } = useRickAndMortyDataFetcher("https://rickandmortyapi.com/api/location");

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
        {ubicaciones ? (
          ubicaciones.map((ubicacion) => {
            return (
              <Ubicacion
                key={ubicacion.id}
                id={ubicacion.id}
                name={ubicacion.name}
                type={ubicacion.type}
                dimension={ubicacion.dimension}
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

export default UbicacionesScreen;
