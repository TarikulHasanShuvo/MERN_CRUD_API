const mongoose = require('mongoose')

// This a Schema/Table Design/ Migration File
const todoSchema = mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    description: String,
    status: {
        type: String,
        enum: ['active', 'inactive']
    },

    date: {
        type: Date,
        default: Date.now
    }

})

module.exports = todoSchema;