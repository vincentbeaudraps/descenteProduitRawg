import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, {useState} from "react";
import Genres from "../components/Genres";
import 'bootstrap/dist/css/bootstrap.css';
import Games from "../components/Games";
import Footer from "../components/Footer";

export default function Home() {


  const [idGenre, setIdGenre] = useState([])
  console.log("index",idGenre)
  return (
      <>
          <h1 className={styles.titre}>Stum</h1>

<div className={styles.main}>



    <Genres setIdGenre={setIdGenre}/>
    <Games idGenre={idGenre}/>


     <Footer />
    </div>
        </>
  )
}

