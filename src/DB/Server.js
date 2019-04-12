const express = require('express')
const server = express()

server.get('/', (req, res) => {
    res.render('')
})

server.listen(3001, () => {
    console.log("Server is running on port 3001")
})