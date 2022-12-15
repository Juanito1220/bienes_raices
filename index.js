import express from "express";
import UsuariosRouter from './routes/UsuariosRouter.js';
import db from './config/db.js'

//Creacion de la app
const app =express();

//Lectura datos de formularios
app.use(express.urlencoded({extended:true}))

//Conexión a la base de datos
try {
    await db.authenticate();
    console.log('Conexión correcta a la base de datos')
} catch (error) {
    console.log(error)
}
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