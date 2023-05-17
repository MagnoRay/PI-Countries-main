const { Router } = require("express");

const { Country, Activity } = require("../db");

const router = Router();

router.post("/", async(req, res)=>{
    try {
        const {name, difficulty, duration, season, countryname} = req.body;
        if(!name || !difficulty || !duration || !season){
           return res.status(400).send('Completar todo los campos');
        }

        const postActiviy = await Activity.create({
            name,
            difficulty,
            duration,
            season
        })
        //console.log(postActiviy.__proto__);
        const asociateCountries = await Country.findAll({
            where: {
                name: countryname
            }
        })
        postActiviy.addCountries(asociateCountries);
        return res.status(200).json(postActiviy);
    } catch (error) {
        res.status(500).send({error: error.message});
    }
});


module.exports = router;