
const express = require('express')
const app = express()
const path = require("path")

const publicpath = path.resolve(__dirname,'public/index.html')

const data = {
    id : 1,
    name : "Han"
}
app.get('/',(req,res)=>{
    res.send(data) 
})
app.get('/about',(req,res)=>{
    res.sendFile(publicpath) 
})

app.listen(5000)