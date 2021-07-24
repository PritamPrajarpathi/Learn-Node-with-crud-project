const express = require('express')
const path = require('path')
const bodyparser = require('body-parser')
const app = express()
const session = require('express-session')
const { v4: uuidv4 } = require("uuid")
const router = require("./router")
const port = process.env.PORT || 5000
app.set('view engine','ejs')
// load static assets
app.use('/static',express.static(path.join(__dirname,'public')))
app.use('/assets',express.static(path.join(__dirname,'public/assets')))

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended : true}))
app.use(session({
    secret : uuidv4.toString(),
    resave:false,
    saveUninitialized: true
}))
app.use('/route',router)

app.get('/',(req,res)=>{
    res.render('base',{title : "Login System"})

})

app.listen(port)