import Usuario from '../models/Usuario.js'


const formularioLogin=(req,res)=>{
res.render('auth/login',{
    pagina: 'Iniciar Sesión'
})
}


const formularioRegistro=(req,res)=>{
res.render('auth/registro',{
    pagina: 'Crear Cuenta'
})
}

const registrar= async (req,res)=>{
   const usuario = await Usuario.create(req.body)
    }


const formularioOlvidePassword=(req,res)=>{
    res.render('auth/olvide-password',{
        pagina: 'Recupera tu acceso a Bienes Raices'
    })
    }


export{
    formularioLogin, formularioRegistro,formularioOlvidePassword,registrar
}

