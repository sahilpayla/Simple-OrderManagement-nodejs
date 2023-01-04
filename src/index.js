const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const route = require('./routes/route')
const app = express()

app.use(bodyparser.json())


mongoose.set('strictQuery', true)
mongoose
    .connect("mongodb+srv://rzyHkFvcKuKG7Vde:rzyHkFvcKuKG7Vde@sahilpaylacluster.h8dndkb.mongodb.net/?retryWrites=false&w=majority")
    .then(() => console.log("mongoDB is connected"))
    .catch((error) => console.log(error))


app.use('/', route)

app.listen(6000, function () {
    console.log("express app is running on PORT " + (6000))
})