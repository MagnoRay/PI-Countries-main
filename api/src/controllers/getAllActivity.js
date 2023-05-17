const { Activity } = require("../db");
const { Router } = require('express');
const router = Router();

router.get('/', async(req, res)=>{
    try {
        const selectActivity = await Activity.findAll({
            attributes: ['name']
        });
        const mapSelecCo = selectActivity.map(ac=>ac.name)
        let arrayAc = [];
        mapSelecCo.map(ac =>{arrayAc=arrayAc.concat(ac)})
        if(!arrayAc){
            return res.status(400).json({message: 'No hay registro de actividades'})
        }else{
            res.status(200).json(arrayAc);
        }
        
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

module.exports = router;