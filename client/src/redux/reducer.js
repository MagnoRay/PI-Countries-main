import { FILTER_ACTIVITY, FILTER_ALPHABETICAL, FILTER_CONTINENT, GET_FILTER_COUNTRY, FILTER_POPULATION, GET_COUNTRIES, GET_DETAIL, GET_FILTER_ACTIVITY, GET_FILTER_CONTINENT, GET_SEARCH_NAME, INSERT_ACTIVITY, FILTER_DURATION, SET_LOADING } from "./action-types";
const initialState = {
    countries: [],
    rcountries: [],
    detail: {}, 
    continent: [],
    activity: [],
    country: [],
    duration: [],
    loading: false
}
const reducer = (state = initialState, action) => {
    switch(action.type){

        case GET_COUNTRIES: 
        return {
            ...state,
            countries: action.payload,
            rcountries: action.payload
        }

        case GET_DETAIL: 
        return {
            ...state,
            detail: action.payload
        }

        case GET_SEARCH_NAME:
            return{
                ...state,
                rcountries: action.payload
            }
        
        case GET_FILTER_CONTINENT: 
            return{
                ...state,
                continent: action.payload
            }
        
        case FILTER_CONTINENT: 
            const allCountries = state.countries;
            let continent = [];
            if(action.payload === "Todos"){
                continent = allCountries;
            }else{
                for (let i = 0; i < allCountries.length; i++) {
                    let filterCont = allCountries[i].region===action.payload;
                        if(filterCont){
                            continent.push(allCountries[i]);
                        }                    
                }
            }
            return{
                ...state,
                rcountries: continent
            }

        case GET_FILTER_ACTIVITY: 
            return {
                ...state,
                activity: action.payload
            }
        case FILTER_ACTIVITY:
            const allActivity = state.countries;
            let arrayActivity = [];
            if(action.payload === "Todos"){
                arrayActivity = allActivity;
            }else{
                for (let i = 0; i < allActivity.length; i++) {
                    let filterAct = allActivity[i].Activities.find((a)=>a.name===action.payload);
                    if(filterAct){
                        arrayActivity.push(allActivity[i]);
                    }                    
                }
            }
            return{
                ...state,
                rcountries: arrayActivity
            }
            
        case FILTER_ALPHABETICAL:
            const filAlp = action.payload === "Ascendente"
            ? state.rcountries ? state.rcountries.sort((a,b)=>{
                if(a.name.toLowerCase()>b.name.toLowerCase()){
                    return 1;
                }
                if(b.name.toLowerCase()>a.name.toLowerCase()){
                    return -1;
                }
                return 0;
            })
            :
            state.countries.sort((a,b)=>{
                if(a.name.toLowerCase()>b.name.toLowerCase()){
                    return -1;
                }
                if(b.name.toLowerCase()>a.name.toLowerCase()){
                    return 1;
                }
                return 0;
            })
             :
             state.rcountries ? state.rcountries.sort((a,b)=>{
                if(a.name.toLowerCase()>b.name.toLowerCase()){
                    return -1;
                }
                if(b.name.toLowerCase()>a.name.toLowerCase()){
                    return 1;
                }
                return 0;
            })
            :
            state.countries.sort((a,b)=>{
                if(a.name.toLowerCase()>b.name.toLowerCase()){
                    return -1;
                }
                if(b.name.toLowerCase()>a.name.toLowerCase()){
                    return 1;
                }
                return 0;
            })
            return{
                ...state,
                rcountries: [...filAlp]
            }
            /*
            const filAlp = action.payload === "Ascendente"
            ? state.countries.sort((a,b)=>{
                if(a.name.toLowerCase()>b.name.toLowerCase()){
                    return 1;
                }
                if(b.name.toLowerCase()>a.name.toLowerCase()){
                    return -1;
                }
                return 0;
            })
            :
            state.countries.sort((a,b)=>{
                if(a.name.toLowerCase()>b.name.toLowerCase()){
                    return -1;
                }
                if(b.name.toLowerCase()>a.name.toLowerCase()){
                    return 1;
                }
                return 0;
            })
            return{
                ...state,
                rcountries: [...filAlp]
            }
            */

        case FILTER_POPULATION:
            const filPop = action.payload === "minimo"
            ? state.rcountries ? state.rcountries.sort((a,b)=>{
                return a.population-b.population;
            })
            :
            state.countries.sort((a,b)=>{
                return b.population-a.population;
            })
            : state.rcountries? state.rcountries.sort((a,b)=>{
                return a.population-b.population;
            }).reverse()
            :
            state.countries.sort((a,b)=>{
                return b.population-a.population;
            }).reverse()
            return{
                ...state,
                rcountries: [...filPop]
            }
            /*
            const filPop = action.payload === "minimo"
            ? state.countries.sort((a,b)=>{
                return a.population-b.population;
            })
            :
            state.countries.sort((a,b)=>{
                return b.population-a.population;
            })
            return{
                ...state,
                rcountries: [...filPop]
            }
            */

        case GET_FILTER_COUNTRY:
            return{
                ...state,
                country: action.payload
            }
        
        case INSERT_ACTIVITY:
            return{
                ...state
            }
        case FILTER_DURATION: 
            const arrDuration = []
            for (let i = 1; i <=24 ; i++) {
                let stringToTime = i;
                    if(i<10){
                        stringToTime = `0${stringToTime}:00`;
                    }else{
                        stringToTime += `:00`;
                    }
                arrDuration.push(stringToTime);
            }
            return{
                ...state,
                duration: arrDuration
            }
        
        case SET_LOADING:
            return {
                ...state,
                loading: false
            }
        
        default: 
        return {
            ...state
        }
    }
}

export default reducer;