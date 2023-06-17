import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Ubicacion from "../components/Ubicacion";

function UbicacionesScreen() {
  const [ubicaciones, setUbicaciones] = useState();

  async function getLocations() {
    try {
      const res = await fetch("https://rickandmortyapi.com/api/location");
      const json = await res.json();
      setUbicaciones(json.results);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getLocations();
  });

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
