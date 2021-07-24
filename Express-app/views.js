const express = require('express')
const app = express()

app.engine('pug', require('pug').__express)
app.set('view engine','pug')
app.get('/',(req,res)=>{
    res.render('index',{title : "Express View Eingine",h1 : "Express Application", p : "Express Template Engine"})
})

app.listen(5000)