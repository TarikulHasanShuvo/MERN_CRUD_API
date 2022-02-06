const expess = require('express')
const todoHandler = require('../../src/routeHandler/todoHandler')
const productHandler = require('../../src/routeHandler/productHandler')

const router = expess.Router();


// This for todo CRUD operation.
 router.use('/todo',todoHandler);

// This for product CRUD operation.
router.use('/product',productHandler);


module.exports = router;