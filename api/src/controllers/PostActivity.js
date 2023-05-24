const { Router } = require("express");

const { Country, Activity } = require("../db");

const router = Router();

router.post("/", async(req, res)=>{
    try {
        const {name, difficulty, duration, season, countryname} = req.body;
        if(!name || !difficulty || !duration || !season, !countryname){
           return res.status(400).send('Completar todo los campos');
        }
        const activityVal = await Activity.findOne({
            where:{
                name: name
            },
            include: [{
                model: Country,
                where: {name: countryname }
            }]
        })
        if(activityVal===null){
            const [postActiviy, created] = await Activity.findOrCreate({
                where:{
                    name: name,
                    difficulty: difficulty,
                    duration: duration,
                    season: season
                }
            })
            //console.log(postActiviy.__proto__);
            const asociateCountries = await Country.findAll({
                where: {
                    name: countryname
                }
            })
            postActiviy.addCountries(asociateCountries);
            return res.status(200).json(postActiviy);
        }else{
            res.status(400).json({message: `La actividad ya existe en ${countryname}`})
        }
        
    } catch (error) {
        res.status(500).send({error: error.message});
    }
});


module.exports = router;