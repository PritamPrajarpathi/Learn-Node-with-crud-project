const express = require("express")
const router = express.Router();
var accounts = require('./database')



router.get('/accounts',(req,res)=>{
    res.json({userdata : accounts})
})

router.post('/accounts',(req,res)=>{
    const incomingAccount = req.body
    accounts.push(incomingAccount)
    res.json(accounts)
})

router.get('/accounts/:id',(req,res)=>{
    const accountid = Number(req.params.id)
    const getAccount = accounts.find((accs)=> Number(accs.id) === accountid)

    if(!getAccount){
        res.status(500).send("Account not found")
    }else{
        res.json({
            userData : [getAccount]
        })
    }
})

router.put('/accounts/:id',(req,res)=>{
    const accountid = Number(req.params.id)
    const body = req.body;
    const account = accounts.find((acc)=>Number(acc.id) === accountid)
    const index = accounts.indexOf(account)

    if (!account){
        res.status(500).send("Account not found")
    }else{
        const updatedAccount = { ...account, ...body}
        // console.log({...account , ...body});
        accounts[index] = updatedAccount
        res.send(updatedAccount)
    }
})

router.delete('/accounts/:id',(req,res)=>{
    const accountid = Number(req.params.id)
    const newAccounts = accounts.filter((acc)=>acc.id != accountid)
    if(!newAccounts){
        res.status(500).send("Account not found")
    }else{
        accounts = newAccounts
        res.send(newAccounts)
    }
})

module.exports = router;