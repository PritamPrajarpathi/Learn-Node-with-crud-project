const express = require('express')
const session = require("express-session")
const app = express()
const PORT = process.env.PORT || 5000

app.use(session({
     secret : "Your Sectret key",
     resave : true,
     saveUninitialized : true
}))

app.get('/',(req,res)=>{
     req.session.name = "John"
     return res.send("Session Set")
})

app.get('/session',(req,res)=>{
     var name = req.session.name;
     return res.send(name)
})

app.get('/destroy',(req,res)=>{
     req.session.destroy(()=>console.log(`session destroied`))
     res.end()
})
app.listen(PORT)
