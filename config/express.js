const express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const config = require('./config')
const cors = require('cors')

module.exports = (app) => {
    app.use(cors({
        origin: config.dbURL,
        credentials: true
    }));

    app.use(cookieParser());

    app.use(bodyParser.urlencoded({ extended: true }))

    app.use(bodyParser.json());
};