import React from "react";
import styles from "./LinkButton.module.css";
import { Link } from "react-router-dom";

function LinkButton({ name, linkto }) {
  return (
    <div className={styles.container}>
      <Link to={linkto}>{name}</Link>
    </div>
  );
}

export default LinkButton;
