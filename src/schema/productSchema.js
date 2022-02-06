const mongoose = require('mongoose')

// This a Schema/Table Design/ Migration File
const productSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    }

})

module.exports = productSchema;