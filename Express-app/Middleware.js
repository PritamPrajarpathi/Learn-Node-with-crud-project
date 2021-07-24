const express = require('express')
const app = express();

const myLogger = function(req,res,next){
    console.log("Logged");
    next()
}

const requestTime = function(req,res,next){
    req.requestTime = Date.now()
    next()
}

app.use(myLogger)
app.use(requestTime)


app.get('/',function(req,res){
    res.send(`Current Time: ${req.requestTime}`)
})

app.listen(5000,console.log("started"))