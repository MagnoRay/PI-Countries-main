const { Country} = require("../db");
const { Router } = require('express');
const router = Router();

router.get('/', async(req, res)=>{
    try {
        const selectCountries = await Country.findAll({
            attributes: ['name']
        });
        const mapSelecCo = selectCountries.map(co=>co.name)
        /*
        let arrayCo = [];
        mapSelecCo.map(co =>{arrayCo=arrayCo.concat(co)})
        */
        res.status(200).json(mapSelecCo);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

module.exports = router;