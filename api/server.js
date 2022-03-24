const express = require('express')
const bodyParser = require('body-parser')
const Sequelize = require("sequelize");
const User = require('./models').User

const app=express()


app.get('/hello', (req,res)=>{
    res.send({data:'welcome'})
})


app.get('/getAllUsers', (req,res)=>{
  User.findAll( {
    attributes: ['id', 'firstName'],
    limit: 5,
    order: [['id', 'DESC']]
}).then(users => {
    return res.status(200).json({
        users
    })
}).catch(err => {
    return res.status(400).json({err})
})
})




app.listen(1212,()=>{
    console.log("App is firing on 1212")
})