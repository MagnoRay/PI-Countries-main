const { Country } = require("../db");

const { Router } = require("express");

const router = Router();

router.get('/', async(req, res)=> {
    try {
        const selectContinent = await Country.findAll({
            attibutes: ['region']
        });
        // Continente repetido en un solo array
        const mapSelectCo = selectContinent.map(co=>co.region);
        
        /*let arrayCo = []; 
        mapSelectCo.map(co=>{arrayCo=arrayCo.concat(co)})*/

        let deleteRepitCo = mapSelectCo.filter((ele, ind, arr)=>{
            return arr.indexOf(ele)===ind
        })

        res.status(200).json(deleteRepitCo);
    
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
})

module.exports = router;