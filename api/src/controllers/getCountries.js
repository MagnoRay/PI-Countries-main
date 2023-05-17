const { Country, Activity } = require("../db");
const { Router } = require('express');
const router = Router();

const getAllCountries = async () =>{
    return await Country.findAll({
        include: {
            model: Activity,
            attributes: ['name', 'difficulty', 'duration','season'],
            through: {
                attributes: [] 
            },
        }
    });
};

router.get('/', async(req, res) =>{
    try {       
        const { name } = req.query;
        const getCountries = await getAllCountries(name);
        if(name){
            const nameCountry = getCountries.filter((country)=>country.name.toLowerCase().includes(name.toLowerCase()))
        
            if(nameCountry.length){
                return res.status(200).send(nameCountry);
            }else{
                return res.status(400).send('El País buscado no existe');
            }
        }else{
            return res.status(200).send(getCountries);
        }
    } catch (error) {
        return res.status(00).send({error: error.message});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const allCountries = await getAllCountries();
        const filterId = allCountries.filter((country)=>country.id == id);
         if(!filterId.length){
            return res.status(200).json({message: `No hay countries con este id (${id}).`});
         }else{
            return res.status(200).json(filterId);
         }
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});




module.exports = router;