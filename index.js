const express = require('express');
const app = express();

app.listen('8000', (req,res)=>{
    console.log('aplicacion iniciada en localhost://8000');
});

app.set('views', './vistas')
app.set('view engine','ejs')

app.use(express.static('./estilos'))

app.get('/',(req,res)=>{
    // res.send('funciona todo');
    res.render('index')
});