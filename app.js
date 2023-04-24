const express = require('express');
const app = express();

app.use(express.json())
app.set('view engine' , 'ejs');

app.get('/', (req, res)=>{
    res.render('index');
})


app.listen(7000);
