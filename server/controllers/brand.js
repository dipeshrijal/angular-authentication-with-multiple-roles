const Brand = require('../models/brand');

exports.get = function (req, res) {
  Brand.getAll({}, function (err, result) {
    if (! err) {
      return res.status(200).json(result);
    } else {
      return res.status(500).send(err);
    }
  });
};
