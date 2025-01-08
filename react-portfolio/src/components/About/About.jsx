import React from "react";
import styles from "./About.module.css";
import aboutImage from "../../../assets/about/aboutImage.png";
import codeIcon from "../../../assets/about/codeIcon.png";
import libraryIcon from "../../../assets/about/libraryIcon.png";
import designIcon from "../../../assets/about/designIcon.png";

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
            <img src={codeIcon} alt="Ícono de cursor" />
            <div className={styles.aboutItemText}>
              <h3>Front-end developer</h3>
              <p>
                Soy un desarrollador front-end con experiencia en múltiples
                proyectos, desarrollando sitios responsivos y optimizados
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={libraryIcon} alt="Ícono de servidor" />
            <div className={styles.aboutItemText}>
              <h3>Librerías</h3>
              <p>
                Tengo experiencia en el uso de múltiples librerías de JavaScript
                para desarrollar aplicaciones según los requisitos de cada
                proyecto
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={designIcon} alt="Ícono de servidor" />
            <div className={styles.aboutItemText}>
              <h3>Diseño</h3>
              <p>
                El diseño gráfico siempre me ha fascinado y ha sido un hobby
                para mí. Gracias a estos conocimientos, he podido contribuir a
                los proyectos en los que participo, aportando no solo desde la
                perspectiva de un desarrollador
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
