import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Ubicacion from "../components/Ubicacion";
import Error from "../components/Error";

function UbicacionesScreen() {
  const [ubicaciones, setUbicaciones] = useState();
  const [error, setError] = useState();

  async function getLocations() {
    try {
      const res = await fetch("https://rickandmortyapi.com/api/location");
      const json = await res.json();
      if (json.error) {
        setError(json.error);
      }
      setUbicaciones(json.results);
    } catch (e) {
      setError(e.message);
      console.log(e);
    }
  }

  useEffect(() => {
    getLocations();
  }, []);

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
          <h1>Cargando...</h1>
        )}
      </div>
    </>
  );
}

export default UbicacionesScreen;
