import { useRickAndMortyDataDetailsFetcher } from "../hooks/useRickAndMortyDataDetailsFetcher";
import Error from "./Error";
import Loader from "./Loader";

function UbicacionDetalles() {
  const { data: ubicacion, error } = useRickAndMortyDataDetailsFetcher(
    "https://rickandmortyapi.com/api/location"
  );

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
