// Modules and Globals
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const { response } = require('express');
const app = express();

// Express Settings
app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Home Page
app.get('/', (req, res) => {
    res.send({ message: 'Backend API'})
})

// CONTROLLERS AND ROUTES
app.use('/users', require('./controllers/users'));


// Listen for Connections
app.listen(process.env.PORT, () => {
    console.log(`Listening on ${process.env.PORT}`)
})