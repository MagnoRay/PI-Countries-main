import styled from "./SearchBar.module.css";
import { FaSearchengin } from 'react-icons/fa';
import { getSearchName } from "../../redux/actions";
import { useDispatch } from 'react-redux';
import { useState } from "react";
import Cards from "../Home/Cards";

const SearchBar = () => {
    const dispatch = useDispatch();

    const [rcountries, setRcountries] = useState("");

    const handleChange = (e) => {
        setRcountries(e.target.value);
    }

    const handleSubmit = (e) => {
        if(!rcountries.length){
            alert('Ingresa nombre de un País');
        }else{
            e.preventDefault();
            dispatch(getSearchName(rcountries));
            setRcountries("");
        }
    }
    return(
        <div>
            <div className={styled.container}>
                <ul className={styled.navul}>
                    <input type="search" onChange={handleChange} placeholder="Busca un país!" className={styled.inputsearch} />
                    <button type="submit" onClick={(e)=>handleSubmit(e)} className={styled.buttonsearch}><FaSearchengin/></button>
                </ul>
            </div>
                <Cards rcountries = {rcountries} />
        </div>
    )
}

export default SearchBar;