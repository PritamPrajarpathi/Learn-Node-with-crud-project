const express = require('express')
const app = express()
const path = require("path")

const publicpath = path.resolve(__dirname,'public')

app.use(publicpath , express.static('public'))

app.get('/',(req,res)=>{
    res.send(`Static Files`);
}
)
app.listen(5000,console.log('started'))