import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Personaje from "./Personaje";
import Error from "./Error";
import Loader from "./Loader";

function EpisodioDetalles() {
  const { id } = useParams();

  const [episodio, setEpisodio] = useState();
  const [characters, setCharacters] = useState();
  const [error, setError] = useState();

  async function getEpisode() {
    try {
      const res = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
      const json = await res.json();
      if (json.error) {
        setError(json.error);
      }
      setEpisodio(json);
    } catch (e) {
      setError(e.message);
      console.log(e);
    }
  }

  async function fetchAndRenderCharacters() {
    try {
      const renderedCharacters = [];

      for (const characterUrl of episodio.characters) {
        const res = await fetch(characterUrl);
        const json = await res.json();

        renderedCharacters.push(
          <Personaje
            key={json.id}
            id={json.id}
            image={json.image}
            name={json.name}
            species={json.species}
          />
        );
      }

      setCharacters(renderedCharacters);
    } catch (e) {
      console.log(e);
      return null;
    }
  }

  useEffect(() => {
    getEpisode();
  }, []);

  useEffect(() => {
    fetchAndRenderCharacters();
  }, [episodio]);

  if (error) {
    return <Error error={error} />;
  }
  return episodio && characters ? (
    <>
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-12">
            <div className="card-body">
              <h5 className="card-title">{episodio.name}</h5>
              <p className="card-text">
                <strong>name:</strong> {episodio.name}
              </p>
              <p className="card-text">
                <strong>episodio:</strong> {episodio.episode}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <h1 className="mt-3 mb-5">
          Los personajes que aparecen en este episodio son:
        </h1>
        {characters}
      </div>
    </>
  ) : (
    <Loader />
  );
}
export default EpisodioDetalles;
