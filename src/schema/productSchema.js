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
    image: {
        type: String,
        default : 'https://t3.ftcdn.net/jpg/00/36/94/26/360_F_36942622_9SUXpSuE5JlfxLFKB1jHu5Z07eVIWQ2W.jpg'
    },

    date: {
        type: Date,
        default: Date.now
    }

})

module.exports = productSchema;