const express = require('express');
const router = express.Router()

const { signup } = require('../controllers/user');

//route method
router.post('/signup', signup);

module.exports = router;