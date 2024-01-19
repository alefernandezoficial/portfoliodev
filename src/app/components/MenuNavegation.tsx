import React from "react";
import Link from "next/link";
import styles from "./MenuNavegation.module.css";

function MenuNavegation() {
  return (
    <div>
      {" "}
      {/* Menu Navegation */}
      <nav className={`${styles.navbar} navbar navbar-expand-lg bg-body-tertiary fixed-top`} data-bs-theme="dark">
        <div className="container-fluid">
          <a className={`navbar-brand ${styles['navbar-brand']}`}>
            Menu |
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
            <span className={`navbar-toggler-icon ${styles['navbar-toggler-icon']}`}></span>
          </button>
          <div className={`collapse navbar-collapse ${styles['navbar-collapse']}`} id="navbarSupportedContent">
            <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles['nav-links']}`}>
              <li className="nav-item">
                <Link href="/" className={`nav-link ${styles['nav-link']}`} aria-current="page">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/services" className={`nav-link ${styles['nav-link']}`} aria-current="page">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/portfolio" className={`nav-link ${styles['nav-link']}`} aria-current="page">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className={`nav-link ${styles['nav-link']}`} aria-current="page">
                  Contacto
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/admin" className={`nav-link ${styles['nav-link']}`} aria-current="page">
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
