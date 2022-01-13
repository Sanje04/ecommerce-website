const User = require('../models/user')

exports.signup = (req, res) => {
    console.log("req.body", req.body);
    const user = new User(req.body);

    user.save((error) => {
        if(err) {
            return res.status(400).json({
                error
            })
        }
        res.json({
            user
        });
    })
}