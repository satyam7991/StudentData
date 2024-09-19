const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/users')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/profile")

app.get('/getUsers', (req,res)=>{
    UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(3001, ()=>{
    console.log("server is running")
})