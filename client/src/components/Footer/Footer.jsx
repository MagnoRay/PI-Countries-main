import React from "react";
import styled from "./Footer.module.css"

const Footer = () => {
    return(
        <div className={styled.container}>
            <footer className={styled.containerfoter}>
            <p className={styled.textp}>© 2023 por Magno Raymundo</p>
            </footer>
        </div>
    )
}

export default Footer;