import { Link } from "react-router-dom";
import { useRickAndMortyDataDetailsFetcher } from "../hooks/useRickAndMortyDataDetailsFetcher";
import { useState, useEffect } from "react";
import Error from "./Error";
import Loader from "./Loader";

function PersonajeDetalles() {
  const { data: character, error } = useRickAndMortyDataDetailsFetcher(
    "https://rickandmortyapi.com/api/character"
  );
  const [ubicacion, setUbicacion] = useState();

  async function getLocation() {
    try {
      const res = await fetch(character.location.url);
      const json = await res.json();
      setUbicacion(json);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getLocation();
  }, [character]);

  if (error) {
    return <Error error={error} />;
  }
  return character && ubicacion ? (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={character.image}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{character.name}</h5>
            <p className="card-text">
              <strong>id:</strong> {character.id}
            </p>
            <p className="card-text">
              <strong>name:</strong> {character.name}
            </p>
            <p className="card-text">
              <strong>status:</strong> {character.status}
            </p>
            <p className="card-text">
              <strong>species:</strong> {character.species}
            </p>
            <p className="card-text">
              <strong>type:</strong> {character.type}
            </p>
            <p className="card-text">
              <strong>gender:</strong> {character.gender}
            </p>
            <p className="card-text">
              <strong>origin:</strong>{" "}
              <Link to={`../ubicaciones/${ubicacion.id}`}>
                {character.origin.name}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default PersonajeDetalles;
