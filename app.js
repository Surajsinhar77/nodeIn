const express = require('express');
const app = express();
require('./db/connectvity');
const usersData = require('./db/usersData');
const users = require('./db/users');


app.use(express.json());
app.use(express.urlencoded({ extended: true }))  // nessary to use when you using from to get the data
app.set('view engine' , 'ejs');

app.get('/', (req, res)=>{
    res.render('index');
})

app.post('/formSubmition', async(req, res)=>{
    // console.log(req.body);
    const data = new usersData(req.body);
    const result = await data.save();
    console.log(result);
    res.render('login');
})


app.get('/signup' , (req, res)=>{
    res.render('signUp');
})

app.post('/signuping', async(req, res)=>{
    console.log(" fuck me")
    const data = new users(req.body);
    const result =  await data.save();
    // res.render('index');
    res.send("u r succesfully signed up ");
})

app.get('/login' , (req, res)=>{
    res.render('login');
})

app.post('/loginAuth', async(req,res)=>{
    console.log(req.body.email)
    const data = await users.findOne({email:req.body.email})
    if(data == null){
        res.render('login');
    }
    res.redirect('/')
})

app.listen(7000);
