'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BrandSchema = new Schema({
  name       : String,
  description: String
});

BrandSchema.statics = {
  getAll: (function (query, callback) {
    this.find(query, callback);
  })
};

const Brand = mongoose.model('Brand', BrandSchema);

module.exports = Brand;
