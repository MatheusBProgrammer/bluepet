import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import styles from "./About.module.css";

function About() {
  const whatsappNumber = "+5588999999999";
  const whatsappMessage = encodeURIComponent(
    "Olá, gostaria de entrar em contato para tirar uma dúvida."
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sobre Nós</h1>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
        mauris vel ante lacinia, vel bibendum sapien bibendum. Nullam
        condimentum, velit vel malesuada tincidunt, velit enim tincidunt mauris,
        vel bibendum sapien bibendum.
      </p>
      <p className={styles.description}>
        Praesent euismod, nisl vel aliquam ultricies, elit ex lacinia augue,
        eget bibendum sapien sapien vel nunc. Sed vel magna vel sapien
        ullamcorper bibendum. Nullam vel sapien vel sapien bibendum ullamcorper.
        Sed vel magna vel sapien ullamcorper bibendum.
      </p>
      <div className={styles.iconContainer}>
        <a href="https://www.instagram.com/bluepetpb/" className={styles.icon}>
          <FaInstagram />
        </a>
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          className={styles.icon}
        >
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
}

export default About;
