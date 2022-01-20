const express = require('express');
const router = express.Router()

const { create } = require('../controllers/category');

//route method
router.post('/category/create', create);




module.exports = router;