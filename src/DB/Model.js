const mongoose = require('mongoose')
const Schema = mongoose.Schema

let QA = new Schema({
    question: {
        type: String
    },
    answer: {
        type: String
    }
})

module.exports = mongoose.model('QA', QA)
