/* import { hello } from "./es6.js";
 hello();
const http = require("http");
const hostname = "localhost";
const port =3000;

const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h4>Helllo -World2</h4>");
});

server.listen(port,hostname, () => {
    console.log(`server is running on localhost :${port}`);

});

const hello = require('./hello');
console.log(hello);

const output = require('./sample');
console.log(output.sample);

const output2 = require('./log');
output2.log("helloo , this is jaswanth");  */


// Express server

 const express = require("express");
 const cors = require("cors");
 const bodyParser = require("body-parser")
 const connection = require('./Database/db')
 const app = express();
 const port = 3000;


  app.use(cors({origin:"*"}));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));

  app.use(function(req,res,next){
        req.connection=connection;
        next()
  })
  // Route 

     const router = require('routes/user.route');
     app.use("/api", router);


     app.listen(port,()=>{
     console.log("server is running :"+port);
 })






















