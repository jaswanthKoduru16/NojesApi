// connecting database
const mysql = require("mysql");
const connection = mysql.createConnection({
     host:"localhost",
     port:3306,
     user:"root",
     password: "root",
     database:"nodejstraining",
     multipleStatements:true,
});
connection.connect((err)=>{
    if(!err){
        console.log("connection established");
    } else{
        console.log(err);
      }
});
module.exports = connection;

// create database

 //let query = "";
 /* query = "CREATE DATABASE nodejstraining";
 connection.query(query, (err, result)=>{
     if(!err){
         console.log("Sucessfully created database");
     } else{
         console.log("err");
     }
 });  */
 
 
 /* Drop Database
  
  query ="DROP DATABASE nodejstraining";
  connection.query(query,(err,result) => {
      if(!err){
          console.log("Successfully deleted database");
      } else {
          console.log("err");
          }

  });  */


// create table  

/*
query= ` 
   CREATE TABLE users(
       id INT(11) NOT NULL AUTO_INCREMENT,
       email VARCHAR(100) NOT NULL,
       password VARCHAR(100)  NOT NULL,
       role VARCHAR(100) DEFUALT 'user',
       PRIMARY KEY(id),
       UNIQUE (email)
  );
  CREATE TABLE enrolls(
      id INT(11) REFERENCES users(id),
      FOREIGN KEY (id)  REFERENCES users(id)
  );
`;

connection.query(query,(err, result) => {
    if(!err){
        console.log("Successfully Created tables");
    } else {
        console.log("err");
        }
    });   */

