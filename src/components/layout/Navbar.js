import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../imgs/logo.jpg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        <Link to="/" className={styles.home}>
          Início
        </Link>
        <Link to="/products" className={styles.products}>
          Produtos
        </Link>
        <Link to="/appointments" className={styles.appointments}>
          Consultas
        </Link>
        <Link to="/about" className={styles.about}>
          Sobre
        </Link>
      </div>
    </div>
  );
}
