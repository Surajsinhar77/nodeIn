const mongoose = require('mongoose');

const userSchemaFunction = ()=>{
    const userSchema = new mongoose.Schema({
        inputName4: String,
        inputEmail4: String,
        inputCourse4: String,
        inputClgUni4: String,
        inputClgEmail4: String,
        inputCurrentSem4: String,
        inputCurrentYr4: String,
        inputCurrentWorking4: String,
        inputCity: String,
        inputState: String,
        gridCheck: String
    });
    return userSchema;
}

module.exports = mongoose.model('userDatas', userSchemaFunction());