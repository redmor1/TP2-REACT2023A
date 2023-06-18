import { Link } from "react-router-dom";

function Episodio(props) {
  return (
    <div className="card col-3">
      <Link
        to={`/episodios/${props.id}`}
        className="text-decoration-none text-reset"
      >
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            {props.episode}
          </h6>
        </div>
      </Link>
    </div>
  );
}

export default Episodio;
