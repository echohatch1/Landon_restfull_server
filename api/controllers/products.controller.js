'use strict';


const mongoose = require('mongoose'),
  Product = mongoose.model('Products');

exports.list_all_products = function(req, res) {
  Product.find({}, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};



exports.create_a_product = function(req, res) {
  let new_product = new Product(req.body);
  new_product.save(function(err, product) {
    if (err)
      res.send(err);
    res.json({ message: 'Product successfully created' + product});
  });
};


exports.read_a_product = function(req, res) {
    Product.findById( req.params.productId, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};

exports.read_a_product_name = function(req, res) {
    Product.findOne( { name: req.params.productName }, function(err, product) {
    if (err)
      res.send(err);
    res.json(product);
  });
};



exports.update_a_product = function(req, res) {
    Product.findOneAndUpdate({_id: req.params.productId}, req.body, {new: true}, function(err, product) {
    if (err)
      res.send(err);
    res.json({ message: 'Product successfully updated' + product });
  });
};


exports.delete_a_product = function(req, res) {


    Product.remove({
    _id: req.params.productId
  }, function(err, product) {
    if (err)
      res.send(err);
    res.json({ message: 'Product successfully deleted' });
  });
};