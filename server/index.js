require('./config/connection');

const express = require('express');
const port = (process.env.PORT || 3000);

//express
const app = express();

//admit
app.use(express.json())

//config
app.set('port', port);

//routes
app.use('/api', require('./routes'))

//Init Express
app.listen(app.get('port'), (error)=>{

    if(error){
        console.log ('Error initializing server: ' + error)
    }

    else{
        console.log('Server initializing in port: '+port)
    }
})