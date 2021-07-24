const express = require('express')
const path = require('path')
const app = express()

const PORT = process.env.PORT || 5000
app.engine('pug', require('pug').__express)
app.set('view engine','pug')

app.use(express.urlencoded({
     extended:true
}))
app.get('/',(req,res)=>{
     res.render('index',{title:"Form Handling"})
})

app.post('/form_submit',(req,res)=>{
     const username = req.body.username
     const email = req.body.email
     res.end(`Your Username is : ${username} and Email is ${email}`)
})
app.listen(PORT)
