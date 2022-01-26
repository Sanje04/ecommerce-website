const express = require('express');
const router = express.Router()

const { create, productById, read, remove, update } = require('../controllers/product');
const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const { userById } = require('../controllers/user');


router.get('/product/:productId', read)

//deleting a product from db
router.delete('/product/:productId/:userId', requireSignin, isAuth, isAdmin, remove)

//updating a product
router.put('/product/:productId/:userId', requireSignin, isAuth, isAdmin, update)

//route method
router.post('/product/create/:userId', requireSignin, isAuth, isAdmin, create);


router.param('userId', userById);
router.param('productId', productById);


module.exports = router;