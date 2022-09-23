const controller = {}

controller.contacto1 = ((req,res) =>{

    res.render('contac1',{ titulo: 'Bienvenido al método EJS1'})
    
//   res.send("Bienvenidos al INICIO")
//     console.log('este es el registro INICIO')  
});

module.exports = controller;