function Ubicacion(props) {
  return (
    <div className="card col-3">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{props.type}</h6>
        <h6 className="card-subtitle mb-2 text-body-secondary">
          {props.dimension}
        </h6>
      </div>
    </div>
  );
}

export default Ubicacion;
