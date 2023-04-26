const mongoose = require('mongoose');

const userSchemaFunction = ()=>{
    const userSchema = new mongoose.Schema({
        name: String,
        email : String,
        password: String,
        repassword: String, 
        tandc: String,
    });
    return userSchema;
}

module.exports = mongoose.model('users', userSchemaFunction());