const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))  // nessary to use when you using from to get the data
app.set('view engine' , 'ejs');

app.get('/', (req, res)=>{
    res.render('index');
})

app.post('/formSubmition', (req, res)=>{
    // res.writeHead(200, {"Content-Type":'application/json'})
    var data = req.body;
    console.log(req.body);
    res.send('index');
    res.sendStatus(200);
})


app.listen(7000);
