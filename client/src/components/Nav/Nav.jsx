import logo from "../../image/logo.png"
import styled from "./Nav.module.css";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { getCountries, getFilterContinent, filterContinent, getFilterActivity, filterActivity, filterAlphabetical, filterPopulation } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = (props, setCurrentPage) => {
    const dispatch = useDispatch();

    // Estado para limpiar select
    const [filter, setFilter] = useState();

    // Estado para visualización móvil
    const [isMobil, setIsMovil] = useState(false);

    const continent = useSelector((state)=>state.continent);
    const activity = useSelector((state)=>state.activity);
    //console.log("desde Nav", activity);
    
    useEffect(()=>{
        dispatch(getFilterContinent());
        dispatch(getFilterActivity());
    }, [dispatch])

    const handleReset = (e) => {
        e.preventDefault();
        dispatch(getCountries());
        setFilter("");
    }

    const handleContinent = (e) => {
        e.preventDefault();
        dispatch(filterContinent(e.target.value));
    }

    const handleActivity = (e) => {
        e.preventDefault();
        dispatch(filterActivity(e.target.value))
    }

    const handleAlphabetical = (e) => {
        e.preventDefault();
        dispatch(filterAlphabetical(e.target.value))
    }

    const handlePopulation = (e) =>{
        e.preventDefault();
        dispatch(filterPopulation(e.target.value));
    }

    return (
        <header className={styled.header}>
            <div className={styled.nav}>
                <Link to="/"><img className={styled.logo} src={logo} alt={logo}/></Link>
                <SearchBar onSearch = {props.getSearchName}/>
                <ul className={isMobil? styled.navmenumobil : styled.navul} onClick={()=>setIsMovil(false)}>
                    <li className={styled.navli}>
                        <button className={styled.buttonav}><Link to='/newact' className={styled.linknewco}>Nuevo Actividad</Link></button>
                    </li>
                    <li className={styled.navli}>
                        <button onClick={(e)=>handleReset(e)} className={styled.buttonav} >Reset</button>
                    </li>
                    <li className={styled.navli}>
                        <select onChange={(e)=>handleContinent(e)} value={filter} className={styled.buttonav}>
                            <option defaultValue="">Ordenar Continente</option>
                            <option value="Todos">Todos</option>
                            {
                                continent.map((c)=>{
                                    return(
                                        <option key={c}>
                                            {c}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </li>
                    <li className={styled.navli}>
                        <select onChange={(e)=>handleActivity(e)} value={filter} className={styled.buttonav}>
                            <option defaultValue="">Ordenar Actividad</option>
                            <option value="Todos">Todos</option>
                            {
                                activity.map((a)=>{
                                    return(
                                        <option key={a}>
                                            {a}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </li>
                    <li className={styled.navli}>
                        <select onChange={(e)=>handleAlphabetical(e)} value={filter} className={styled.buttonav}>
                            <option defaultValue="">Orden Alfabético</option>
                            <option value="Ascendente">Ascendente A-Z</option>
                            <option value="Descendente">Descendente Z-A</option>
                        </select>
                    </li>
                    <li className={styled.navli}>
                        <select onChange={(e)=>handlePopulation(e)} value={filter} className={styled.buttonav}>
                            <option defaultValue="">Ordenar Población</option>
                            <option value="minimo">Mínimo Asc</option>
                            <option value="maximo">Máximo Desc</option>
                        </select>
                    </li>
                </ul>
                <button className={styled.menumobil} onClick={()=>setIsMovil(!isMobil)}>
                    {
                        isMobil? (<i><FaTimes/></i>)
                        :
                        (<i><FaBars/></i>)
                    }
                </button>
            </div>
        </header>
    )
}
export default Nav;