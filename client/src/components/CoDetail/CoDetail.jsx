import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { getDetail } from "../../redux/actions";
import styled from "./CoDetail.module.css"

const CoDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    
    const detail = useSelector((state)=>state.detail);

    useEffect(()=>{
        dispatch(getDetail(id));
    }, [dispatch, id]);
    
    return(
        <div className={styled.container}>
            <div className={styled.contenedorcar}>
                <div className={styled.containercountry}>
                    <h2>{detail[0]?.id}</h2>
                    <img src={detail[0]?.flag} alt={detail[0]?.name}/>
                    <h2>{detail[0]?.name}</h2>                                   
                    <h4><label className={styled.labeldes}>Continente: </label>{detail[0]?.region}</h4>
                    <h4><label className={styled.labeldes}>Capital: </label>{detail[0]?.capital}</h4>
                </div>
                <div className={styled.despcrition}>
                    <h4><label className={styled.labeldes}>Sub Continente:</label>{detail[0]?.subregion}</h4>
                    <h4><label className={styled.labeldes}>Area: </label>{detail[0]?.area}</h4>
                    <h4><label className={styled.labeldes}>Población:</label> {detail[0]?.population}</h4>
                    <h2>Actividades</h2>
                    {detail[0]?.Activities.map((a)=>
                        <div key={a.name}>
                            <li><label className={styled.labeldes}>Actividad: </label>{a.name}</li>
                            <li><label className={styled.labeldes}>Dificultad: </label>{a.difficulty}</li>
                            <li><label className={styled.labeldes}>Duración: </label>{a.duration}</li>
                            <li><label className={styled.labeldes}>Temporada:</label>{a.season}</li>
                        </div>
                    )}
                    <div className={styled.buttonback}>
                        <Link className={styled.linkback} to="/home"><button className={styled.buttonback}>Back</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoDetail;