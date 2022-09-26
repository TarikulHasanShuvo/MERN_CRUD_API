const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user.model');
const {jwtSecret} = require("../config/app.config");


router.post('/register', async (req, res) => {
    let newUser = new User(req.body);
    newUser.password = bcrypt.hashSync(req.body.password, 10);
    await newUser.save(function (err, user) {
        if (err) {
            return res.status(400).send({
                message: err
            });
        } else {
            user.password = undefined;
            return res.json({
                user: res.json(user),
                message: 'User registered successfully.',
                status: 200
            });
        }
    })
})


router.post('/login', async (req, res) => {
    User.findOne({
        email: req.body.email
    }, function (err, user) {
        if (err) throw err;
        if (!user) {
            res.status(401).json({message: 'Authentication failed. User not found.'});
        } else if (user) {
            if (!user.comparePassword(req.body.password)) {
                res.status(401).json({message: 'Authentication failed. Wrong password.'});
            } else {
                user.password = undefined;
                return res.json({
                    token: jwt.sign({email: user.email, name: user.name, _id: user._id}, jwtSecret),
                    user
                });
            }
        }
    });
})


module.exports = router;
