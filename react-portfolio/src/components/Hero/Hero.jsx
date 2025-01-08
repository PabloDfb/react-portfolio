import React from "react";

import heroIcon from "../../../assets/hero/heroImage.png";
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hola, soy Pablo</h1>
        <p className={styles.description}>
          Soy un desarrollador front-end con más de 2 años de experiencia.
          Contáctame para saber más!
        </p>
        <a className={styles.contactBtn} href="mailto:pablodfb98@gmail.com">Contactar</a>
      </div>
      <img src={heroIcon} alt="Ícono hero portafolio" className={styles.heroImg}/>
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
