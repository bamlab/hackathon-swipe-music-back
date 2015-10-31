var Hapi = require('hapi');

// plugins
var vision = require('vision');
var inert = require('inert');
var lout = require('lout');


var server = new Hapi.Server();
server.connection({ port: 3000 });

server.register([ vision, inert, { register: lout }], function(err) {});

server.route({
  method: 'GET',
  path:'/',
  handler: function (request, reply) {
    reply('hello world');
  },
});



module.exports = server;

