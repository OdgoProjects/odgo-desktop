const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const QARoutes = express.Router()

const PORT = 4000

let QA = require('./Model')

app.use(cors())
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/odgo', {
    useNewUrlParser: true
})
const connection = mongoose.connection

connection.once('open', () => {
    console.log(`Connection to odgo-db database established`)
})

QARoutes.route('/').get((req, res) => {
    QA.find((err, qas) => {
        if(err){
            console.log(err)
        }else{
            res.json(qas)
        }
    })
})

QARoutes.route('/:id').get((req, res) => {
    let id = req.params.id
    QA.findById(id, (err, qa) => {
        res.json(qa)
    })
})

QARoutes.route('/add').post((req, res) => {
    let qa = new QA(req.body)
    qa.save()
        .then((qa) => {
            res.status(200).json({
                'qa': 'Question added successfully' 
            })
        })
        .catch((err) => {
            res.status(400).send('Adding new question failed')
        })
})

QARoutes.route('/update/:id').post((req, res) => {
    QA.findById(req.params.id, (err, qa) => {
        if(!qa){
            res.status(400).send('Question not found')
        } else {
            qa.question = res.body.question
            qa.answer = res.body.answer

            qa.save()
                .then((qa) => { 
                    res.json('Question updated')
                })
                .catch((err) => {
                    res.status(400).send('Update not possible')
                })
        }
    })
})

app.use('/odgo', QARoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${ PORT }`)
})