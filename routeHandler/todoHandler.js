const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const todoSchema = require('../schema/todoSchema')
// Created a Todo Model for todo collection.
const Todo = new mongoose.model("Todo", todoSchema)


//get all todos
router.get('/', async (req, res) => {
    Todo.find({status: 'active'}, (err, data) => {
        if (err) {
            res.status(500).json({message: 'There was a server error', error: err})
        } else {
            res.status(200).json({
                result: data,
                message: 'Todo get successfully.'
            })
        }
    })
})

//get one todos
router.get('/:id', async (req, res) => {
    Todo.findOne({_id: req.params.id}, (err, data) => {
        if (err) {
            res.status(500).json({message: 'There was a server error', error: err})
        } else {
            res.status(200).json({
                result: data,
                message: 'Todo get successfully.'
            })
        }
    })
})

//save one todos
router.post('/', async (req, res) => {
    const newTodo = new Todo(req.body);
    await newTodo.save(err => {
        if (err) {
            res.status(500).json({message: 'There was a server error', error: err})
        } else {
            res.status(200).json({message: 'Todo saved successfully.'})
        }
    })
})

//save multiple todos
router.post('/all', async (req, res) => {

    await Todo.insertMany(req.body, err => {
        if (err) {
            res.status(500).json({message: 'There was a server error', error: err})
        } else {
            res.status(200).json({message: 'Todos were saved successfully.'})
        }
    })
})

//update one todos
router.put('/:id', async (req, res) => {
    await Todo.updateOne({
            _id: req.params.id
        },
        {
            $set: {
                status: "active",
                title: 'shuvo'
            }
        }, {
            new: true
        },
        err => {
            if (err) {
                res.status(500).json({message: 'There was a server error', error: err})
            } else {
                res.status(200).json({message: 'Todos updated successfully.'})
            }
        }
    ).clone().catch(function (err) {
        console.log(err)
    })
})

//delete one todos
router.delete('/:id', async (req, res) => {
    await Todo.deleteOne({_id: req.params.id}, err => {
        if (err) {
            res.status(500).json({message: 'There was a server error', error: err})
        } else {
            res.status(200).json({message: 'Todo Deleted successfully.'})
        }
    })
})


module.exports = router;