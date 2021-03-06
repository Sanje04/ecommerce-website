const express = require('express');
const router = express.Router()

const { create, categoryById, read, update, remove, list } = require('../controllers/category');
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const { userById } = require('../controllers/user');

router.get('/category/:categoryId', read)
//route method
router.post('/category/create/:userId', requireSignin, isAuth, isAdmin, create);

//updating
router.put('/category/:categoryId/:userId', requireSignin, isAuth, isAdmin, update);
//deleting
router.delete('/category/:categoryId/:userId', requireSignin, isAuth, isAdmin, remove);
//getting all the category
router.get('/categories', list)



router.param('categoryId', categoryById)
router.param('userId', userById);

module.exports = router;