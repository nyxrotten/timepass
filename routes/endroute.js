const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send(`<h1>Estas en el endorute</h1>
                <button href="./index">BOTÓN</button>`)
})

router.use((req, res) => {
    res.status(400).send(`<h1>Ruta no encontrada</h1>`)
});

module.exports = router;