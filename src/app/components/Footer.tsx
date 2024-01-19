import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <div className={styles.footerLogo}>Ale Fernandez Developer</div>
          <p>Diseñador, Desarrollador y Programador Web & Apps</p>
        </div>
        <div className={styles.footerSection}>
          <h3>Contacto</h3>
          <p>Granadero Baigorria, Santa Fe</p>
          <p>Email: alefernandezoficial@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
