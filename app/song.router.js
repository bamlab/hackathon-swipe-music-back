var controller = require('./song.controller')

module.exports = function (server) {

  server.route({
    method: 'GET',
    path:'/user/{userId}/songs',
    handler: controller.getSongs,
  });

  server.route({
    method: 'GET',
    path:'/user/{userId}/song/{songId}/like',
    handler: function (request, reply) {
      response = reply();
      response.code(204);
    },
  });

  server.route({
    method: 'GET',
    path:'/user/{userId}/song/{songId}/unlike',
    handler: function (request, reply) {
      response = reply();
      response.code(204);
    },
  });

};
