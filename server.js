const express = require('express');
const app = express();

app.use(express.static('public'));
app.use('/styles',express.static('styles'));
app.set('views',__dirname + '/views');
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

app.listen(3000,()=>{
    console.log('server is ready and runnin on port 3000');
});

app.get('/',(req,res)=>{
    res.send('<H1 style = "color:green; text-align:center;"> EL SERVIDOR ESTA CORRIENDO EN EL PUESRTO 3000! </H1>');
});

app.get('/bootstrap',(req,res)=>{
    res.render('bootstrap.html');
});

app.get('/materialize',(req,res)=>{
    res.render('materialize.html');
});


app.get('/index',(req,res)=>{
    res.render('index.html');
});


app.get('/tablero',(req,res)=>{
    res.render('tableroprincipal.html');
});