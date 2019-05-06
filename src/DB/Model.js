const mongoose = require('mongoose')
const Schema = mongoose.Schema

let QA = new Schema({
    id: {
        type: Number
    },
    user: {
        type: String
    },
    question: {
        type: String
    },
    answer: {
        type: String
    }
})
