import React from "react";
import styled from "./Landing.module.css";
import { Link } from "react-router-dom";
import background from "../../image/landing.png"

const Landing = () => {
    return(
        <div className={styled.divlanding}>
            <div className={styled.divimg}>
                <img className={styled.imglanding} src={background} alt={background}/>
            </div>
            <div className={styled.divdescrp}>
            <h1 className={styled.h1land}>Bienvenido al SPA Countries</h1>         
            <p className={styled.pland}>El único verdadero viaje de descubrimiento consiste no en buscar nuevos paisajes, sino en mirar con nuevos ojos!</p>
            <Link to="/home">
                <button className={styled.buttonlan1}>Explorar Countries</button>
            </Link>
            </div>
        </div>
    )
}

export default Landing;