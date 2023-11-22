import React from "react";
import styles from "./Products.module.css";

function Products() {
  return (
    <div>
      <div className={styles.alert}>
        <span className={styles.icon}>!</span>
        <span>ESTA PÁGINA ESTÁ EM DESENVOLVIMENTO </span>
        <span className={styles.icon}>!</span>
      </div>
    </div>
  );
}

export default Products;
