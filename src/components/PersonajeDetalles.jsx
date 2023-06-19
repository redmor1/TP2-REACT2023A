import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Error from "./Error";
import Loader from "./Loader";

function PersonajeDetalles() {
  const { id } = useParams();

  const [character, setCharacter] = useState();
  const [ubicacion, setUbicacion] = useState();
  const [error, setError] = useState();

  async function getCharacter() {
    try {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const json = await res.json();
      if (json.error) {
        setError(json.error);
      }
      setCharacter(json);
    } catch (e) {
      setError(e.message);
      console.log(e);
    }
  }

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
    getCharacter();
  }, []);

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
