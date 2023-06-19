import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Error from "./Error";
import Loader from "./Loader";

function UbicacionDetalles() {
  const { id } = useParams();
  const [ubicacion, setUbicacion] = useState();
  const [error, setError] = useState();

  async function getLocation() {
    try {
      const res = await fetch(`https://rickandmortyapi.com/api/location/${id}`);
      const json = await res.json();
      if (json.error) {
        setError(json.error);
      }
      setUbicacion(json);
    } catch (e) {
      setError(e.message);
      console.log(e);
    }
  }

  useEffect(() => {
    getLocation();
  }, []);

  if (error) {
    return <Error error={error} />;
  }

  return ubicacion ? (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-12">
          <div className="card-body">
            <h5 className="card-title">{ubicacion.name}</h5>
            <p className="card-text">
              <strong>name:</strong> {ubicacion.name}
            </p>
            <p className="card-text">
              <strong>type:</strong> {ubicacion.type}
            </p>
            <p className="card-text">
              <strong>dimension:</strong> {ubicacion.dimension}
            </p>
            <p className="card-text">
              <strong>created:</strong> {ubicacion.created}
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default UbicacionDetalles;
