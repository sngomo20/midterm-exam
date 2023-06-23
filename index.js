const express = require('express');
const app = express();


//Using Body-Parser
const bparser= require('body-parser');

app.use(bparser.json()); // Parse JSON bodies
app.use(bparser.urlencoded({ extended: true }));


//mongo connection
const mongoose = require('mongoose');
const dbConfig = require('./config/dbconfiguration');

mongoose.connect(dbConfig.url, {
    useNewUrlParser:true
 }).then(()=>console.log("DB connection successful"))
    .catch(err =>{
        console.log("DB connection is not successful... ", err);
    });


    app.get('/', (req, res)=>{
        res.json({
            "message": "It is working!!"
        })
       })
    
    require('./app/routes/dbroutes')(app)

    app.listen(2000, ()=>{
        console.log('server is running!!!!!')
    })

