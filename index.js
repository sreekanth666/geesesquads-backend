require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router = require('./Routes/router')
require('./DB/connection')

// Creating express server
const carsServer = express()

// Using cors for data transfer between applications at different ports
carsServer.use(cors())
// Converting JSON into server understandable format
carsServer.use(express.json())
// Use router module
carsServer.use(router)

// Setting up PORT for server
const PORT = 4000 || process.env.PORT
carsServer.listen(PORT, () => {
    console.log("Server is up and listening");
})

// Configuring GET request
carsServer.get('/', (req, res) => {
    res.send("GET request")
})