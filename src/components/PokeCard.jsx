import React from "react";
import styles from "./PokeCard.module.css";

function PokeCard({ namePoke, imgPoke, typePoke }) {
  return (
        <div className={styles.containerCard}>
          <div className={styles.card}>
            <h3>{namePoke}</h3>
            <img
              src={imgPoke}
              alt="Una imagen x"
            />
            <p>Tipo Pokemon: {typePoke}</p>
          </div>
        </div>
  );
}

export default PokeCard;
