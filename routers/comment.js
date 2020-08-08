const router = require('express').Router();
const controllers = require('../controllers');
//const auth = require('../utils/auth');
//const postValidator = require('../utils/postValidator')

router.post('/create', controllers.comment.post);
router.get('/getAll', controllers.comment.getAll);

module.exports = router;