import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { cleanCountriesDetail, getDetail } from "../../redux/actions";
import styled from "./CoDetail.module.css"

const CoDetail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    
    const detail = useSelector((state)=>state.detail);

    useEffect(()=>{
        dispatch(getDetail(id));
        return ()=>dispatch(cleanCountriesDetail());
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
                    <h4><label className={styled.labeldes}>Area: </label>{detail[0]?.area} Km2</h4>
                    <h4><label className={styled.labeldes}>Población:</label> {detail[0]?.population} Hab.</h4>
                    <h2>Actividades</h2>
                    <table className={styled.destable}>
                        <thead>
                            <tr>
                                <th>Actividad</th>
                                <th>Dificultad</th>
                                <th>Duración</th>
                                <th>Temporada</th>
                            </tr>
                        </thead>
                        <tbody>
                            {detail[0]?.Activities.map((a)=>(
                                <tr key={a.name}>
                                    <td>{a.name}</td>
                                    <td>{a.difficulty}</td>
                                    <td>{a.duration}</td>
                                    <td>{a.season}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className={styled.buttonback}>
                        {detail[0]?.Activities?.length > 0 ? 
                         <Link className={styled.linkback} to="/newact"><button className={styled.buttonnew}>Crear otra actividad</button></Link>
                         :
                         <Link className={styled.linkback} to="/newact"><button className={styled.buttonnew}>Crear Actividad</button></Link>
                         }
                         <Link className={styled.linkback} to="/home"><button className={styled.buttonback}>Back</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoDetail;