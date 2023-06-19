import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Personaje from "./Personaje";

function EpisodioDetalles() {
  const { id } = useParams();

  const [episodio, setEpisodio] = useState();
  const [characters, setCharacters] = useState();

  async function getEpisode() {
    try {
      const res = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
      const json = await res.json();
      setEpisodio(json);
    } catch (e) {
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
      <div className="row">{characters}</div>
    </>
  ) : (
    <h1>Cargando...</h1>
  );
}
export default EpisodioDetalles;
