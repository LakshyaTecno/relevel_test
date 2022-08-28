const bodyParser = require('body-parser');
const express = require('express');

const app = express();

//Registering body-parser middleware
app.use(bodyParser.json());


/**
 * Code for the table initialization
 */

const db = require("./models");

const Role = db.role;



db.sequelize.sync({force:true}).then(()=>{
    console.log("table dropped and recreated");
    init();
}).catch(err=>{
    console.log(err.message);
})


/**
 * This function should be executed at the begining of the app startup
 */
function init(){

   
    Role.create({
        id:1,
        name : "customer"
    });

    Role.create({
        id:2,
        name : "admin"
    });


}





//Initialize the routes
require('./routes/authRoute')(app);


app.listen(8080,()=>{
    console.log("Application started on port no :",8080 );
})