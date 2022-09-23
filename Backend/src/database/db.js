const mysql = require("mysql");


const conexion = mysql.createConnection({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'vivienda_nueva'
});

conexion.connect((err)=>{
    if(err){
        throw err
    } else {
        console.log('la conexión se realizó OK!')
    }


});

module.exports = conexion;