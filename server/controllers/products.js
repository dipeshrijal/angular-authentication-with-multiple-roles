'use strict';

const Product = require('../models/product');

exports.create = function (req, res) {
  Product.create(req.body, function (err, result) {
    if (! err) {
      return res.status(200).json(result);
    } else {
      return res.status(500).send(err);
    }
  });
};


exports.get = function (req, res) {
  Product.getAll({}, function (err, result) {
    if (! err) {
      return res.status(200).json(result);
    } else {
      return res.status(500).send(err);
    }
  });

};

exports.update = function (req, res) {
  Product.updateById({_id: req.params.id}, req.body, function (err, result) {
    if (! err) {
      return res.status(200).json(result);
    } else {
      return res.status(500).send(err);
    }
  });
};

exports.delete = function (req, res) {
  Product.remove({_id: req.params.id}, function (err, result) {
    if (! err) {
      return res.status(200).json(result);
    } else {
      return res.status(500).send(err);
    }
  });
};

exports.findOne = function (req, res) {
  Product.findOne({_id: req.params.id},  function (err, result) {
    if (! err) {
      return res.status(200).json(result);
    } else {
      return res.status(500).send(err);
    }
  });
};
