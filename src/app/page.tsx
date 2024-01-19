import React from "react";
import Skills from "./components/Skills";
import styles from "./page.module.css";
import Link from "next/link";
import ServicesContent from "./content/ServicesContent";
import PortfolioContent from "./content/PortfolioContent";
import ContactContent from "./content/ContactContent";

function page() {
  return (
    <main>
      <div className="container-fluid">
        <div className="container-central">
          <p className="text-center">
            <span className="badge text-bg-success">CV Fisico</span>
          </p>
          <p className="text-center">
            <Link href="pdf/cv.pdf"><button className={styles.glowingbtn}><span className={styles.glowingtxt}>D<span className={styles.faultyletter}>O</span>WNLOAD</span></button></Link>
          </p>
        </div>
      </div>
      <Skills />
      <hr></hr>
      <ServicesContent/>
      <hr></hr>
      <PortfolioContent/>
      <hr></hr>
      <ContactContent/>
    </main>
  );
}

export default page;
