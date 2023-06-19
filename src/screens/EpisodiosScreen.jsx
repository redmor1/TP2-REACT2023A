import { useEffect, useState } from "react";
import Episodio from "../components/Episodio";
import Navbar from "../components/Navbar";
import Error from "../components/Error";
import Loader from "../components/Loader";

function EpisodiosScreen() {
  const [episodios, setEpisodios] = useState();
  const [error, setError] = useState();

  async function getEpisodes() {
    try {
      const res = await fetch("https://rickandmortyapi.com/api/episode");
      const json = await res.json();
      if (json.error) {
        setError(json.error);
      }
      setEpisodios(json.results);
    } catch (e) {
      setError(e.message);
      console.log(e);
    }
  }

  useEffect(() => {
    getEpisodes();
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
          <Loader />
        )}
      </div>
    </>
  );
}

export default EpisodiosScreen;
