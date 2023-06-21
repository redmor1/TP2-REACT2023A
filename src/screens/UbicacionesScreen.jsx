import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Ubicacion from "../components/Ubicacion";
import Error from "../components/Error";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";

function UbicacionesScreen() {
  const [ubicaciones, setUbicaciones] = useState();
  const [error, setError] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();

  async function getLocations(page) {
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/location?page=${page}`
      );
      const json = await res.json();
      if (json.error) {
        setError(json.error);
      }
      setUbicaciones(json.results);
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
    getLocations(currentPage);
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
