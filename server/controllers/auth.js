'use strict';
const User = require('../models/user');
const jwt = require('jsonwebtoken');


exports.authenticate = function (req, res) {
  User.findOne({username: req.body.username}, function (err, user) {
    if (err) {
      res.json({
        success: false,
        message: 'something went wrong'
      });
      return;
    }

    if (! user) {
      res.json({
        success: false,
        message: 'User not found'
      });
      return;
    }

    if (user.password !== req.body.password) {
      res.json({
        success: false,
        message: 'Incorrect Password'
      });
    } else {
      const payload = {
        user: user
      };
      let token = jwt.sign(
        payload, req.app.get('secret'),
        {expiresIn: 60 * 60 * 24}
      );
      // let decoded = jwt.decode(token);

      // return the information including token as JSON
      res.json({
        success: true,
        message: 'Enjoy your token!',
        token  : token,
        user   : user
      });
    }
  });
};
