const express = require('express');
const router = express.Router()

const { requireSignin, isAuth, isAdmin } = require('../controllers/auth');
const { userById } = require('../controllers/user');


//isAuth checks if the user has access to its own profile
router.get('/secret/:userId', requireSignin, isAuth, isAdmin, (req, res) => {
    res.json({
        user: req.profile
    });
});

//route method

//middle
router.param('userId', userById)

module.exports = router;