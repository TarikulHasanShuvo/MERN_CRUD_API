const expess = require('express')
const  mongoose = require('mongoose')


const routeModules = require('./routes/index');

// app init
const app = expess()
// response return type
app.use(expess.json())

//All route define here

routeModules(app);


// set the view engine to ejs
app.set('view engine', 'ejs');

// db connect
const url = 'mongodb://localhost/MERN_API'
mongoose.connect(url)
.then(()=> console.log('db connection success'))
.catch((err)=>console.log(err))


// port number 
const PORT = 8000;

// http://localhost:8000
app.listen(PORT,()=>{
    console.log('Server start in http://localhost:8000');
})



