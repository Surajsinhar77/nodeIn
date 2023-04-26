const mongoose = require('mongoose');

const userSchemaFunction = ()=>{
    const userSchema = new mongoose.Schema({
        name:String,
        email:String,
        password:String,
        rePassword:String
    })
    return userSchema;
}

module.exports = mongoose.model('users', userSchemaFunction());