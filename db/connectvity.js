const mongoose = require('mongoose')

const connecting = async()=>{
    await mongoose.connect('mongodb://localhost:27017/dashboard');
}
connecting();