const express = require("express");
//const usuariosRutas = require("./rutas/rutasUsuarios");
const usuariosRutas = require("./rutas/rutasProductos");
require("dotenv").config();

const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/",usuariosRutas);
app.use(session({
    secret:process.env.SESSION_SECRETO,
    reserve:true,
    saveUninitialized:true
}));

var port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("Servidor en http://localhost:"+port)
});