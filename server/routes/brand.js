const Brand = require('../controllers/brand');

module.exports = function (router) {
  router.get('/api/brands', Brand.get);
};

