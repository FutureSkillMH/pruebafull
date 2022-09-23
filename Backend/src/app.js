 const express = require('express')

const app = express()

const  morgan = require('morgan')

const path = require('path')

const PORT = process.env.PORT  || 3000




//-------------------------------------------





//---------------------------------------------------
app.all('/menu',(req,res,next)=>{
    console.log('estas pasando mmaw (all) por el menú')
    next()
})

app.use(morgan('common'))


app.use(express.urlencoded({extended:false}));
app.use(express.json());

  app.use(express.static('public')); //StaticFile
  app.use(express.json()) //json
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')

app.get('/', (req, res) =>{
     
    res.send('<h1 style="color:blue;letter-spacing:20px">Bienvenido este es el servidor por defecto</h1>')

} )

app.use(require('./router/contacto.routes'))

app.use(require('./router/contacto.routes1'))

app.use(require('./router/contacto.routes2'))





app.listen(PORT, () => console.log(`Estamos en el puerto ${PORT}!`))