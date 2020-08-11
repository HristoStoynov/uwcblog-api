const router = require('express').Router();
const controllers = require('../controllers');
const { auth } = require('../utils/');
const postValidator = require('../utils/postValidator')

router.get('/getOne', controllers.post.get.one)

router.get('/getAll', controllers.post.get.all)

router.post('/create', auth(), postValidator, controllers.post.post.create);

router.post('/delete', auth(), controllers.post.post.delete);

router.post('/update', auth(), postValidator, controllers.post.post.edit);

module.exports = router;