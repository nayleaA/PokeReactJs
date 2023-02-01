import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPokemons } from "../api/fetchPokemons";
import { waitFor } from "../utils/utils";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { Pokemon } from "../types/types.d";
import styles from "./pokemons.module.css";
import LoadingScreen from "../components/LoadingScreen";

const Pokemons = () => {
  const [isloading,setisLoading] = useState(false)
  const [query, setQuery] = useState("");
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchAllPokemons = async () => {
      setisLoading(true);
      await waitFor(1000);
      const allPokemons = await fetchPokemons();
      setPokemons(allPokemons);
      setisLoading(false);
    };
    fetchAllPokemons();
  }, []);
  
if(isloading || !pokemons) {
return <LoadingScreen/>
}

const filteredPokemon = pokemons?.slice(0,588).filter((pokemon) =>{
  return pokemon.name.toLowerCase().includes(query.toLowerCase());
});


  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <main>
        <nav>
          {filteredPokemon?.slice(0, 588).map((pokemon) => (
            <Link
              key={pokemon.id}
              className={styles.listItem}
              to={`/pokemons/${pokemon.name.toLowerCase()}`}
            >
              <img
                className={styles.listItemIcon}
                src={pokemon.imgSrc}
                alt={pokemon.name}
              />
              <div className={styles.listItemText}>
                <span>{pokemon.name}</span>
                <span>{pokemon.id}</span>
              </div>
            </Link>
          ))}
        </nav>
      </main>
      <Footer />
    </>
  );
};

export default Pokemons;
