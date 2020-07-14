const router = require('express').Router();
const controllers = require('../controllers');
const auth = require('../utils/auth');
const userValidator = require('../utils/userValidator')

router.post('/logout', auth(), controllers.user.post.logout);

router.post('/login', controllers.user.post.login);

router.post('/register', controllers.user.post.register);


module.exports = router;