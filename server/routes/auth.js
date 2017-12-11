const Auth = require('../controllers/auth');


module.exports = function (router) {
  router.post('/api/authenticate', Auth.authenticate);
};
