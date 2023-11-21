import React from "react";
import { useSpring, animated } from "react-spring";
import LinkButton from "../components/layout/LinkButton";
import styles from "./Home.module.css";

function Home() {
  const buttonSpringStyle = useSpring({
    from: { transform: "translateX(-300%)" },
    to: { transform: "translateX(0%)" },
    config: { duration: 500 },
  });

  const textSpringStyle = useSpring({
    from: { transform: "scale(0.01)" },
    to: { transform: "scale(1)" },
    config: { duration: 500 },
  });

  return (
    <div className={styles.container}>
      <div className={styles.welcome}>
        <animated.p style={textSpringStyle}>
          <span className={styles.bluePet}>Bem vindo à BluePet</span>
          <br /> O lar dos produtos mais confiáveis e dos cuidados <br /> mais
          afetuosos para o seu fiel companheiro.
        </animated.p>
      </div>
      <div className={styles.links}>
        <animated.div style={buttonSpringStyle}>
          <LinkButton linkto={"/products"} name={"Conheça nossos Produtos"} />
        </animated.div>
        <animated.div style={buttonSpringStyle}>
          <LinkButton linkto={"/appointments"} name={"Marque uma Consulta"} />
        </animated.div>
      </div>
    </div>
  );
}

export default Home;
