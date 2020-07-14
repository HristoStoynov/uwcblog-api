const env = process.env.NODE_ENV || 'development'
require('dotenv').config();

const config = {
    development: {
        port: process.env.PORT,
        dbURL: process.env.DB_URL,
        cookie: process.env.COOKIE,
        secret: process.env.DB_KEY
    },
    production: {}
};

module.exports = config[env]