const Product = require('../controllers/products');
const auth = require('./middleware/auth');

module.exports = function (router) {
  router.post('/api/products', auth.verifyToken,  Product.create);
  router.get('/api/products', Product.get);
  router.get('/api/products/:id', auth.verifyToken, Product.findOne);
  router.put('/api/products/:id', auth.verifyToken, Product.update);
  router.delete('/api/products/:id', auth.verifyToken, Product.delete);
};
