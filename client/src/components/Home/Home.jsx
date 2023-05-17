import React, {useEffect, useState} from "react";

import { useSelector, useDispatch } from "react-redux";
import { getCountries} from "../../redux/actions";
import styled from "./Home.module.css";

import Cards from "./Cards";
import Pagination from "../Pagination/Pagination";
import Nav from "../Nav/Nav";
import Loading from "./Loading";

const Home = () => {
    const dispatch = useDispatch();

    const countries = useSelector((state)=>state.countries);
    const rcountries = useSelector((state)=>state.rcountries);
    const loading = useSelector((state)=>state.loading);

    useEffect(()=>{
        if(countries.length < 1){
            dispatch(getCountries());
        }
    },[dispatch, countries]);
    
    
    const [currentPage, setCurrentPage] = useState(1);   
    const [countriesPerPage /* setCountriesPerPage */] = useState(10);
    console.log("Home", setCurrentPage);

        // Obtener página actual
        const indexOfLastCountry = currentPage * countriesPerPage; // 10
        const indexOfFirstCountry = indexOfLastCountry - countriesPerPage; // 0
        // Cambio de página
        const currentCountries = rcountries.slice(indexOfFirstCountry, indexOfLastCountry);
    
        const paginate = (page) => {
            setCurrentPage(page);
        }

        if(countries.length > 0 && !loading){
            if(rcountries.length === 0){
                return(
                    <>
                        <Nav />
                    </>
                )
            }
            return (
                <div className={styled.container}>
                        <Pagination
                            countriesPerPage = { countriesPerPage }
                            currentPage = { currentPage }
                            paginateFunction = { paginate }
                        />
                    <Cards data = {currentCountries}/>
                </div>
            )
        }else{
            return(
                <>
                    <Loading />
                </>
            )
        }
}

export default Home;