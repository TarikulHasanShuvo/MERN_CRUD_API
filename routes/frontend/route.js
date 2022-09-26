const Todo = require('../../models/todo.model')
const express = require('express')

const router = express.Router();


router.use('/about',(req,res)=>{
    res.render('about');
});

router.use('/contact',(req,res)=>{
    res.render('contact');
});

router.use('/',(req,res)=>{
    Todo.find( (err, data) => {
        res.render('index',{todos : data})
    })

});


module.exports = router;
