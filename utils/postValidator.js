const { body } = require('express-validator');

module.exports = [

    body('title', 'Title should be at least 5 symbols')
        .isLength({ min: 5 })
    ,

    body('description', 'Description should be alphanumeric and min 20 characters')
        .isLength({ min: 20 })
    ,

    body('imageUrl', 'imageUrl should be valid')
        .matches(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/).*$/)
    ,

    body('createdAt', 'Date should be DD Month YYYY')
        .matches(/^[0-9]{2} [A-Za-z]{3,4} [0-9]{4}$/)
    ,
];