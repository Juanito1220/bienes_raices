import express from "express";
import UsuariosRouter from './routes/UsuariosRouter.js';


//Creacion de la app
const app =express();

//Routing
app.use('/auth',UsuariosRouter)

//Habilitar Pug

app.set('view engine','pug')
app.set('views', './views')

//Carpeta publica
app.use(express.static('public'))

//Definicion de puerto de arranque

const port=3000;
app.listen(port,()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`)
});