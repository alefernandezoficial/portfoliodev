import React from "react";
import Image from "next/image";
import styles from "./Header.module.css";

function Header() {
  return (
    <main>
      {" "}
      <div className={styles.header}>
        <Image
          src="/image/alejandro-fernandez.png"
          alt="Ale Fernandez Dev"
          width={350}
          height={100}
        />
      </div>
    </main>
  );
}

export default Header;
