const mongoose = require('mongoose')
const todoSchema = require('../../src/schema/todoSchema')
// Created a Todo Model for todo collection.
const Todo = new mongoose.model("Todo", todoSchema)
const expess = require('express')

const router = expess.Router();


router.use('/about',(req,res)=>{
    res.render('about');
});

router.use('/contact',(req,res)=>{
    res.render('contact');
});

router.use('/',(req,res)=>{
    Todo.find({status: 'active'}, (err, data) => {
        res.render('index',{todos : data})
    })
   
});


module.exports = router;