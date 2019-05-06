const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const PORT = 3001

app.use(cors())
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/odgo-db', {
    useNewUrlParser: true
})
const connection = mongoose.connection

connection.once('open', () => {
    console.log(`Connection to odgo-db database established`)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${ PORT }`)
})