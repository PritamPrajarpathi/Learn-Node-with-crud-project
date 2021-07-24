const express = require('express')
const cookies = require("cookie-parser")
const app = express()
const PORT = process.env.PORT || 5000

app.use(cookies())
let users={
     name:"John",
     age: 26 
}
app.get('/',(req,res)=>{
     res.send('cookies Tutorial')
})

app.get('/setuser',(req,res)=>{
     res.cookie('User Data',users)
     res.send('user data added to cookies')
})

app.get('/getuser',(req,res)=>{
     res.send(req.cookies)
})

app.get('/logout',(req,res)=>{
     res.clearCookie("User Data")
     res.send("User logout Successfully")
})
app.listen(PORT)
