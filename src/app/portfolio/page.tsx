import React from 'react';
import styles from "./page.module.css";

function page() {
  return (
    <main>

      <div className="container">
        <h1>Portfolio</h1>

        <div className="row justify-content-center">
          <div className="card card-margin mb-3" style={{ maxWidth: "300px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                {/* IMAGEN */}
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">GoatBurger - Hamburguesas</h5>
                  <p className="card-text">
                    Pagina 1 Page centrada en el comercio electronico de una hamburgueseria
                    con sus respectivos menus en base de datos SupaBase, banners de publicidad
                    con photoshop, simple, rapido y centrado en el punto base, las hamburguesas.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      HTML, CSS, JavaScript, ReactJS & Bootstrap
                    </small>
                  </p>
                  <a href="https://alefernandezoficial.github.io/my-hamburger/"><i className="bi bi-link-45deg"></i>Ir a la pagina</a>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3" style={{ maxWidth: "300px" }}>
            <div className="row g-0">
              <div className="col-md-4">
                {/* IMAGEN */}
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">SickGamers - Ecommerce</h5>
                  <p className="card-text">
                    Pagina de 6 secciones con informacion y compra de Accesorios gamers
                    e Indumentaria de alta calidad e importadas de afuera, tematica simple
                    accesible y rapida, photoshop para las ilustraciones y logo, enfocada
                    en la venta de productos electronicos e indumentaria.
                  </p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      HTML, CSS, JavaScript, ReactJS & Bootstrap
                    </small>
                  </p>
                  <a href="https://alefernandezoficial.github.io/my-ecommerce/"><i className="bi bi-link-45deg"></i>Ir a la pagina</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default page