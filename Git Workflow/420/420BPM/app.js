require("dotenv").config()
const express = require("express")
const app = express()

//Middleware
app.use(express.json())
const cors = require("cors")
app.use(cors())

const apiRouter = require("./api")
app.use("/api", apiRouter)

module.exports = app