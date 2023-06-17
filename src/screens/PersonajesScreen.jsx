import Navbar from "../components/Navbar";
import Personaje from "../components/Personaje";
import { useState, useEffect } from "react";

function Personajes() {
  const [characters, setCharacters] = useState();

  async function getCharacters() {
    try {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const json = await res.json();
      setCharacters(json.results);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getCharacters();
  }, []);

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
          <h1>Cargando...</h1>
        )}
      </div>
    </>
  );
}

export default Personajes;
