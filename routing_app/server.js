const express = require("express")
const app = express()
const route = require('./router')
const body_parser = require('body-parser')

app.use(body_parser.urlencoded({extended:false}))
app.use('/route',route)


//home route
app.get('/',(req,res)=>{
    res.end("Routing app")
})

app.listen(5000)