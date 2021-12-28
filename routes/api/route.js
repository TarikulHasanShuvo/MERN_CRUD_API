const expess = require('express')
const todoHandler = require('../../src/routeHandler/todoHandler')

const router = expess.Router();


// This for todo CRUD oparetion.
router.use('/todo',todoHandler);


module.exports = router;