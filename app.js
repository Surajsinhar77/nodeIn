const express = require('express');
const app = express();
require('./db/connectvity');
const usersData = require('./db/usersData');
const users = require('./db/users');
const session = require('express-session');
const flash = require('express-flash');

app.use(express.json());
app.use(express.urlencoded({ extended: true }))  // nessary to use when you using from to get the data
app.set('view engine' , 'ejs');
app.use(flash({ key: 'myapp_messages',
    retries: 2,
    expires: 5000
}));


app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false
}));

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
    console.log("here i am ")
    const data = new users(req.body);
    const result =  await data.save();
    req.flash('success' , 'You are sucessFull SignUp');
    res.redirect('/');
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
