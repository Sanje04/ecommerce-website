const express = require('express');
const router = express.Router()

const {sayHi} = require('../controllers/user');

//route method
router.get('/', sayHi);

module.exports = router;