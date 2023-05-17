const axios = require("axios");
const urlCountryApi = 'https://restcountries.com/v3/all';
const { Country } = require("../db");

const getCountryApi = async () => {
    
    const countryApi = await axios(urlCountryApi);

        const countrys = countryApi.data.map(country=>{
            return{
            name: country.name.common,
            id: country.cca3,
            flag: country.flags != null ? country.flags[0] : 'No se encontro bandera',
            region: country.region != null ? country.region : 'No se encontro region',
            capital: country.capital != null ? country.capital[0] : 'No se encontro capital',
            subregion: country.subregion,
            area: country.area,
            population: country.population  
            }            
        })
        return countrys;
}

const saveApiCountry = async () => {
    try {
        const checkDB = await Country.findAll()
        if(!checkDB.length){
            const allCountry = await getCountryApi();
            await Country.bulkCreate(allCountry);
        }        
    } catch (error) {
        console.log(error);
    }
}



module.exports = {
    saveApiCountry
}