import React, { Fragment, useState, useEffect } from "react";
import styles from "./App.module.css";
import PokeCard from "./components/PokeCard";

function App() {
  const urlApi = "https://pokeapi.co/api/v2/pokemon?limit=50";
  const [result, setResult] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [load, setLoad] = useState("true");
  const arrData = [];

  useEffect(() => {
    fetch(urlApi)
      .then((response) => response.json())
      .then((data) =>
        setResult(
          data.results.map((item) => {
            fetch(item.url)
              .then((response) => response.json())
              .then((allpokemon) => arrData.push(allpokemon));
            setPokemon(arrData);
          })
        )
      );
  }, []);

  setTimeout(() => {
    setLoad(false);
    console.log(pokemon);
  }, 1000);

  return (
    <Fragment>
      <div className={styles.container}>
        <h1>PokeApp</h1>
      </div>

      <div className="container">
        {load ? (
          <p>Loading...</p>
        ) : (
          pokemon.map((img, i) => (
            <div id={img.id} key={img.id}>
              <PokeCard namePoke={img.name} imgPoke={img.sprites.front_default} typePoke={img.types[0].type.name} />
            </div>
          ))
        )}
      </div>
    </Fragment>
  );
}

export default App;
