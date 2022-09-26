const mongoose = require('mongoose')

const Todo = mongoose.model(
    "Todo",
    new mongoose.Schema(
        {
            title: {
                type: String, required: true
            },
            description: String,
            status: {
                type: String, enum: ['active', 'inactive']
            },
            date: {
                type: Date, default: Date.now
            }
        }
    )
);

module.exports = Todo;
