import Navbar from "../components/Navbar";
import Personaje from "../components/Personaje";
import Error from "../components/Error";
import Loader from "../components/Loader";
import { useState, useEffect } from "react";

function Personajes() {
  const [characters, setCharacters] = useState();
  const [error, setError] = useState();

  async function getCharacters() {
    try {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const json = await res.json();
      if (json.error) {
        setError(json.error);
      }
      setCharacters(json.results);
    } catch (e) {
      setError(e.message);
      console.log(e);
    }
  }

  useEffect(() => {
    getCharacters();
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
        {characters ? (
          characters.map((character) => {
            return (
              <Personaje
                key={character.id}
                id={character.id}
                image={character.image}
                name={character.name}
                species={character.species}
              />
            );
          })
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
}

export default Personajes;
