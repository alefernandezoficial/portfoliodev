import React from "react";
import Link from "next/link";

function MenuNavegation() {
  return (
    <div>
      {" "}
      {/* Menu Navegation */}
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary fixed-top"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand">
            Ale Fernandez Dev |
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/" className="nav-link" aria-current="page">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/services" className="nav-link">
                  Servicios
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link">
                  Contacto
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/portfolio" className="nav-link">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
              <Link href="/admin" className="nav-link">
                  ADMIN
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default MenuNavegation;
