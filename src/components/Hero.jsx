function Hero() {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold text-body-emphasis">
        Rick and Morty React App
      </h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Bienvenido a mi aplicacion de Rick and Morty React App, creada para
          practicar el uso de hooks como useEffect, useState y useParams.
          Tambien peticiones, respuestas de una API y el formateo de la
          informacion traida.
        </p>
      </div>
    </div>
  );
}

export default Hero;
