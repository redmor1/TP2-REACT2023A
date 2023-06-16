import { Link } from "react-router-dom";

function Personaje(props) {
  console.log(props);
  return (
    <div className="card col-3" style={{ style: "18rem" }}>
      <img src={props.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h3 className="card-title">{props.name}</h3>
        <h5 className="card-title">{props.species}</h5>
        <Link to={`/personajes/${props.id}`} className="btn btn-primary">
          Go somewhere
        </Link>
      </div>
    </div>
  );
}

export default Personaje;
