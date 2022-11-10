import React, { useEffect, useState } from "react";
import styles from '../styles/Footer.module.css'

export default function Footer() {
    return (
        <>
            <a className={styles.footer}
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Developed by Me.</a>
        </>
    )
}


