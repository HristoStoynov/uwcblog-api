const router = require('express').Router();
const controllers = require('../controllers');
const { auth } = require('../utils/');
const userValidator = require('../utils/userValidator')

router.post('/logout', auth(), controllers.user.post.logout);

router.post('/login', controllers.user.post.login);

router.post('/verify', controllers.user.post.verify);

router.post('/register', controllers.user.post.register);

router.get('/getOne', controllers.user.getOne)

module.exports = router;