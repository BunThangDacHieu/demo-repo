require("dotenv").config();
const mysql = require("mysql");
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const app = express();
const post = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended: false}))

//Application/json
app.use(bodyParser.json());

//Static files
app.use(express.static('public'));

//Templating engine
const handlebars = exphbs.create({ extname: '.hbs',});
app.engine('.hbs', handlebars.engine);
app.set('view engine', '.hbs');

//Connecttion pool

// const pool = mysql.createPool({
//     connectionLimit: 10,
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE 
// })

// pool.getConnection((err, connecting) => {
//     if(err) throw err; //not connecting

//     console.log('Contracted as ID ' + connecting.threadId);  
// });


//Router
const route = require('./server/route/user');
app.use('/', route);

app.listen(post, ()=> console.log(`Listen on the ${post}`))
