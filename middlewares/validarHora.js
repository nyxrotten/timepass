const {getTime} = require("../middlewares/horaMiddleware");

const accesAllowed = getTime() > "11:59";

console.log(accesAllowed)