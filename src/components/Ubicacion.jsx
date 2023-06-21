import { Link } from "react-router-dom";

function Ubicacion(props) {
  return (
    <div className="card col-3 m-4 p-0">
      <Link
        to={`/ubicaciones/${props.id}`}
        className="text-decoration-none text-reset"
      >
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            {props.type}
          </h6>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            {props.dimension}
          </h6>
        </div>
      </Link>
    </div>
  );
}

export default Ubicacion;
