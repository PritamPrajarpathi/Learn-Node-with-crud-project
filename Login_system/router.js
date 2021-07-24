var express = require('express')
var router = express.Router()

const credential = {
    email: "admin@gmail.com",
    password :'123'
}

router.post('/login',(req,res)=>{
    if(req.body.email == credential.email && req.body.password == credential.password){
        req.session.user = req.body.email
        res.redirect('/route/dashboard')
        // res.end("login successful")
    }else{
        res.send("Invalid Username")
    }
})

//route for dashboard
router.get('/dashboard',(req,res)=>{
    if(req.session.user){
        res.render('dashboard',{user : req.session.user})
    }else{
        res.send("Unauthorize user")
    }
})

router.get('/logout',(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            console.log(err);
            res.send("Error")
        }else{
            res.render('base',{title : "Express", logout : "Successfully logout!"})
        }

    })
})


module.exports = router;