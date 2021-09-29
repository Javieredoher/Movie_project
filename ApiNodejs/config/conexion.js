const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 123456,
    port: 3306,
    database: 'movie'
});

conexion.connect((err)=>{
    if(err){
        console.log('ha ocurrido un error: '+ err)
    }
    else{
        console.log('la base da datos se conecto!!!')
    }
});

module.exports= conexion;