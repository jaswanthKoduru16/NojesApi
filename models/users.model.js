const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const UserSchema = new mongoose.Schema({
      name:String,
      age:Number,
      email:String,
      password:String
});
module.exports = mongoose.model('User', UserSchema)