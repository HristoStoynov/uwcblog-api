const router = require('express').Router();
const controllers = require('../controllers');
const auth = require('../utils/auth');
const postValidator = require('../utils/postValidator')

router.get('/get', controllers.post.get)

router.post('/create', auth(), postValidator, controllers.post.post.create);


/*router.get('/create', auth(), controllers.item.get.create);

router.get('/allitems', auth(), controllers.item.get.allitems)

router.get('/view/:itemId', auth(), controllers.item.get.details);

router.get('/edit/:itemId', auth(), controllers.item.get.edit);

router.post('/edit/:itemId', auth(), itemValidator, controllers.item.post.edit);

router.get('/delete/:itemId', auth(), controllers.item.get.delete);

router.get('/enroll/:itemId', auth(), controllers.item.get.enroll);*/

module.exports = router;