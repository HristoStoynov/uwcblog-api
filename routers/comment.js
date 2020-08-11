const router = require('express').Router();
const controllers = require('../controllers');
const { auth } = require('../utils/');

router.post('/create', controllers.comment.post);

router.get('/getAll', controllers.comment.getAll);

router.post('/answer', auth(), controllers.comment.answer)

module.exports = router;