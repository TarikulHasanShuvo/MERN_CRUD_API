const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        } ,
        email: {
            type: String,
            required: true
        },
        password: {
            type: String || Number,
            required: true
        },
        date: {
            type: Date, default: Date.now
        }
    })

UserSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};
module.exports = mongoose.model('User', UserSchema);
