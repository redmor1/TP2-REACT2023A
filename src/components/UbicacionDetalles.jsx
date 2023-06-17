import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UbicacionDetalles() {
  const { id } = useParams();
  const [ubicacion, setUbicacion] = useState();

  async function getLocation() {
    try {
      const res = await fetch(`https://rickandmortyapi.com/api/location/${id}`);
      const json = await res.json();
      setUbicacion(json);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getLocation();
  });

  return ubicacion ? (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-12">
          <div className="card-body">
            <h5 className="card-title">{ubicacion.name}</h5>
            <p className="card-text">
              <strong>name:</strong> &quot;{ubicacion.name}&quot;
            </p>
            <p className="card-text">
              <strong>type:</strong> &quot;{ubicacion.type}&quot;
            </p>
            <p className="card-text">
              <strong>dimension:</strong> &quot;{ubicacion.dimension}&quot;
            </p>
            <p className="card-text">
              <strong>created:</strong> &quot;{ubicacion.created}&quot;
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <h1>Cargando...</h1>
  );
}

export default UbicacionDetalles;
