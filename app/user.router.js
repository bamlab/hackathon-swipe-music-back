var controller = require('./user.controller')

  module.exports = function (server) {

    server.route({
      method: 'POST',
      path:'/login',
      handler: controller.login,
  });

};
