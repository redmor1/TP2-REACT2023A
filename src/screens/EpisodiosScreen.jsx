import { useEffect, useState } from "react";
import Episodio from "../components/Episodio";
import Navbar from "../components/Navbar";

function EpisodiosScreen() {
  const [episodios, setEpisodios] = useState();

  async function getEpisodes() {
    try {
      const res = await fetch("https://rickandmortyapi.com/api/episode");
      const json = await res.json();
      setEpisodios(json.results);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getEpisodes();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container row">
        {episodios ? (
          episodios.map((episodio) => {
            return (
              <Episodio
                key={episodio.id}
                id={episodio.id}
                name={episodio.name}
                episode={episodio.episode}
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

export default EpisodiosScreen;
