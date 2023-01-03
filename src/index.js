const bodyParser = require("body-parser")
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const router = require("./Routes/router")

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use("/", router)

mongoose
    .connect("mongodb+srv://functionup-radon-cohort:radon123@cluster0.zbsotuc.mongodb.net/group17Database?retryWrites=true&w=majority")
    .then(() => {
        console.log("Mongodb connected")
        app.listen(6000, () => {
            console.log("Express running on", 6000)
        })
    })