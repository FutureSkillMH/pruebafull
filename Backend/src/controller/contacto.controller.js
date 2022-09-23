const controller = {}

controller.contacto = ((req,res) =>{

    res.render('contac',{ titulo: 'Bienvenido al método EJS'})
    
//   res.send("Bienvenidos al INICIO")
//     console.log('este es el registro INICIO')  
});

module.exports = controller;