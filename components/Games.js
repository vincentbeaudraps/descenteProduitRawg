import React, { useEffect, useState } from "react";
import styles from '../styles/Games.module.css'
import Image from "next/image";


const Games = ({idGenre}) => {

    const [allGames, setAllGames] = useState([]);


    console.log("games",idGenre)

    const fetchData = () => {

        fetch("https://api.rawg.io/api/games?key=e650e928eed24b42923dcc29e96a7559&genres="+idGenre).then((res) => {
            return res.json();
        }).then((data) => {
            setAllGames(data)
        })
    }
    useEffect(() => {
        fetchData();
    }, [idGenre]);

    return (
        <>
            <div className={styles.listeJeux}>
                {
                    allGames.results?.map((Game,index) => (
                        <ul
                            className={styles.listeJeux}
                            key={index}>
                            <li
                                className={styles.unJeu}><p>{Game.name}</p>
                                <Image src={Game.background_image} alt={Game.name} height="200px" width="400px"/>
                                {console.log(Game)}
                            </li>
                        </ul>
                    ))}
            </div>
        </>
    );
};

export default Games;