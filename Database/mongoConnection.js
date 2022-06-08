const mongoose = require('mongoose');
const connection = mongoose.connect(' mongodb://127.0.0.1:27017/', {useNewUrlParser:true, useUnifinedTopology:true},(err)=>{
 
     if(!err){
         console.log("MongoDb Created Successfully");
     }
     else{
         console.log('err');
     }
});
require('../models/users.model');
module.exports = connection;