const auth = require('./middleware/auth');

module.exports = function (router) {
  require('./product')(router);
  require('./brand')(router);
  require('./auth')(router);


  router.get('/api/check-state', auth.verifyToken, (req, res) => {

    let content = {
      success: true,
      message: 'Successfully logged in'
    };

    res.send(content);

  });
};
