const express = require('express')
const userController = require('../../controllers/user.controller')
const todoController = require('../../controllers/todo.controller')
const productController = require('../../controllers/product.controller')
const authGuard = require("../../middlewares/auth.jwt");

const router = express.Router();

// This for User CRUD operation.
router.use('/user',userController);

// This for todo CRUD operation.
 router.use('/todo',authGuard,todoController);


// This for product CRUD operation.
router.use('/product',productController);


module.exports = router;
