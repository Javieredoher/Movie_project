const mysql = require('mysql');

const conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'javierH_mySQL199*!-',
    port:'3306',
    database:'moviedb'
});

conexion.connect((err)=>{
    if(err){
        console.log('Error in database connection: '+ err)
    }
    else
    {console.log('Connected')}
});

module.exports=conexion