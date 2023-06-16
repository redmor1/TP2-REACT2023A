import Navbar from "../components/Navbar";
import Personaje from "../components/Personaje";

function Personajes() {
  return (
    <>
      <Navbar />
      <div className="container row">
        <Personaje />
        <Personaje />
        <Personaje />
        <Personaje />
      </div>
    </>
  );
}

export default Personajes;
