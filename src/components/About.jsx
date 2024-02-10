const About = () => {
  return (
    <div className="container d-flex flex-column align-items-center g-4 mt-4 mb-5">
      <h2 className="text-justify">Acerca de nosotros</h2>
      <p className="fs-5">
        Somos una empresa de desarrollo de software que ayuda 
        a las empresas de todos los tamaños a optimizar sus recursos y procesos. 
        Ofrecemos soluciones innovadoras que pueden ayudar a las empresas a reducir costes, 
        aumentar la eficiencia y mejorar la satisfacción del cliente.
      </p>
      <h2 className="text-justify mt-2">Misión</h2>
      <p className="fs-5">
        Ser la mejor empresa en apoyar al cliente a determinar las formas de lograr 
        maximizar tus recursos y lograr atracción de clientes a tu negocio a través de soluciones 
        innovadoras de desarrollo de software.
      </p>
      <h2 className="text-justify mt-2">Visión</h2>
      <p className="fs-5">
        Hermon será la empresa líder en el desarrollo de software innovador que ayuda 
        a las empresas de todos los tamaños a alcanzar sus objetivos.
      </p>
      <h2>Valores:</h2>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-6 d-flex flex-column">
            <a href="#inova" className="btn btn-lg fw-bold border-bottom" data-bs-toggle='collapse' role='button'>Innovación <i className="bi bi-stars"></i></a>
            <span id="inova" className="collapse">Brindar soluciones innovadoras basadas en tecnología para alcanzar objetivos.</span>
          </div>
          <div className="col-12 col-lg-6 d-flex flex-column">
            <a href="#exel" className="btn btn-lg fw-bold border-bottom" data-bs-toggle='collapse' role='button'>Excelencia <i className="bi bi-mortarboard-fill"></i></a>
            <span id="exel" className="collapse">Dar la mejor atención y servicio a los clientes y colaboradores.</span>
          </div>
          <div className="col-12 col-lg-6 d-flex flex-column">
            <a href="#compr" className="btn btn-lg fw-bold border-bottom" data-bs-toggle='collapse' role='button'>Compromiso <i className="bi bi-clipboard2-check-fill"></i></a>
            <span id="compr" className="collapse">Trabajo en conjunto para desarrollar tus ideas con el mejor entusiasmo.</span>
          </div>
          <div className="col-12 col-lg-6 d-flex flex-column">
            <a href="#equipo" className="btn btn-lg fw-bold border-bottom" data-bs-toggle='collapse' role='button'>Trabajo en equipo <i className="bi bi-people-fill"></i></a>
            <span id="equipo" className="collapse">Más que una empresa somos un equipo que creemos en tus ideas y con los conocimientos logramos plasmarlos.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;