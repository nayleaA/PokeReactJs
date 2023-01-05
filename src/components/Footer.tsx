import { Link } from "react-router-dom";
import styles from "./footer.module.css"

import pokemonPic from "../assets/pikachu.png";
import Locationpic from "../assets/pointer.png";
import Itempic from "../assets/pokeball.png";

const footer = () => {
return (
<footer className={styles.footer}>

    <Link className={styles.footerLink} to="/pokemons">
        <img src={pokemonPic} alt="Pokeball" className={styles.footerIcon}/>
        Pokemons
    </Link>

    <Link onClick={(event) => event.preventDefault()} className={styles.footerLink} to="/items">
        <img src={Itempic} alt="Pokeball" className={styles.footerIcon}/>
        Items
    </Link>

    <Link  onClick={(event) => event.preventDefault()} className={styles.footerLink} to="/Map">
        <img src={Locationpic} alt="Pokeball" className={styles.footerIcon}/>
        Map
    </Link>

</footer>
);
};

export default footer;