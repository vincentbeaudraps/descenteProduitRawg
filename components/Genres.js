import React, { useEffect, useState } from "react";
import styles from '../styles/Genre.module.css'



const Genres = ({setIdGenre}) => {

    const [allGenres, setAllGenres] = useState([]);

    const fetchData = () => {

        fetch("https://api.rawg.io/api/genres?key=e650e928eed24b42923dcc29e96a7559").then((res) => {
            return res.json();
        }).then((data) => {
            setAllGenres(data)
        })
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>

            <div className={styles.Genres}>
                        {
                            allGenres.results?.map((Genre, index)  => (
                                <ul
                                    className={styles.Genres}
                                    key={index}
                                >
                                    <li className={styles.Genres} ><button onClick={() => setIdGenre(Genre.id)}>{Genre.name}</button></li>
                                </ul>
                            ))}
                    </div>
        </>
    );
};

export default Genres