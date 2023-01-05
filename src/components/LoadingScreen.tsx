import React from "react"
import Pokedex from "../assets/pokedex.png"
import styles from "./loadingScreen.module.css"

const LoadingScreen = () =>{
return (
    <div className={styles.LoadingScreen}> 
       <img className={styles.loadingScreenIcon} src={Pokedex} alt="Pokedex"></img>

    </div>
)
}
export default LoadingScreen