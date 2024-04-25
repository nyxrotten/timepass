const express = require ('express');
const app = express();
const index = require("./routes/index")
const endroute = require("./routes/endroute")

app.use("/", index, endroute)

app.listen(3000, () => {
    console.log("El servidor está escuchando en el puerto 3000")
})