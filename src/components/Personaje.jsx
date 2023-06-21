import { Link } from "react-router-dom";

function Personaje(props) {
  return (
    <div className="card col-3 m-4 p-0">
      <Link
        to={`/personajes/${props.id}`}
        className="text-decoration-none text-reset"
      >
        <img src={props.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-title">{props.name}</h3>
          <h5 className="card-title">{props.species}</h5>
        </div>
      </Link>
    </div>
  );
}

export default Personaje;
