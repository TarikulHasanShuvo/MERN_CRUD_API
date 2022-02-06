const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const productSchema = require('../schema/productSchema')
// Created a Product Model for product collection.
const Product = new mongoose.model("Product", productSchema)


//get all Product
router.get('/', async (req, res) => {
    Product.find((err, data) => {
        if (err) {
            res.status(500).json({message: 'There was a server error', error: err})
        } else {
            res.status(200).json({
                result: data,
                message: 'Products get successfully.'
            })
        }
    })
})

//get one Product
router.get('/:id', async (req, res) => {
    Product.findOne({_id: req.params.id}, (err, data) => {
        if (err) {
            res.status(500).json({message: 'There was a server error', error: err})
        } else {
            res.status(200).json({
                result: data,
                message: 'Product get successfully.'
            })
        }
    })
})

//save one Product
router.post('/', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save(err => {
        if (err) {
            res.status(500).json({message: 'There was a server errors', error: err})
        } else {
            res.status(200).json({message: 'Product saved successfully.'})
        }
    })
})

//save multiple Product
router.post('/all', async (req, res) => {

    await Product.insertMany(req.body, err => {
        if (err) {
            res.status(500).json({message: 'There was a server error', error: err})
        } else {
            res.status(200).json({message: 'Products were saved successfully.'})
        }
    })
})

//update one Product
router.put('/:id', async (req, res) => {
    await Product.updateOne({
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
                res.status(200).json({message: 'Product updated successfully.'})
            }
        }
    ).clone().catch(function (err) {
        console.log(err)
    })
})

//delete one Product
router.delete('/:id', async (req, res) => {
    await Product.deleteOne({_id: req.params.id}, err => {
        if (err) {
            res.status(500).json({message: 'There was a server error', error: err})
        } else {
            res.status(200).json({message: 'Product Deleted successfully.'})
        }
    })
})


module.exports = router;