import React from "react";
import { Link } from "react-router-dom";
import styled from "./Card.module.css";

const Card = ({id, flag, name, region}) => {
    return(
        <div className={styled.container}>
            <div className={styled.containername}>
                <Link className={styled.link} to={`/detail/${id}`}>
                    <h2 className={styled.name}>{name}</h2>
                </Link>
            </div>
            <div className={styled.imageContainer}>
                <Link to={`/detail/${id}`}>
                    <img className={styled.imgflag} src={flag} alt={name}/>
                </Link>
            </div>
            <div className={styled.propsContainer}>
                <h2>{region}</h2>
                <Link className={styled.link} to={`/detail/${id}`}><button className={styled.buttondetalle}>Detalle</button></Link>
            </div>
        </div>
    )
}

export default Card;