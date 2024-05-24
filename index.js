const express = require("express");
const app = express();
const port = 3001;

const {getEquipos , getEquiposById} = require("./contollers/eqiposcontroller")

app.get("/", getEquipos);

app.get("/:id", getEquiposById);

app.listen(port, ()=>{
    console.log (`conectado correctamente al puerto: ${port}`)
})