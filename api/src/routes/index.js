const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getCountries = require("../controllers/getCountries");
const postActivity = require("../controllers/PostActivity");
const getAllCountries = require("../controllers/getAllCountries");
const getAllActivity = require("../controllers/getAllActivity");
const getAllContinent = require("../controllers/getAllContinent");


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/countries", getCountries);
router.use("/newact", postActivity);
// Route the filter
router.use("/country", getAllCountries)
router.use("/act", getAllActivity);
router.use("/cont", getAllContinent);

module.exports = router;
