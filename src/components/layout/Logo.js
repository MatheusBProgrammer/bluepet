import React from "react";
import logo from "../../imgs/logo.jpg";
import styles from "./Logo.module.css";
import { FaPhone } from "react-icons/fa";
import Navbar from "./Navbar";

function Logo() {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo-png" />
      <div className={styles.contact}>
        <span>Contate-nos: </span>
        <FaPhone />
        <span>83-9-xxxx-xxxx</span>
      </div>
    </div>
  );
}

export default Logo;
