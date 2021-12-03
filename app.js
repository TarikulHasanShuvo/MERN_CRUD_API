const expess = require('express')
const  mongoose = require('mongoose')
const todoHandler = require('./src/routeHandler/todoHandler')

// app init
const app = expess()
// response return type
app.use(expess.json())

// db connect
const url = 'mongodb://localhost/todos'
mongoose.connect(url)
.then(()=> console.log('db connection success'))
.catch((err)=>console.log(err))


// port number 
const PORT = 8000;

// http://localhost:8000
app.listen(PORT,()=>{
    console.log('Server start in http://localhost:8000');
})


// This for todo CRUD oparetion.
app.use('/todo',todoHandler);