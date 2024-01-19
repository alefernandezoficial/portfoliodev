import React from 'react';

function services() {
  return (
    <div className="card bg-transparent mb-3 container text-center mt-4">
      <div className="row g-0">
        <div className="col-md-4">
          <img src="/image/services.png" className="img-fluid rounded-start" alt="serviciosimagen" />
        </div>
        <div className="col-md-8 ">
          <div className="card-body">
            <h5><span className="badge bg-primary">Servicios</span></h5>
            <p className="fw-bold">
              Brindo servicio de alto compromiso y alta prioridad para personas interesadas en mi trabajo como Diseñador, Desarrollador y Programador de Web & Apps.
              Tales como servicios de diseño grafico, desarrollo de apps o webs y programacion del mismo.
            </p>
            <a className="btn btn-primary" href="/services" role="button">Ir a la pagina de Servicios</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default services