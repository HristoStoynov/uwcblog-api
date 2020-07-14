const { body } = require('express-validator');

module.exports = [

    body('email', 'Please enter valid email')
        .matches(/.+@.+/)
    ,

    body('password', 'Password should be atleast 6 characters long')
        .isLength({ min: 6 })
    ,

    body('repeatPassword', 'Passwords should match')
        .equals('password')
    ,
];