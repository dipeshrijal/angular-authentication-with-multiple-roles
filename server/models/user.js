'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const UserSchema = new Schema({
  name    : {type: String},
  username   : {type: String},
  password: {type: String},
});

UserSchema.statics = {

  get: function (query, callback) {
    this.findOne(query, callback);
  },

  getAll: function (query, callback) {
    this.find(query, callback);
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


const User = mongoose.model('User', UserSchema);

module.exports = User;
