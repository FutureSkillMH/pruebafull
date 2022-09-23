const conexion = require("../database/db");

const controller = {}



controller.database = ((req, res) => {
  //let sql = "SELECT * FROM beers";
  conexion.query('SELECT * FROM proyectos', (err, proyecto) => {
    if (err) {
      throw err;
    } else {
      res.render('data', {
        nuevo: proyecto, titulo: 'visualiza tu proyecto!!',
        texto2 : "Acá puedes agregar más campos!!"

      })

    }
  })
})

// crud

controller.cut = ((req, res) => {
  const crear_elem = req.body.crear_elem
  const elimi_elem = req.body.elimi_elem
  const id = req.body.id
  const name = req.body.name
  const ubication = req.body.ubication
  const description = req.body.description
  const metros = req.body.metros
  const image = req.body.image

  if (crear_elem){
    conexion.query('insert into proyectos SET ?',{name:name,ubication:ubication, description:description,metros:metros,image:image}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            //console.log(results);   
            res.redirect('/data');         
        }
    });
   
}

if (elimi_elem){
    conexion.query('delete from proyectos  where id = ?',[id], (error, results)=>{
        if(error){
            console.log(error);
        }else{   
            res.redirect('/data');         
        }
    });
   
}

  })


//-------------------------------------------


controller.edit = ((req, res) => {
  const id = req.params.id;
    conexion.query('SELECT * FROM proyectos WHERE id = ?', [id], (err, proyecto) => {
      if(err) {
        res.json(err);
      }
      res.render('edit', { proyecto });
    });
  });


controller.update = ((req, res) => {
  const id = req.params.id;
  const data = req.body;
  conexion.query('UPDATE proyectos SET ? WHERE id = ?', [data, id], (err, rows) => {
    if (err) {
      throw err;
    } else {
      res.redirect('/data');

    }
  })
})




module.exports = controller;


