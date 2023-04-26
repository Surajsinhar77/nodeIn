const express = require('express');
const app = express();
require('./db/connectvity');
const users = require('./db/users');


app.use(express.json());
app.use(express.urlencoded({ extended: true }))  // nessary to use when you using from to get the data
app.set('view engine' , 'ejs');

app.get('/', (req, res)=>{
    res.render('index');
})

app.post('/formSubmition', async(req, res)=>{
    res.writeHead(200, {"Content-Type":'application/json'})
    console.log(req.body);
    const data = new users(req.body);
    const result = await data.save();
    console.log(result);
    res.render('login');
})


app.get('/signup' , (req, res)=>{
    res.render('signUp')
})

app.get('/login' , (req, res)=>{
    res.render('login')
})

app.listen(7000);
