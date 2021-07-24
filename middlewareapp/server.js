const express = require("express")
const path = require("path")
const fs = require("fs")

const app = express()

app.use((req,res,next)=>{
    console.log("Request Date: "+ new Date() );
    // res.sendFile("./static/cool.txt")
    next()
})


app.use((req,res,next)=>{
    var filepath = path.join(__dirname,"static",req.url)
    fs.stat(filepath,(err,fileinfo)=>{
        if(err){
            next()
            return
        }else if(fileinfo.isFile()){
            res.sendFile(filepath)
        }else{
            next()
        }
    })
})


app.use((req,res)=>{
    res.status(404)
    res.send("File not found")
})

  
app.listen(5000)