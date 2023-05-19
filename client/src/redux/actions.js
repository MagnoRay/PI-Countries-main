import { CLEAN_COUNTRIES_DETAIL, FILTER_ACTIVITY, FILTER_ALPHABETICAL, FILTER_CONTINENT, FILTER_DURATION, FILTER_POPULATION, GET_COUNTRIES, GET_DETAIL, GET_FILTER_ACTIVITY, GET_FILTER_CONTINENT, GET_FILTER_COUNTRY, GET_SEARCH_NAME, INSERT_ACTIVITY } from "./action-types";

import axios from "axios";

export const getCountries = () => {
    return async function(dispatch){
        let response = await axios("/countries");
        return dispatch({type: GET_COUNTRIES, payload: response.data});
    }
}

export const getDetail = (id) => {
    return async function(dispatch){
        let response = await axios(`/countries/${id}`);
        return dispatch({type: GET_DETAIL, payload: response.data})
    }
}

export const getSearchName = (name) => {
    return async function(dispatch){
        try {
            let response = await axios(`/countries?name=${name}`);
            return dispatch({type: GET_SEARCH_NAME, payload: response.data})
        } catch (error) {
            alert('El País buscado no existe');
            console.log(error);
        }
    }
}

export const getFilterContinent = () => {
    return async function(dispatch){
        try {
            let response = await axios('/cont');
            return dispatch({type: GET_FILTER_CONTINENT, payload: response.data})
        } catch (error) {
            console.log(error);
        }
    }
}

export const filterContinent = (filter) => {
    return async function(dispatch){
        try {
            return dispatch({type: FILTER_CONTINENT, payload: filter})
        } catch (error) {
            console.log(error)
        }
    }
}

export const getFilterActivity = () => {
    return async function(dispatch){
        try {
            let response = await axios('/act');
            return dispatch({type: GET_FILTER_ACTIVITY, payload: response.data})
        } catch (error) {
            console.log(error);
        }
    }
}

export const filterActivity = (filter) => {
    return async function(dispatch){
        try {
            return dispatch({type: FILTER_ACTIVITY, payload: filter})
        } catch (error) {
            console.log(error);
        }
    }
}

export const filterAlphabetical = (alpha) =>{
    return {
        type: FILTER_ALPHABETICAL,
        payload: alpha
    }
}

export const filterPopulation = (pop) => {
    return {
        type: FILTER_POPULATION,
        payload: pop
    }
}

export const getFilterCountry = () => {
    return async function(dispatch){
        try {
            let response = await axios('/country');
            return dispatch({type: GET_FILTER_COUNTRY, payload: response.data})
        } catch (error) {
            console.log(error);
        }
    }
}

export const insertActiviy = (payload) => {
    return async function(dispatch){
        let response = await axios.post("/newact", payload);
        return dispatch({type: INSERT_ACTIVITY, payload: response})
    }
}

export const filterDuration = (dur) => {
    return {
        type: FILTER_DURATION,
        payload: dur
    }
}

export const cleanCountriesDetail = () => {
    return {
        type: CLEAN_COUNTRIES_DETAIL       
    }
}