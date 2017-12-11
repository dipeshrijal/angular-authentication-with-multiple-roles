'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const ProductSchema = new Schema({
  name    : {type: String},
  price   : {type: Number},
  quantity: {type: Number},
  size    : {type: Number},
  brand   : {type: Schema.Types.ObjectId, ref: 'Brand'},
});

ProductSchema.statics = {

  get: function (query, callback) {
    this.findOne(query, callback);
  },

  getAll: function (query, callback) {
    this.find()
      .populate({
        path: 'brand',
        select: 'name',
      })
      .exec(query, callback);
  },

  updateById: function (query, updateData, callback) {
    this.update(query, {$set: updateData}, callback);
  },

  delete: function (removeData, callback) {
    this.remove(removeData, callback);
  },

  create: function (data, callback) {
    const product = new this(data);
    product.save(callback);
  }
};


const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
