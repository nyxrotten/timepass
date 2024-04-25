const express = require('express');
const router = express.Router();
const {getTime} = require("../middlewares/horaMiddleware");


router.get("/", (req, res) => {
    res.send(`<h1>Estas en el index</h1><h2>${getTime()}</h2>
                <a href="./endroute">BOTÓN</a>`)
});

router.get("/endroute", (req, res) => {
    res.send(`<h1>Estas en el endroute</h1><h2></h2>
                <a href="./">BOTÓN</a>`)
});

router.use((req, res) => {
    res.status(400).send(`<h1>Ruta no encontrada</h1><a href="/">BOTÓN</a>`)
});

module.exports = router;