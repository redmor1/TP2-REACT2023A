function Personaje(props) {
  return (
    <div className="card col-3" style={{ style: "18rem" }}>
      <img src={props.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h3 className="card-title">{props.name}</h3>
        <h5 className="card-title">{props.species}</h5>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

export default Personaje;
