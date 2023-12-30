import React from "react";
import Skills from "./components/Skills";
import styles from "./page.module.css";
import Link from "next/link";

function page() {
  return (
    <main>


      <div className="container-fluid">
        <div className="container-central">
          <p className="text-center">
            <span className="badge text-bg-success">Curriculum Vitae</span>
          </p>
          <p className="text-center">
            <Link href="pdf/cv.pdf"><button className={styles.glowingbtn}><span className={styles.glowingtxt}>D<span className={styles.faultyletter}>O</span>WNLOAD</span></button></Link>
          </p>

        </div>
      </div>

      <Skills />
    </main>
  );
}

export default page;
