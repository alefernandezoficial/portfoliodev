import React from 'react';

function page() {
  return (
    <main>
      <div className='container'>

        <div className="row">
          <div className="col-md-7">
            <a href="#">
              <img className="img-fluid rounded mb-3 mb-md-0" src="/image/goatburger.png" alt="goatburger" />
            </a>
          </div>
          <div className="col-md-5">
            <h3><span className="badge bg-secondary">GoatBurger - Hamburguesas</span></h3>
            <div className="alert alert-secondary" role="alert">
            <p>1 Page centrada en el comercio electronico de una hamburgueseria con sus respectivos menus en base de datos SupaBase, banners de publicidad con photoshop, simple, rapido y centrado en el punto base, las hamburguesas.</p>
            </div>
            <a className="btn btn-primary" href="https://alefernandezoficial.github.io/my-hamburger/">Ver proyecto</a>
          </div>
        </div>

        {/* Divider */}
        <hr />
        {/* Divider */}

        <div className="row">
          <div className="col-md-7">
            <a href="#">
              <img className="img-fluid rounded mb-3 mb-md-0" src="/image/sickgamers.png" alt="sickgamers" />
            </a>
          </div>
          <div className="col-md-5">
            <h3><span className="badge bg-secondary">SickGamers - Ecommerce</span></h3>
            <div className="alert alert-secondary" role="alert">
            <p>6 secciones con informacion y compra de Accesorios gamers e Indumentaria de alta calidad e importadas de afuera, tematica simple accesible y rapida, photoshop para las ilustraciones y logo, enfocada en la venta de productos electronicos e indumentaria.</p>
            </div>
            <a className="btn btn-primary" href="https://alefernandezoficial.github.io/my-ecommerce/">Ver proyecto</a>
          </div>
        </div>

      </div>
    </main>
  )
}

export default page