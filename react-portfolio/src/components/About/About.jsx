import React from "react";
import styles from "./About.module.css";
import aboutImage from "../../../assets/about/aboutImage.png";
import cursorIcon from "../../../assets/about/cursorIcon.png";
import serverIcon from "../../../assets/about/serverIcon.png";
import uiIcon from "../../../assets/about/uiIcon.png";

export const About = () => {
  return (
    <section id="about" className={styles.container}>
      <h2 className={styles.title}>Acerca de</h2>
      <div className={styles.content}>
            {/* TODO: replace free downloaded image for an actual image created for this site. Don't show it until then  */}
        {/* <img
          className={styles.aboutImage}
          src={aboutImage}
          alt="Hero sentado"
        /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="Ícono de cursor" />
            <div className={styles.aboutItemText}>
              <h3>Front-end developer</h3>
              <p>
                Soy un desarrollador front-end con experiencia desarrollando
                sitios responsivos y optimizados
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="Ícono de servidor" />
            <div className={styles.aboutItemText}>
              <h3>Back-end developer</h3>
              <p>
                Tengo experiencia desarrollando aplicaciones y APIs rápidas y
                optimizadas
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={uiIcon} alt="Ícono de servidor" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                Tengo experiencia desarrollando aplicaciones y APIs rápidas y
                optimizadas
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
